import Grid from "./components/Grid";
import "./styles.css";

import { GridContext } from "./contexts/GridContext";

export default function App() {
  return (
    <>
      <GridContext.Provider value="context test">
        <Grid />
      </GridContext.Provider>
    </>
  );
}
