import React, { useState } from "react";

// libraries
import { Card, Button } from "react-bootstrap";

// components
import ImageModal from "./ImageModal";

const ImageCard = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-2">
        <Card.Img
          variant="top"
          src={data.smallImage}
          onClick={() => setModalShow(true)}
          style={{
            cursor: "pointer",
            objectFit: "cover",
            maxHeight: "250px",
            objectPosition: "100% 0",
          }}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            View Image
          </Button>
        </Card.Body>
      </Card>
      <ImageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
    </>
  );
};

export default ImageCard;
