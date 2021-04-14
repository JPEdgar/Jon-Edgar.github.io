import React, { useContext, useState, useEffect } from "react";
import { GridContext, ACTIONS } from "../contexts/GridContext";
import SlideBar from "../components/SlideBar";
import BuildGrid from "../components/BuildGrid";
import FindNeightbor from "../algorithms/FindNeighbor";

export default function Grid() {
  const [state, dispatch] = useContext(GridContext);
  const [grid, setGrid] = useState(BuildGrid(state));
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    setGrid(BuildGrid(state));
    // eslint-disable-next-line
  }, [state.numRows, state.numCols, state.startPos, state.endPos]);

  function handleClick(e) {
    const temp = [
      parseInt(e.target.getAttribute("x-loc")),
      parseInt(e.target.getAttribute("y-loc")),
    ];

    if (start) {
      dispatch({ type: ACTIONS.SET_START, payload: temp });
      setStart(false);
    } else if (end) {
      dispatch({ type: ACTIONS.SET_END, payload: temp });
      e.target.style.backgroundColor = "cornsilk";
      setEnd(false);
    } else {
      console.log(e.target);
    }
  }

  return (
    <>
      <section style={{ display: "flex" }}>
        <div>
          <SlideBar
            id={1}
            label="Rows"
            max={30}
            value={state.numRows}
            callback={state.numRows}
          />
          <SlideBar
            id={2}
            label="Cols"
            max={30}
            value={state.numCols}
            callback={state.numCols}
          />
        </div>

        <button
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
          onClick={() => FindNeightbor()}
          style={{ height: "40px", width: "100px", marginLeft: "10px" }}
        >
          Get Path
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
                height: "40px",
              }}
            >
              {rows.map((cell) => {
                return <>{cell}</>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
