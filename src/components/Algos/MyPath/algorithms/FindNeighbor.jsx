// returns [returnArr (array), continueSearch (bool), foundEnd (bool), luckyNode (array)];
const FindNeighbor = (startSpot, state) => {
  // up (0, -1), right (+1, 0), down (0, +1), left (-1, 0)
  const neighborLocations = [
    [0, -1], // up
    [1, 0], // right
    [0, 1], // down
    [-1, 0], // left
  ];

  const returnArr = [];
  let continueSearch = true;
  let foundEnd = false;
  let luckyNode = [];

  neighborLocations.forEach((searchSpot) => {
    let tempSpot = searchSpot.map((num, idx) => {
      return num + startSpot[idx];
    });

    if (
      tempSpot[1] < 0 || // out of bounds - top
      tempSpot[0] >= state.numCols || // out of bounds - right
      tempSpot[1] >= state.numRows || // out of bounds - bottom
      tempSpot[0] < 0 // out of bounds - left
    ) {
      return;
    }

    if (continueSearch) {
      AssessNode(tempSpot);
    }
  });

  function AssessNode(searchPos) {
    const element = document.getElementById(`${searchPos[0]}, ${searchPos[1]}`);

    if (element.classList.contains("startNode")) {
      //
    } else if (element.classList.contains("endNode")) {
      // console.log(`${searchPos} is end node`);
      continueSearch = false;
      foundEnd = true;
      luckyNode = searchPos;
      element.setAttribute("parent-node", `${startSpot[0]}, ${startSpot[1]}`);
    } else if (element.getAttribute("was-visited") === "true") {
      //
    } else if (element.classList.contains("wallNode")) {
      //
    } else {
      // not a startNode, endNode, visitedNode, wall, or out-of-bounds
      element.setAttribute("was-visited", "true");
      element.setAttribute("parent-node", `${startSpot[0]}, ${startSpot[1]}`);
      returnArr.push(searchPos);
    }
  }
  return [returnArr, continueSearch, foundEnd, luckyNode];
};

export default FindNeighbor;
