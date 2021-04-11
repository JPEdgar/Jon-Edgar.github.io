import React, { useContext } from "react";
import { GridContext, ACTIONS } from "../contexts/GridContext";
import SlideBar from "../components/SlideBar";

export default function Grid() {
  const [state, dispatch] = useContext(GridContext);

  return (
    <>
      {/* <button onClick={() => dispatch({ type: "ACTIONS.INC" })}>Click</button>{" "} */}
      {/* <button
        style={{ width: "25px" }}
        onClick={() => dispatch({ type: ACTIONS.GRID_ROWS_INC })}
      >
        -
      </button>{" "}
      {state.numRows}{" "}
      <button
        style={{ width: "25px" }}
        onClick={() => dispatch({ type: ACTIONS.GRID_ROWS_DEC })}
      >
        +
      </button> */}
      <SlideBar
        id={1}
        label="test"
        max={30}
        value={state.numRows}
        callback={state.numRows}
      />
    </>
  );
}
