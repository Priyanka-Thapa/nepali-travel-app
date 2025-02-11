import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/admin.css"; // Ensure styles are correctly linked
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPage = () => {
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState(null);
    // Fetch Destinations from API
    useEffect(() => {
        fetchDestinations();
    }, []);

    const fetchDestinations = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/destinations");
            setDestinations(response.data);
        } catch (error) {
            console.error("Error fetching destinations:", error);
        }
    };

    // Open Modal for Add/Edit
    const openModal = (destination = null) => {
        document.body.classList.add("modal-open"); // Disable background scrolling
        setSelectedDestination(destination);
        setIsEditing(!!destination);
        setIsModalOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        document.body.classList.remove("modal-open"); // Re-enable scrolling
        setIsModalOpen(false);
        setSelectedDestination(null);
    };

    // Handle Add or Edit Submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const destinationData = {
            name: formData.get("name"),
            location: formData.get("location"),
            description: formData.get("description"),
            tags: formData.get("tags"),
            image: formData.get("image"),
        };

        try {
            if (isEditing) {
                await axios.put(`http://localhost:5000/api/destinations/${selectedDestination.id}`, destinationData);
            } else {
                await axios.post("http://localhost:5000/api/destinations", destinationData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                });
            }
            fetchDestinations();
            closeModal();
        } catch (error) {
            console.error("Error saving destination:", error);
        }
    };
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };
    // Delete Destination
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this destination?")) {
            try {
                await axios.delete(`http://localhost:5000/api/destinations/${id}`);
                fetchDestinations();
            } catch (error) {
                console.error("Error deleting destination:", error);
            }
        }
    };

    return (
        <div className="admin-container">
            <Sidebar />
            <div className="admin-content">
                <h2 className="mb-3">Admin Panel - Manage Destinations</h2>
                <button className="btn btn-success mb-3" onClick={() => openModal()}>
                    + Add Destination
                </button>

                {/* Destination Table */}
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Description</th>
                                <th>Tags</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {destinations.map((destination) => (
                                <tr key={destination.id}>
                                    <td>{destination.name}</td>
                                    <td>{destination.location}</td>
                                    <td>{destination.description}</td>
                                    <td>{destination.tags}</td>
                                    <td>
                                        <img src={destination.image_url} alt="Destination" className="img-thumbnail" width="60" />
                                    </td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => openModal(destination)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(destination.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Add/Edit Destination Modal */}
                {isModalOpen && (
                    <div className="modal-overlay" >
                        <div className="modal-content" style={{
                            backgroundColor: 'white', color: 'black', width: '500px',  // Set width
                            maxWidth: '90%',
                            height: 'auto',
                            padding: '20px',
                            borderRadius: '8px'
                        }}>
                            {/* Close Button */}
                            <span className="modal-close" onClick={closeModal}>&times;</span>

                            <h3 className="text-center">{isEditing ? "Edit Destination" : "Add Destination"}</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label className="form-label">Name</label>
                                    <input type="text" name="name" defaultValue={selectedDestination?.name || ""} className="form-control" required />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Location</label>
                                    <input type="text" name="location" defaultValue={selectedDestination?.location || ""} className="form-control" required />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Description</label>
                                    <textarea name="description" defaultValue={selectedDestination?.description || ""} className="form-control" required></textarea>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Tags</label>
                                    <input type="text" name="tags" defaultValue={selectedDestination?.tags || ""} className="form-control" required />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Image URL</label>
                                    <input type="file" name="image" onChange={handleFileChange} required />
                                </div>
                                <div className="d-flex justify-content-center mt-3">

                                    <button type="submit" className="btn btn-primary" style={{ width: '100px', marginRight: '10px' }}>
                                        {isEditing ? "Update" : "Add"}
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={closeModal} style={{ width: '100px', marginRight: '10px' }}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AdminPage;

