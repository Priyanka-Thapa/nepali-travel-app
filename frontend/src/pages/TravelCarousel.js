import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselImg1 from '../assets/carousel-1.jpg';
import carouselImg2 from '../assets/carousel-2.jpg';

const TravelCarousel = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg1} alt="First slide" />
          <Carousel.Caption>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg2} alt="Second slide" />
          <Carousel.Caption>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TravelCarousel;
