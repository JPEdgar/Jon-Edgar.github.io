import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Algos from "./pages/Algos.jsx";
import Projects from "./pages/Projects";
import About from "./pages/About";

import "./styles.css";

export default function App() {
  return (
    <>
      <header>Jonathon Edgar</header>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Algorithms</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Algos />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
