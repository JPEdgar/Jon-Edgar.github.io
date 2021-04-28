import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Algos from "./pages/Algos.jsx";
import Projects from "./pages/Projects";
import About from "./pages/About";

import "./styles.css";

import "@fortawesome/fontawesome-free/css/all.css";

export default function App() {
  return (
    <div className="main">
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}
      >
        <div className="header myName">Jonathon Edgar</div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/JPEdgar/"
          className="fab fa-github header icon"
        >
          GitHub
        </a>
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              <Link className="nav" to="/">
                Algorithms
              </Link>
            </li>
            <li>
              <Link className="nav" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav" to="/about">
                About
              </Link>
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
    </div>
  );
}
