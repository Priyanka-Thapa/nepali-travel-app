import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Destinations.css"; 
import destination1 from "../assets/Pashupatinath.png";
import destination2 from "../assets/pokhara.jpg";
import destination3 from "../assets/everest.jpg";
import destination4 from "../assets/abc.jpg";
import destination5 from "../assets/chitwan.jpg";
import destination6 from "../assets/lumbini.jpg";

const destinationsData = [
  { img: destination1, name: "Kathmandu", category: "Cultural", desci: "Kathmandu, the capital of Nepal, is rich in history, culture, and spirituality..." },
  { img: destination2, name: "Pokhara", category: "Adventure", desci: "Pokhara is known for its stunning lakes..." },
  { img: destination3, name: "Everest Base Camp", category: "Trekking", desci: "Everest Base Camp is a dream destination for trekkers..." },
  { img: destination4, name: "Annapurna Circuit", category: "Trekking", desci: "The Annapurna Circuit is one of the most popular trekking routes..." },
  { img: destination5, name: "Chitwan National Park", category: "Wildlife", desci: "Chitwan National Park is a UNESCO World Heritage Site..." },
  { img: destination6, name: "Lumbini", category: "Cultural", desci: "Lumbini is the birthplace of Lord Buddha..." },
  { img: destination1, name: "Kathmandu", category: "Cultural", desci: "Kathmandu, the capital of Nepal, is rich in history..." },
  { img: destination2, name: "Pokhara", category: "Adventure", desci: "Pokhara is known for its stunning lakes..." },
  { img: destination3, name: "Everest Base Camp", category: "Trekking", desci: "Everest Base Camp is a dream destination..." },
  { img: destination4, name: "Annapurna Circuit", category: "Trekking", desci: "The Annapurna Circuit is one of the most popular trekking routes..." },
  { img: destination5, name: "Chitwan National Park", category: "Wildlife", desci: "Chitwan National Park is a UNESCO World Heritage Site..." },
  { img: destination6, name: "Lumbini", category: "Cultural", desci: "Lumbini is the birthplace of Lord Buddha..." },
  { img: destination1, name: "Kathmandu", category: "Cultural", desci: "Kathmandu, the capital of Nepal, is rich in history, culture, and spirituality..." },
  { img: destination2, name: "Pokhara", category: "Adventure", desci: "Pokhara is known for its stunning lakes..." },
  { img: destination3, name: "Everest Base Camp", category: "Trekking", desci: "Everest Base Camp is a dream destination for trekkers..." },
  { img: destination4, name: "Annapurna Circuit", category: "Trekking", desci: "The Annapurna Circuit is one of the most popular trekking routes..." },
  { img: destination5, name: "Chitwan National Park", category: "Wildlife", desci: "Chitwan National Park is a UNESCO World Heritage Site..." },
  { img: destination6, name: "Lumbini", category: "Cultural", desci: "Lumbini is the birthplace of Lord Buddha..." },
  { img: destination1, name: "Kathmandu", category: "Cultural", desci: "Kathmandu, the capital of Nepal, is rich in history..." },
  { img: destination2, name: "Pokhara1", category: "Adventure", desci: "Pokhara is known for its stunning lakes..." },
  { img: destination3, name: "Everest Base Camp1", category: "Trekking", desci: "Everest Base Camp is a dream destination..." },
  { img: destination4, name: "Annapurna Circuit1", category: "Trekking", desci: "The Annapurna Circuit is one of the most popular trekking routes..." },
  { img: destination5, name: "Chitwan National Park1", category: "Wildlife", desci: "Chitwan National Park is a UNESCO World Heritage Site..." },
  { img: destination6, name: "Lumbini1", category: "Cultural", desci: "Lumbini is the birthplace of Lord Buddha..." },
];

function Destination() {
  const [destinations] = useState(destinationsData); // Ensure it's initialized properly
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [show, setShow] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleShow = (destination) => {
    setSelectedDestination(destination);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // Filtering logic based on search and category
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || destination.category === category;
    return matchesSearch && matchesCategory;
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
              <option value="Adventure">Adventure</option>
              <option value="Trekking">Trekking</option>
              <option value="Wildlife">Wildlife</option>
            </Form.Select>
          </div>
        </div>

        {/* Destination List */}
        <div className="row">
          {currentDestinations.map((destination, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div 
                className="destination-item position-relative overflow-hidden mb-2"
                onClick={() => handleShow(destination)}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="img-fluid rounded shadow-lg"
                  src={destination.img}
                  alt={destination.name}
                  style={{ width: "400px", height: "250px", objectFit: "cover", transition: "0.3s" }}
                />
                <div className="destination-overlay text-white text-decoration-none">
                  <h5 className="text-white">{destination.name}</h5>
                  <span>{destination.category}</span>
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
                src={selectedDestination.img} 
                alt={selectedDestination.name} 
                className="img-fluid rounded mb-3"
                style={{ width: "100%", height: "auto" }} 
              />
              <p><strong>Description:</strong> {selectedDestination.desci}</p>
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






// const destinations = [
//   { id: 1, name: "Pokhara", image: "/images/pokhara.jpg", description: "A beautiful lakeside city." },
//   { id: 2, name: "Kathmandu", image: "/images/kathmandu.jpg", description: "The capital city with rich culture." },
//   { id: 3, name: "Chitwan", image: "/images/chitwan.jpg", description: "Famous for its national park." }
// ];

// const Destinations = () => {
//   return (
//     <Container className="mt-4">
//       <ImageCarousel />
//       <Map />
//       <h2 className="text-center mb-4 stylish-heading">🌍 Explore Nepali Destinations</h2>
//       <Row>
//         {destinations.map((destination) => (
//           <Col md={4} key={destination.id} className="mb-4">
//             <Card className="destination-card">
//               <Card.Img variant="top" src={destination.image} className="card-image"/>
//               <Card.Body>
//                 <Card.Title className="card-title">{destination.name}</Card.Title>
//                 <Card.Text>{destination.description}</Card.Text>
//                 <Button variant="primary" className="custom-button">View More</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };



// export default Destinations;




