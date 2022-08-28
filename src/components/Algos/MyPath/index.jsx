import React from "react";

//components
import Grid from "./components/Grid";
import LinkTo from "../../elements/LinkTo";

// context
import { GridProvider } from "./contexts/GridContext";

// styles
import "./pathStyles.css";

const MyPath = () => {
  return (
    <div className="px-4 my-2">
      <p className="sectionHeader mb-2">Pathing</p>
      <p>
        This project is my take on Dijkstra's algorithm. Beyond the general
        explanation of what it is, I did all of this by thinking about how to do
        it.
      </p>
      <p>
        This project was inspired by
        <LinkTo
          href="https://clementmihailescu.github.io/Pathfinding-Visualizer/"
          text="Clement Mihailescu's"
          spaceLeft
          spaceRight
        />
        <span className="ms-1">page.</span>
      </p>
      <p>
        To use: Left-click and drag to create/remove walls. Use the sliders to
        adjust the height/width/scale of the grid, and click on the "Set Start"
        or "Set End" button then click on the grid to re-position the start/end
        node. Click "Get Path" to initiate the path finding algorithm.
      </p>
      <hr style={{ margin: "10px 0px" }} />
      <GridProvider>
        <Grid />
      </GridProvider>
    </div>
  );
};

export default MyPath;
