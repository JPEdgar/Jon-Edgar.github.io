import React from "react";

import "../pathStyles.css";

// returns a 2d array
const BuildGrid = (state) => {
  const grid = [];
  for (let i = 0; i < state.numRows; i++) {
    grid.push([]);
    for (let j = 0; j < state.numCols; j++) {
      grid[i].push(BuildCell(i, j));
    }
  }

  function BuildCell(row, col) {
    const currClass = "grid";
    let nodeClass = "";
    let wasVisited;

    if (state.startPos[1] === row && state.startPos[0] === col) {
      nodeClass = currClass.concat(" startNode");
      wasVisited = true;
    } else if (state.endPos[1] === row && state.endPos[0] === col) {
      nodeClass = currClass.concat(" endNode");
      wasVisited = true;
    } else {
      nodeClass = currClass.concat(" unvisitedNode");
      wasVisited = false;
    }

    return (
      <div
        key={`${col}, ${row}`}
        id={`${col}, ${row}`}
        x-loc={col}
        y-loc={row}
        was-visited={wasVisited.toString()}
        className={nodeClass}
        style={{
          height: state.cellSize,
          width: state.cellSize,
          border: `${state.stroke}px solid red`,
        }}
      >
      </div>
    );
  }

  return grid;
};

export default BuildGrid;
