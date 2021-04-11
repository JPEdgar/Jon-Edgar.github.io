import { useState, createContext, useReducer } from "react";

export const ACTIONS = {
  GRID_ROWS_INC: "grid-rows-inc",
  GRID_ROWS_DEC: "grid-rows-dec",
  GRID_COLS_INC: "grid-rows-inc",
  GRID_COLS_DEC: "grid-rows-dec",
};

export const GridContext = createContext();

const initialState = { numRows: 0, numCols: 0, cellSize: 40 };

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case ACTIONS.GRID_ROWS_INC:
      return { ...state, numRows: state.numRows + 1 };
    case ACTIONS.GRID_ROWS_DEC:
      return { ...state, numRows: state.numRows - 1 };
    case ACTIONS.GRID_COLS_INC:
      return { ...state, numCols: state.numCols + 1 };
    case ACTIONS.GRID_COLS_DEC:
      return { ...state, numCols: state.numCols - 1 };
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
