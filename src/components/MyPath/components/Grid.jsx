import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { GridContext, ACTIONS } from "../contexts/GridContext";
import SlideBar from "../components/SlideBar";
import BuildGrid from "../components/BuildGrid";
import FindNeighbor from "../algorithms/FindNeighbor";

export default function Grid() {
  const [state, dispatch] = useContext(GridContext);
  const [grid, setGrid] = useState(BuildGrid(state));
  const [startSearchedAnimation, setStartSearchedAnimation] = useState(false);
  const [searchedNodes, setSearchedNodes] = useState([]);
  const [luckyNode, setLuckyNode] = useState([]); // the node that found the end.
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [startAnim, setStartAnim] = useState(false);
  const [disableUI, setDisableUI] = useState(false);
  const animDelay = 30;
  let searchNode = [];
  let isSearching = false;
  let searchArray = [];

  // const [mouseDown, setMouseDown] = useState(false); // To keep code organized for what is mine and what isn't, this is only a reference but defined below
  const [drawWall, setDrawWall] = useState(false);

  // BuildGrid()
  useEffect(() => {
    setGrid(BuildGrid(state));
    // eslint-disable-next-line
  }, [
    state.numRows,
    state.numCols,
    state.startPos,
    state.endPos,
    state.cellSize,
  ]);

  // AnimatedSearchNodes()
  useEffect(() => {
    if (startSearchedAnimation) {
      AnimateSearchedNodes();
    } // eslint-disable-next-line
  }, [startSearchedAnimation]);

  // FindPath()
  useEffect(() => {
    if (startAnim) {
      const path = FindPath(); // returns list of children array
      setTimeout(() => {
        AnimatePath(path);
      }, animDelay);
    } // eslint-disable-next-line
  }, [startAnim]);

  function AnimateSearchedNodes() {
    const tempSearched = [...searchedNodes];
    let count = 0;
    const interval = setInterval(() => {
      if (count < searchedNodes.length) {
        const activeNode = tempSearched.shift();
        const element = document.getElementById(
          `${activeNode[0]}, ${activeNode[1]}`
        );
        const shorthand = ReactDOM.findDOMNode(element).classList;
        shorthand.add("visitedNode");
      } else {
        setStartAnim(true);
        clearInterval(interval);
      }
      count++;
    }, animDelay);
    return () => clearInterval(interval);
  }

  function FindPath() {
    const listOfChildren = [`${luckyNode[0]}, ${luckyNode[1]}`];

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

  function AnimatePath(listOfChildren) {
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
          if (
            !shorthand.contains("endNode") &&
            !shorthand.contains("startNode")
          ) {
            shorthand.add("pathNode");
            //
          } else {
            //
          }
        }
      }
    }, animDelay);
    return () => clearInterval(interval);
  }

  function handleClick(e) {
    const clickLocation = [
      parseInt(e.target.getAttribute("x-loc")),
      parseInt(e.target.getAttribute("y-loc")),
    ];

    if (start) {
      dispatch({ type: ACTIONS.SET_START, payload: clickLocation });
      setStart(false);
    } else if (end) {
      dispatch({ type: ACTIONS.SET_END, payload: clickLocation });
      setEnd(false);
    } else {
      // console.log(e.target.id); // string "#, #"
      // console.log(clickLocation); // array [number, number]
      // console.log(e.target);
    }
  }

  function SearchForNeighbors() {
    setDisableUI(true);
    do {
      GetNeighbor();
    } while (isSearching);
  }

  function GetNeighbor() {
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
      isSearching = false;
    }

    // console.log(`searchNode = ${searchNode}`)
    if (searchNode.length > 0) {
      const [
        searchResults,
        continueSearch,
        foundEnd,
        returnLuckyNode,
      ] = FindNeighbor(searchNode, state); // return [returnArr (arr), continueSearch (bool), foundEnd (bool), luckyNode (arr)];

      if (foundEnd) {
        locatedEnd = foundEnd;
        setLuckyNode(returnLuckyNode);
        isSearching = false;
      }

      if (continueSearch) {
        searchArray = searchArray.concat(searchResults);
        setSearchedNodes((curr) => curr.concat(searchResults));
      } else {
        searchArray = searchResults;
        setSearchedNodes((curr) => curr.concat(searchResults));
      }
    }

    if (locatedEnd) {
      setStartSearchedAnimation(true);
    }
  }

  ////// start section - pieces/foundation of this code located at:
  // https://gist.github.com/dimitrinicolas/f8768ae7b664b6259eb923157b16d4fc
  // then modified to work with what I had in mind.

  const [mouseDown, setMouseDown] = useState(false);

  // initial setup for click
  useEffect(() => {
    const handleDocumentMouseUp = (event) => {
      if (event.button !== 2) {
        setTimeout(() => setMouseDown(false), 10);
      }
    };

    document.addEventListener("mouseup", handleDocumentMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleDocumentMouseUp);
    };
  }, []);

  const handleMouseDown = (event) => {
    const element = document.getElementById(event.target.id);
    const shorthand = ReactDOM.findDOMNode(element).classList;

    if (event.button !== 2) {
      setMouseDown(true);
    }

    let tempDraw = false;
    if (shorthand.contains("wallNode")) {
      setDrawWall(false);
    } else {
      setDrawWall(true);
      tempDraw = true;
    }

    handleWall(shorthand, tempDraw);
  };

  const handleMouseEnter = (event) => {
    if (event.button !== 2 && mouseDown) {
      const element = document.getElementById(event.target.id);
      const shorthand = ReactDOM.findDOMNode(element).classList;
      handleWall(shorthand);
    }
  };

  const handleMouseUp = (event) => {
    if (event.button !== 2) {
      setMouseDown(false);

      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
    }
  };

  //
  ////// section end

  function handleWall(shorthand, override = null) {
    if (shorthand.contains("startNode") || shorthand.contains("endNode")) {
      return;
    }
    if (override != null) {
      if (override) {
        shorthand.add("wallNode");
      } else {
        shorthand.remove("wallNode");
      }
    } else {
      // if user wants to add a wall and the node DOESN'T have a wallNode
      if (drawWall && !shorthand.contains("wallNode")) {
        shorthand.add("wallNode");
      }
      // if the user wants to remove a wall but the node DOES have a wallNode
      else if (!drawWall && shorthand.contains("wallNode")) {
        shorthand.remove("wallNode");
      }
    }
  }

  function Reset() {
    // const [state, dispatch] = useContext(GridContext);
    dispatch({ type: ACTIONS.RESET });

    // const [grid, setGrid] = useState(BuildGrid(state));
    setGrid(BuildGrid(state));

    setStartSearchedAnimation(false);
    setSearchedNodes([]);
    setLuckyNode([]);
    setStart(false);
    setEnd(false);
    setStartAnim(false);
    setDisableUI(false);

    searchNode = [];
    isSearching = false;
    searchArray = [];
  }

  return (
    <>
      <section style={{ display: "flex" }}>
        <div style={{ height: "50px" }}>
          <SlideBar
            enable={disableUI}
            id={1}
            label="Rows"
            min={4}
            max={30}
            value={state.numRows}
            callback={state.numRows}
          />
          <SlideBar
            enable={disableUI}
            id={2}
            label="Cols"
            min={4}
            max={30}
            value={state.numCols}
            callback={state.numCols}
          />
          <SlideBar
            enable={disableUI}
            id={3}
            label="Size"
            min={20}
            max={40}
            value={state.cellSize}
            callback={state.cellSize}
          />
        </div>

        <button
          disabled={disableUI}
          hidden={disableUI}
          style={{
            height: "40px",
            width: "100px",
            marginLeft: "10px",
            backgroundColor: start ? "cyan" : "",
          }}
          onClick={() => setStart(!start)}
        >
          Set Start
        </button>

        <button
          disabled={disableUI}
          hidden={disableUI}
          style={{
            height: "40px",
            width: "100px",
            marginLeft: "10px",
            backgroundColor: end ? "cornsilk" : "",
          }}
          onClick={() => setEnd(!end)}
        >
          Set End
        </button>

        <button
          disabled={disableUI}
          hidden={disableUI}
          onClick={() => SearchForNeighbors()}
          style={{ height: "40px", width: "100px", marginLeft: "10px" }}
        >
          Get Path
        </button>
        <button
          disabled={!disableUI}
          hidden={!disableUI}
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
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {rows.map((cell) => {
                return (
                  <div
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
}
