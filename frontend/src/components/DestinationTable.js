import React, { useState } from "react";
import "../styles/admin.css";

const DestinationTable = () => {
  const [destinations, setDestinations] = useState([
    { id: 1, name: "Mount Everest", location: "Solukhumbu", description: "Tallest mountain in the world" },
    { id: 2, name: "Phewa Lake", location: "Pokhara", description: "Beautiful freshwater lake" },
  ]);

  const handleDelete = (id) => {
    setDestinations(destinations.filter(dest => dest.id !== id));
  };

  return (
    <div className="destination-table">
      <button className="btn btn-primary mb-3">➕ Add Destination</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((dest, index) => (
            <tr key={dest.id}>
              <td>{index + 1}</td>
              <td>{dest.name}</td>
              <td>{dest.location}</td>
              <td>{dest.description}</td>
              <td>
                <button className="btn btn-warning btn-sm mx-2">✏️ Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(dest.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DestinationTable;