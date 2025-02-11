import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DestinationModal = ({ show, handleClose, onSave, editData }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setLocation(editData.location);
      setDescription(editData.description);
    } else {
      setName("");
      setLocation("");
      setDescription("");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, location, description });
    handleClose(); // Close modal after saving
  };

  return (
    <div className={`modal fade ${show ? "show d-block" : "d-none"}`} tabIndex="-1" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{editData ? "Edit Destination" : "Add Destination"}</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Destination Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary">{editData ? "Update" : "Save"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
