import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/pokhara.jpg" alt="Pokhara" />
        <Carousel.Caption>
          <h3>Pokhara</h3>
          <p>A beautiful lakeside city.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/kathmandu.jpg" alt="Kathmandu" />
        <Carousel.Caption>
          <h3>Kathmandu</h3>
          <p>The capital city of Nepal.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
