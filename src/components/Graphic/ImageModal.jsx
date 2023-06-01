import React from "react";

// libraries
import { Modal, Button, Image } from "react-bootstrap";

const ImageModal = (props) => {
    const {data} = props
    
    const handleClick = () => {
      console.log(data)
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={data?.largeImage} alt={data?.title} fluid/>
        {data?.description}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="success" href={`${data.largeImage}`} target="_blank" rel="noreferrer">Open Image in New Tab</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
