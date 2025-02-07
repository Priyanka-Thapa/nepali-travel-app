import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"; // Import the CSS file
import DarkModeToggle from "./DarkModeToggle"; // Import Toggle

const AppNavbar = () => {
  return (
    <Navbar className="animated-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="nav-brand">🏔 Nepali Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <DarkModeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
