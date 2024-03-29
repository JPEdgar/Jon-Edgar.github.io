import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom"; // normally removed, but needed for ReactDOM.findDOMNode()

// components
import SlideBar from "./SlideBar";
import BuildGrid from "./BuildGrid";
import FindNeighbor from "../algorithms/FindNeighbor";

// contexts
import { GridContext, ACTIONS } from "../contexts/GridContext";

const Grid = () => {
  const [state, dispatch] = useContext(GridContext);
  const [grid, setGrid] = useState(BuildGrid(state));
  let searchNode = [];
  let isSearching = false;
  let searchArray = [];

  // To keep code organized for what is mine and what isn't, this state is only a reference but defined below
  // const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    console.log( "%cNote:", "color: yellow; font-weight: bold; font-size: 1rem;", "For whatever reason, setting keys breaks the program." );
    console.log( "Normally, the solution would be something like: %c<CustomComponent key={ some unique identifier } />", "color: #009900; font-style: italic;" );
  }, []);

  // BuildGrid()
  useEffect(() => {
    setGrid(BuildGrid(state));
    // eslint-disable-next-line
  }, [ state.numRows, state.numCols, state.startPos, state.endPos, state.cellSize, ]);

  // AnimatedSearchNodes()
  useEffect(() => {
    if (state.startSearchedAnimation) {
      AnimateSearchedNodes();
    } // eslint-disable-next-line
  }, [state.startSearchedAnimation]);

  // FindPath()
  useEffect(() => {
    if (state.startAnim) {
      const path = FindPath(); // returns list of children array
      setTimeout(() => {
        AnimatePath(path);
      }, state.animationDelay);
    } // eslint-disable-next-line
  }, [state.startAnim]);

  const AnimateSearchedNodes = () => {
    const tempSearched = [...state.searchedNodes];
    let count = 0;
    const interval = setInterval(() => {
      if (count < state.searchedNodes.length) {
        const activeNode = tempSearched.shift();
        const element = document.getElementById( `${activeNode[0]}, ${activeNode[1]}` );
        const shorthand = ReactDOM.findDOMNode(element).classList;
        shorthand.add("visitedNode");
      } else {
        dispatch({ type: ACTIONS.START_ANIM, payload: true });
        clearInterval(interval);
      }
      count++;
    }, state.animationDelay);
    return () => clearInterval(interval);
  }

  const FindPath = () => {
    const listOfChildren = [`${state.luckyNode[0]}, ${state.luckyNode[1]}`];

    let search = true;
    const start = state.startPos[0] + ", " + state.startPos[1];
    while (search) {
      let parent = listOfChildren.slice(-1);

      //   eslint-disable-next-line
      if (parent[0] == start) {
        search = false;
      } else {
        const element = document.getElementById(parent);
        if (element) {
          listOfChildren.push(element.getAttribute("parent-node"));
        }
      }
    }

    return listOfChildren;
  }

  const AnimatePath = (listOfChildren) => {
    let i = listOfChildren.length;
    const start = state.startPos[0] + ", " + state.startPos[1];
    const interval = setInterval(() => {
      if (i > 0) {
        i--;
        let path = listOfChildren.pop();
        // eslint-disable-next-line
        if (path != start) {
          const element = document.getElementById(path);
          const shorthand = ReactDOM.findDOMNode(element).classList;
          if ( !shorthand.contains("endNode") && !shorthand.contains("startNode") ) shorthand.add("pathNode");
        }
      }
    }, state.animationDelay);
    return () => clearInterval(interval);
  }

  const handleClick = (e) => {
    const clickLocation = [
      parseInt(e.target.getAttribute("x-loc")),
      parseInt(e.target.getAttribute("y-loc")),
    ];

    if (state.setStart) {
      dispatch({
        type: ACTIONS.SET_START,
        payload: clickLocation,
      });
      dispatch({
        type: ACTIONS.TOGGLE_START,
        payload: false,
      });
    } else if (state.setEnd) {
      dispatch({
        type: ACTIONS.SET_END,
        payload: clickLocation,
      });
      dispatch({
        type: ACTIONS.TOGGLE_END,
        payload: false,
      });
    }
  }

  const SearchForNeighbors = () => {
    dispatch({ type: ACTIONS.DISABLE_UI, payload: true });
    do {
      GetNeighbor();
    } while (isSearching);
  }

  const GetNeighbor = () => {
    let locatedEnd = false;

    if (searchArray.length <= 0 && !isSearching) {
      // start search w/ startNode
      searchNode = [...state.startPos];
      isSearching = true;
    } else if (searchArray.length > 0) {
      // continue search
      searchNode = searchArray.shift();
    } else {
      // no end located
      dispatch({ type: ACTIONS.NO_END, payload: true });
      isSearching = false;
    }

    if (searchNode.length > 0) {
      const [searchResults, continueSearch, foundEnd, returnLuckyNode] = FindNeighbor(searchNode, state); // return [returnArr (arr), continueSearch (bool), foundEnd (bool), luckyNode (arr)];

      if (foundEnd) {
        locatedEnd = foundEnd;
        dispatch({ type: ACTIONS.LUCKY_NODE, payload: returnLuckyNode });
        isSearching = false;
      }

      if (continueSearch) {
        searchArray = searchArray.concat(searchResults);
        dispatch({
          type: ACTIONS.SEARCHED_NODES,
          payload: searchResults,
        });
      } else {
        searchArray = searchResults;
        dispatch({
          type: ACTIONS.SEARCHED_NODES,
          payload: searchResults,
        });
      }
    }

    if (locatedEnd) dispatch({ type: ACTIONS.START_SEARCH_ANIMATIONS, payload: true });
    
  }

  ////// start section - pieces/foundation of this code located at:
  // https://gist.github.com/dimitrinicolas/f8768ae7b664b6259eb923157b16d4fc
  // then modified to work with what I had in mind.

  const [mouseDown, setMouseDown] = useState(false);

  // initial setup for click
  useEffect(() => {
    const handleDocumentMouseUp = (event) => {
      if (event.button !== 2) setTimeout(() => setMouseDown(false), 10);
    };

    document.addEventListener("mouseup", handleDocumentMouseUp);
    return () => { document.removeEventListener("mouseup", handleDocumentMouseUp); };
  }, []);

  const handleMouseDown = (event) => {
    if (state.setStart || state.setEnd) return;
    
    const element = document.getElementById(event.target.id);
    const shorthand = ReactDOM.findDOMNode(element).classList;

    if (event.button !== 2) setMouseDown(true);

    let tempDraw = false;
    if (shorthand.contains("wallNode")) {
      dispatch({ type: ACTIONS.DRAW_WALL, payload: false });
    } else {
      dispatch({ type: ACTIONS.DRAW_WALL, payload: true });
      tempDraw = true;
    }

    handleWall(shorthand, tempDraw);
  };

  const handleMouseEnter = (event) => {
    if (state.setStart || state.setEnd) return;
    
    if (event.button !== 2 && mouseDown) {
      const element = document.getElementById(event.target.id);
      const shorthand = ReactDOM.findDOMNode(element).classList;
      handleWall(shorthand);
    }
  };

  const handleMouseUp = (event) => {
    if (event.button !== 2) {
      setMouseDown(false);

      if (window.getSelection) window.getSelection().removeAllRanges();
      
    }
  };

  //
  ////// section end

  const handleWall = (shorthand, override = null) => {
    if (shorthand.contains("startNode") || shorthand.contains("endNode")) return;
    
    if (override != null) {
      if (override) shorthand.add("wallNode");
      else shorthand.remove("wallNode");
    } else {
      // if user wants to add a wall and the node DOESN'T have a wallNode
      if (state.setDrawWall && !shorthand.contains("wallNode")) shorthand.add("wallNode");
      
      // if the user wants to remove a wall but the node DOES have a wallNode
      else if (!state.setDrawWall && shorthand.contains("wallNode")) shorthand.remove("wallNode");
      
    }
  }

  const Reset = () => {
    dispatch({ type: ACTIONS.RESET });
    setGrid([]);
    searchNode = [];
    isSearching = false;
    searchArray = [];
  }

  return (
    <>
      <section style={{ display: "flex" }}>
        <div style={{ height: "80px", width: "275px" }}>
          <p disabled={!state.noEnd} hidden={!state.noEnd} style={{ color: "red" }} >
            No path found.
          </p>
          <p disabled={!state.noEnd} hidden={!state.noEnd} >
            Make sure there is a start and end node on the grid, and those nodes
            are not sealed off by walls.
          </p>

          <SlideBar enable={state.disableUI} id={1} label="Rows" min={5} max={30} step={1} value={state.numRows} callback={state.numRows} />
          <SlideBar enable={state.disableUI} id={2} label="Cols" min={5} max={30} step={1} value={state.numCols} callback={state.numCols} />
          <SlideBar enable={state.disableUI} id={3} label="Size" min={20} max={40} step={1} value={state.cellSize} callback={state.cellSize} />
          <SlideBar enable={state.disableUI} id={4} label="Animation Speed" min={1} max={3} step={1} value={state.animationDelay} callback={state.animationDelay} />
        </div>

        <button
          disabled={state.disableUI}
          hidden={state.disableUI}
          style={{
            height: "40px",
            width: "100px",
            marginLeft: "10px",
            backgroundColor: state.setStart ? "rgba(255, 0, 0, 0.50)" : "",
          }}
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_START,
              payload: !state.setStart,
            })
          }
        >
          Set Start
        </button>

        <button
          disabled={state.disableUI}
          hidden={state.disableUI}
          style={{
            height: "40px",
            width: "100px",
            marginLeft: "10px",
            backgroundColor: state.setEnd ? "rgba(0, 0, 255, 0.5)" : "",
          }}
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_END,
              payload: !state.setEnd,
            })
          }
        >
          Set End
        </button>

        <button
          disabled={state.disableUI}
          hidden={state.disableUI}
          onClick={() => SearchForNeighbors()}
          style={{ height: "40px", width: "100px", marginLeft: "10px" }}
        >
          Get Path
        </button>
        <button
          disabled={!state.disableUI}
          hidden={!state.disableUI}
          onClick={() => Reset()}
          style={{ height: "40px", width: "100px", marginLeft: "10px" }}
        >
          Reset
        </button>
      </section>
      <br />

      <div
        onClick={(e) => handleClick(e)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {grid.map((rows) => {
          return (
            <div
              // key={Math.random(0, 1) * 1000} // keys, for whatever reason, break the program
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {rows.map((cell) => {
                return (
                  <div
                    // key={Math.random(0, 1) * 1000} // keys, for whatever reason, break the program
                    onMouseDown={handleMouseDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseUp={handleMouseUp}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
