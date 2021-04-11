export default function FindNeighbor(startNode, numCols, numRows) {
  let searchNode = [];
  const returnArr = [];
  let continueSearch = true;
  let foundEnd = false;
  let luckyNode = []

  function AssessNode(startSpot, searchSpot) {
    const element = document.getElementById(
      `${searchSpot[0]}, ${searchSpot[1]}`
    );

    if (element.classList.contains("startNode")) {
      //
    } else if (element.classList.contains("endNode")) {
      console.log(`${searchSpot} is end node`);
      continueSearch = false;
      foundEnd = true;
    } else if (element.getAttribute("was-visited") === "true") {
      //
    } else if (element.classList.contains("wallNode")) {
      //
    } else {
      element.setAttribute("was-visited", "true");
      element.setAttribute("parent-node", `${startSpot[0]}, ${startSpot[1]}`);
      returnArr.push(searchSpot);
    }
  }

  // up (0, -1)
  searchNode = [startNode[0], startNode[1] - 1];
  if (searchNode[1] < 0) {
    //
  } else {
    if (continueSearch) {
      AssessNode(startNode, searchNode);
    }
    if (foundEnd) {
      luckyNode = startNode
    }
  }

  // right (+1, 0)
  searchNode = [startNode[0] + 1, startNode[1]];
  if (searchNode[0] >= numCols) {
    //
  } else {
    if (continueSearch) {
      AssessNode(startNode, searchNode);
    }
    if (foundEnd) {
      luckyNode = startNode
    }
  }

  // down (0, +1)
  searchNode = [startNode[0], startNode[1] + 1];
  if (searchNode[1] >= numRows) {
    //
  } else {
    if (continueSearch) {
      AssessNode(startNode, searchNode);
    }
    if (foundEnd) {
      luckyNode = startNode
    }
  }

  // left (-1, 0)
  searchNode = [startNode[0] - 1, startNode[1]];
  if (searchNode[0] < 0) {
    //
  } else {
    if (continueSearch) {
      AssessNode(startNode, searchNode);
    }
    if (foundEnd) {
      luckyNode = startNode
    }
  }

  return [returnArr, continueSearch, foundEnd, luckyNode];
}
