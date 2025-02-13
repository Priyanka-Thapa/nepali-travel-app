import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import "../styles/destinations.css";

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [show, setShow] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchDestinationsData();
  }, []);

  const fetchDestinationsData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/destinations");
      setDestinations(response.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  const handleShow = (destination) => {
    setSelectedDestination(destination);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // Filtering logic based on search and category
  const filteredDestinations = destinations.filter((destination) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (category === "All" || destination.tags.toLowerCase().includes(category.toLowerCase())) &&
      (
        destination.name.toLowerCase().includes(searchLower) ||
        destination.location.toLowerCase().includes(searchLower) ||
        destination.description.toLowerCase().includes(searchLower) ||
        destination.tags.toLowerCase().includes(searchLower)
      )
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Destination
          </h6>
          <h1>Explore Top Destinations</h1>
        </div>

        {/* Search and Filter UI */}
        <div className="row mb-4">
          <div className="col-md-6">
            <Form.Control
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Cultural">Cultural</option>
              <option value="historical">Historical</option>
              <option value="Adventure">Adventure</option>
              <option value="Natural">Natural</option>
            </Form.Select>
          </div>
        </div>

        {/* Destination List */}
        <div className="row">
          {currentDestinations.map((destination) => (
            <div className="col-lg-4 col-md-6 mb-4" key={destination.id}>
              <div 
                className="destination-item position-relative overflow-hidden mb-2"
                onClick={() => handleShow(destination)}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="img-fluid rounded shadow-lg"
                  src={destination.image_url}
                  alt={destination.name}
                  style={{ width: "400px", height: "250px", objectFit: "cover", transition: "0.3s" }}
                />
                <div className="destination-overlay text-white text-decoration-none">
                  <h5 className="text-white">{destination.name}</h5>
                  <span>{destination.tags}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-container text-center mt-4">
          <Button 
            variant="primary" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)}
            className="me-2"
          >
            Previous
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button 
            variant="primary" 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(currentPage + 1)}
            className="ms-2"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDestination?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDestination && (
            <>
              <img 
                src={selectedDestination.image_url} 
                alt={selectedDestination.name} 
                className="img-fluid rounded mb-3"
                style={{ width: "100%", height: "auto" }} 
              />
              <p><strong>Location:</strong> {selectedDestination.location}</p>
              <p><strong>Description:</strong> {selectedDestination.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Destination;
