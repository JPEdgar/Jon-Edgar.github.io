import React from "react";

// libraries
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Algos from "./components/Algos";
import Projects from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

// styles
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <Container className="my-4">
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/algos" element={<Algos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
