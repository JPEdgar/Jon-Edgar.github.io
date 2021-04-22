// returns [returnArr (array), continueSearch (bool), foundEnd (bool), luckyNode (array)];
export default function FindNeighbor(startSpot, state) {
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
      console.log(`${searchPos} is end node`);
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
}

/*

      if (
        tempSpot[1] < 0 || // out of bounds - top
        tempSpot[0] >= state.numCols || // out of bounds - right
        tempSpot[1] > state.numRows || // out of bounds - bottom
        tempSpot[0] < 0 // out of bounds - left
      ) {
        return;
      }



// import React from "react";
// import ReactDOM from "react-dom";
import { GridDetails } from "../components/GridSettings";

export default function FindNeighbor(startNode) {
  let searchNode = [];
  const returnArr = [];
  let continueSearch = true;
  let foundEnd = false;
  let luckyNode = []

  function AssessNode(searchPos, searchSpot) {
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
  if (searchNode[0] >= GridDetails.numCols) {
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
  if (searchNode[1] >= GridDetails.numRows) {
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

*/
