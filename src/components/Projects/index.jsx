import React from "react";

// libraries
import { Row } from "react-bootstrap";

// components
import Project from "./Project";

// data
import projectsData from "../data/projectsData.json";

const Projects = () => {
  return (
    <div className="px-4 my-2">
      <div className="sectionHeader">Projects</div>
      <div className="mb-2">Click to see details</div>
      <Row>
        {projectsData &&
          projectsData.map((projectData) => (
            <Project
              key={`Project-${projectData.id}`}
              projectData={projectData}
            />
          ))}
      </Row>
    </div>
  );
};

export default Projects;
