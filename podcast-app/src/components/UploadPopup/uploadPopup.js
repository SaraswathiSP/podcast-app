import React, { useState } from "react";
import "./uploadPopup.css";

const UploadPopup = ({ type, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(name, description);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <header className="popup-header">
          <h2>Upload from {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Project Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadPopup;
