////// slider component reverse-engineered from:
// https://www.npmjs.com/package/react-input-range-slider

import React, { useContext } from "react";
import { GridContext, ACTIONS } from "../contexts/GridContext";

const SlideBar = ({ id, label, min, max, step, enable }) => {
  const [state, dispatch] = useContext(GridContext);

  const handleChange = (e) => {
    if (label === "Rows") dispatch({ type: ACTIONS.GRID_ROWS_SET, payload: e.target.value });
    else if (label === "Cols") dispatch({ type: ACTIONS.GRID_COLS_SET, payload: e.target.value });
    else if (label === "Size") dispatch({ type: ACTIONS.CELL_SIZE, payload: e.target.value });
    else if (label === "Animation Speed") dispatch({ type: ACTIONS.ANIMATION_DELAY, payload: e.target.value });
  };

  let override = false;
  let overrideText = "";
  let item;
  if (label === "Rows") item = state.numRows;
  else if (label === "Cols") item = state.numCols;
  else if (label === "Size") item = state.cellSize;
  else if (label === "Animation Speed") {
    override = true;
    item = state.animationDelay / 25;
    if (state.animationDelay === 25) overrideText = "Fast animation";
    else if (state.animationDelay === 50) overrideText = "Medium animation";
    else if (state.animationDelay === 75) overrideText = "Slow animation";
  }

  return (
    <>
      <form>
        <input className="slider" disabled={enable} hidden={enable} id={`slider${id}`} type="range" min={min} max={max} value={item} step={step} onChange={handleChange} />
        <label htmlFor={`slider${id}`} hidden={enable} style={{ fontSize: "1rem" }} >
          {override ? ` ${overrideText}` : ` ${item} ${label}`}
        </label>
      </form>
    </>
  );
};

export default SlideBar;
