import React, { useState } from "react";

// libraries
import { Card, Col } from "react-bootstrap";

// components
import ProjectsModal from "./ProjectModal";

const Project = ({ projectData }) => {
  const [modalShow, setModalShow] = useState(false);
  const [hoveringFlag, setHoveringFlag] = useState(false);
  const { title, imageUrl } = projectData;

  const handleClick = () => setModalShow((curr) => !curr);
  const handleMouseOver = () => setHoveringFlag(true);
  const handleMouseOut = () => setHoveringFlag(false);
  const handleClose = () => setModalShow(false);

  return (
    <>
      <Col xs={12} md={6}>
        <Card
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          className={
            hoveringFlag ? "mb-2 growModal growMouseOver" : "mb-2 growModal"
          }
          onClick={() => handleClick()}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center align-items-center">
              {title} 
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <ProjectsModal
        show={modalShow}
        handleClose={handleClose}
        onHide={() => setModalShow(false)}
        projectData={projectData}
      />
    </>
  );
};

export default Project;
