import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const [destinations, setDestinations] = useState([
    { id: 1, name: "Pokhara", description: "Beautiful lakeside city." },
    { id: 2, name: "Kathmandu", description: "Capital of Nepal." },
  ]);

  const [newDestination, setNewDestination] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setNewDestination({ ...newDestination, [e.target.name]: e.target.value });
  };

  const handleAddDestination = () => {
    if (newDestination.name && newDestination.description) {
      setDestinations([
        ...destinations,
        { id: Date.now(), ...newDestination },
      ]);
      setNewDestination({ name: "", description: "" });
    }
  };

  const handleDeleteDestination = (id) => {
    setDestinations(destinations.filter((dest) => dest.id !== id));
  };

  return (
    <div className="container mt-5" >
  <h2 className="mb-4 text-white">Admin Panel - Manage Destinations</h2>

  {/* Form to Add Destination */}
  <div className="card p-4 mb-4" style={{ backgroundColor: '#343a40' }}>
    <h4 className="text-white">Add New Destination</h4>
    <div className="mb-3">
      <label className="form-label text-white">Name</label>
      <input
        type="text"
        className="form-control"
        name="name"
        value={newDestination.name}
        onChange={handleInputChange}
      />
    </div>
    <div className="mb-3">
      <label className="form-label text-white">Description</label>
      <textarea
        className="form-control"
        name="description"
        value={newDestination.description}
        onChange={handleInputChange}
      ></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleAddDestination}>
      Add Destination
    </button>
  </div>

  {/* List of Destinations */}
  <div className="card p-4" style={{ backgroundColor: '#343a40' }}>
    <h4 className="text-white">Existing Destinations</h4>
    <table className="table table-bordered mt-3">
      <thead className="table-dark">
        <tr>
          <th className="text-white">ID</th>
          <th className="text-white">Name</th>
          <th className="text-white">Description</th>
          <th className="text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {destinations.map((dest) => (
          <tr key={dest.id}>
            <td className="text-white">{dest.id}</td>
            <td className="text-white">{dest.name}</td>
            <td className="text-white">{dest.description}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteDestination(dest.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default AdminDashboard;
