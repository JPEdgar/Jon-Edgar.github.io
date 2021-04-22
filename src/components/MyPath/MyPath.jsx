import React from "react";

import Grid from "./components/Grid";
import { GridProvider } from "./contexts/GridContext";

import "./pathStyles.css";

export default function MyPath() {
  return (
    <div>
      <p>
        This is my take on Dijkstra's algorithm. Beyond the general explination
        of what it is, I did all of this by thinking about how to do it.
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
      <hr style={{ margin: "10px" }} />
      <GridProvider>
        <Grid />
      </GridProvider>
    </div>
  );
}
