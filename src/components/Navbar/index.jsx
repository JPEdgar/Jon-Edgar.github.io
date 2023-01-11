import React from "react";

// libraries
import { Nav } from "react-bootstrap";

// components
import NavLink from "../elements/NavLink";

const Navbar = () => {
  return (
    <Nav className="d-flex justify-content-evenly navbar">
      <NavLink path="/" text="Projects" />
      <NavLink path="/algos" text="Algorithms" />
      <NavLink path="/about" text="About" />
      <NavLink path="/graphic-design" text="Graphic Design samples" />
    </Nav>
  );
};

export default Navbar;
