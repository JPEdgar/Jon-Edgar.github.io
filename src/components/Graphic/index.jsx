import React from "react";

// libraries
import { Row, Col } from "react-bootstrap";

// data
import pdfData from "../data/graphicDesignListData.json";

// custom components
import ImageCard from "./ImageCard";

const GraphicDesign = () => {
  return (
    <>
      <Row>
        {pdfData &&
          pdfData.map((data) => (
            <Col key={`graphic-design-image-data-${data.id}`}>
              <ImageCard data={data} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default GraphicDesign;
