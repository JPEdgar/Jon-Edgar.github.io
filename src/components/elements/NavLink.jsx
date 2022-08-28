import React from "react";

// libraries
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavLink = ({ path, text }) => {
  return (
    <Nav.Item className="d-flex navLink">
      <Nav.Link as={Link} to={path}>
        {text}
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavLink;
