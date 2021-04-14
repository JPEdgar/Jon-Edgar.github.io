// returns a 2d array
export default function BuildGrid(state) {
  const grid = [];
  for (let i = 0; i < state.numRows; i++) {
    grid.push([]);
    for (let j = 0; j < state.numCols; j++) {
      grid[i].push(BuildCell(i, j));
    }
  }

  function BuildCell(row, col) {
    let bgColor = "lightgray";
    if (state.startPos[1] === row && state.startPos[0] === col) {
      bgColor = "cyan";
    } else if (state.endPos[1] === row && state.endPos[0] === col) {
      bgColor = "cornsilk";
    }
    return (
      <div
        key={`${col}, ${row}`}
        id={`${col}, ${row}`}
        x-loc={col}
        y-loc={row}
        style={{
          height: "40px",
          width: "40px",
          border: "1px solid red",
          backgroundColor: bgColor,
        }}
      >
        {col}, {row}
      </div>
    );
  }

  return grid;
}
