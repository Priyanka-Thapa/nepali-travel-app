import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Destinations.css"; // Import the CSS file
import ImageCarousel from "../components/ImageCarousel";
import Map from "../components/Map";

const destinations = [
  { id: 1, name: "Pokhara", image: "/images/pokhara.jpg", description: "A beautiful lakeside city." },
  { id: 2, name: "Kathmandu", image: "/images/kathmandu.jpg", description: "The capital city with rich culture." },
  { id: 3, name: "Chitwan", image: "/images/chitwan.jpg", description: "Famous for its national park." }
];

const Destinations = () => {
  return (
    <Container className="mt-4">
      <ImageCarousel />
      <Map />
      <h2 className="text-center mb-4 stylish-heading">🌍 Explore Nepali Destinations</h2>
      <Row>
        {destinations.map((destination) => (
          <Col md={4} key={destination.id} className="mb-4">
            <Card className="destination-card">
              <Card.Img variant="top" src={destination.image} className="card-image"/>
              <Card.Body>
                <Card.Title className="card-title">{destination.name}</Card.Title>
                <Card.Text>{destination.description}</Card.Text>
                <Button variant="primary" className="custom-button">View More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};



export default Destinations;
