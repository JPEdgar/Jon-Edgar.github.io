import { createContext, useReducer } from "react";
import { GridDetails, StartNode, EndNode } from "../components/GridSettings";
export const GridContext = createContext();

export const ACTIONS = {
  GRID_ROWS_SET: "grid-rows-set",
  GRID_COLS_SET: "grid-cols-set",
  CELL_SIZE: "cell-size",
  DRAW_WALL: "draw-wall",
  TOGGLE_START: "toggle-start",
  TOGGLE_END: "toggle-end",
  SET_START: "set-start",
  SET_END: "set-end",
  RESET: "reset",
  DISABLE_UI: "disable-ui",
  START_ANIM: "start-animation",
  SEARCHED_NODES: "searched-nodes",
  START_SEARCH_ANIMATIONS: "start-search-animation",
  LUCKY_NODE: "lucky-node",
  ANIMATION_DELAY: "animation-delay",
};

const initialState = {
  // grid states
  numRows: GridDetails.numRows,
  numCols: GridDetails.numCols,
  cellSize: GridDetails.cellSize,
  stroke: GridDetails.stroke,

  // start/end node states
  startPos: [StartNode.xLoc, StartNode.yLoc],
  endPos: [EndNode.xLoc, EndNode.yLoc],
  setStart: false,
  setEnd: false,

  // wall node states
  setDrawWall: false,

  // misc states
  disableUI: false,
  startAnim: false,
  animationDelay: 25,
  searchedNodes: [],
  startSearchedAnimation: false,
  luckyNode: [], // the node that found the end.
};

function reducer(state, action) {
  switch (action.type) {
    // grid actions
    case ACTIONS.BUILD_GRID:
      return {};
    case ACTIONS.GRID_ROWS_SET:
      return { ...state, numRows: parseInt(action.payload) };
    case ACTIONS.GRID_COLS_SET:
      return { ...state, numCols: parseInt(action.payload) };
    case ACTIONS.CELL_SIZE:
      return {
        ...state,
        cellSize: parseInt(action.payload),
        stroke: parseInt(action.payload) * 0.025,
      };

    // start node actions
    case ACTIONS.SET_START:
      return {
        ...state,
        startPos: [...action.payload],
      };
    case ACTIONS.TOGGLE_START:
      return {
        ...state,
        setStart: action.payload,
      };

    // end node actions
    case ACTIONS.SET_END:
      return {
        ...state,
        endPos: [...action.payload],
      };
    case ACTIONS.TOGGLE_END:
      return {
        ...state,
        setEnd: action.payload,
      };

    // wall node actions
    case ACTIONS.DRAW_WALL:
      return {
        ...state,
        setDrawWall: action.payload,
      };

    //
    case ACTIONS.RESET:
      console.log("here");
      console.log(GridDetails.numRows);
      return {
        ...state, // grid states
        numRows: GridDetails.numRows,
        numCols: GridDetails.numCols,
        cellSize: GridDetails.cellSize,
        stroke: GridDetails.stroke,

        // start/end node states
        startPos: [StartNode.xLoc, StartNode.yLoc],
        endPos: [EndNode.xLoc, EndNode.yLoc],
        setStart: false,
        setEnd: false,

        // wall node states
        setDrawWall: false,

        // misc states
        disableUI: false,
        startAnim: false,
        animationDelay: 25,
        searchedNodes: [],
        startSearchedAnimation: false,
        luckyNode: [], // the node that found the end.
      };

    // misc commands
    case ACTIONS.DISABLE_UI:
      return {
        ...state,
        disableUI: action.payload,
      };
    case ACTIONS.START_ANIM:
      return {
        ...state,
        startAnim: action.payload,
      };
    case ACTIONS.SEARCHED_NODES:
      return {
        ...state,
        searchedNodes: [...state.searchedNodes].concat(action.payload),
      };
    case ACTIONS.START_SEARCH_ANIMATIONS:
      return {
        ...state,
        startSearchedAnimation: action.payload,
      };
    case ACTIONS.LUCKY_NODE:
      return {
        ...state,
        luckyNode: action.payload,
      };
    case ACTIONS.ANIMATION_DELAY:
      return {
        ...state,
        animationDelay: action.payload * 25,
      };
    //
    default:
      return state;
  }
}

export function GridProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GridContext.Provider value={[state, dispatch]}>
      {props.children}
    </GridContext.Provider>
  );
}

// let element = document.getElementById(`${action.payload[0]}, ${action.payload[1]}`)
// element.classList.add("testing2")
// console.log(element)
