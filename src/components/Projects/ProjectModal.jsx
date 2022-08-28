import React, { useState, useEffect } from "react";

// libraries
import { Card, Col, Modal, Button, Image } from "react-bootstrap";

// const imageList = [ { id: 1001, image: "./images/jpedgar-com/folderStructure.jpg", alt: "JPEdgar.com folder structure snippet", caption: "Organized folder structures.", }, { id: 1002, image: "./images/jpedgar-com/code01.jpg", alt: "JPEdgar.com code snippet 1", caption: "Part of the project context.", }, { id: 1003, image: "./images/jpedgar-com/code02.jpg", alt: "JPEdgar.com code snippet 2", caption: "The blog snippet code for the front page using the blog context.", }, { id: 1004, image: "./images/jpedgar-com/JPEdgar-com.jpg", alt: "test4", caption: "test content 4", }, ];

const ProjectsModal = ({ projectData, show, onHide, handleClose }) => {
  const { imageList } = projectData;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title >
          <div className="sectionHeader me-2">{projectData.title}</div>
          (mouse over image to enlarge)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SlideSection imageList={imageList} />
        {projectData.textList &&
          projectData.textList.map((text, index) => (
            <p key={`textList-${index}`}>{text}</p>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const SlideSection = ({ imageList }) => {
  //////////////////
  // a lot of the slideshow code was copied and reworked from:
  // https://www.w3schools.com/howto/howto_js_slideshow.asp
  // this includes the styles in the styles.scss
  //

  let slideIndex = 1;

  // Next/previous controls
  const plusSlides = (currentSlideIndex) =>
    showSlides((slideIndex += currentSlideIndex));
  // Thumbnail image controls
  const currentSlide = (currentSlideIndex) =>
    showSlides((slideIndex = currentSlideIndex));

  const showSlides = (currentSlideIndex) => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length > 0) {
      if (currentSlideIndex > slides.length) slideIndex = 1;
      if (currentSlideIndex < 1) slideIndex = slides.length;
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      for (let i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  };

  showSlides(slideIndex);

  return (
    <>
      <div className="slideshow-container">
        {imageList.length > 0 &&
          imageList.map((slideInfo, index) => (
            <Slide
              key={`slideInfo-${index}`}
              slideCount={imageList.length}
              slideInfo={slideInfo}
              index={index}
            />
          ))}

        <div className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </div>
        <div className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </div>
      </div>
      <br />
      <div className="text-center">
        {imageList.length > 0 &&
          imageList.map((x, index) => (
            <Dot
              key={`dot-${index}`}
              currentSlide={currentSlide}
              index={index + 1}
            />
          ))}
      </div>
    </>
  );
};

const Dot = ({ currentSlide, index }) => (
  <span className="dot" onClick={() => currentSlide(index)} />
);

const Slide = ({ slideCount, slideInfo, index }) => {
  const [mouseOverFlag, setMouseOverFlag] = useState(false);

  const handleMouseOver = (flag) => setMouseOverFlag(flag);

  return (
    <div
      className="mySlides slideFade text-center"
      style={{ backgroundColor: "grey" }}
    >
      <div className="numbertext">
        {index+1} / {slideCount}
      </div>
      <img src={slideInfo.image} alt={slideInfo.alt} className={mouseOverFlag ? "h-100 " : "slideImage "} style={{ cursor: "zoom-in" }} onMouseOver={() => handleMouseOver(true)} onMouseOut={() => handleMouseOver(false)} />
      <div className="w-100 slideShowText">{slideInfo.caption}</div>
    </div>
  );
};

export default ProjectsModal;
