import React from "react";

import Grid from "./components/Grid";
import { GridProvider } from "./contexts/GridContext";

import "./pathStyles.css";

export default function MyPath() {
  return (
    <div>
      <p>
        This project is my take on Dijkstra's algorithm. Beyond the general
        explanation of what it is, I did all of this by thinking about how to do
        it.
      </p>
      <p>
        This project was inspired by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://clementmihailescu.github.io/Pathfinding-Visualizer/"
        >
          Clement Mihailescu's
        </a>{" "}
        page.
      </p>
      <p>
        To use: Left-click and drag to create/remove walls.  Use the sliders to
        adjust the height/width/scale of the grid, and click on the "Set Start" or
        "Set End" button then click on the grid to re-position the start/end node. Click "Get Path"
        to initiate the path finding algorithm.
      </p>
      <hr style={{ margin: "10px 0px" }} />
      <GridProvider>
        <Grid />
      </GridProvider>
    </div>
  );
}
