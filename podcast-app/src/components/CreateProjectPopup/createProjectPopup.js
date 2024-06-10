import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createProjectPopup.css";

const CreateProjectPopup = ({ togglePopup }) => {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (projectName) {
      const projects = JSON.parse(localStorage.getItem("projects")) || [];
      projects.push(projectName);
      localStorage.setItem("projects", JSON.stringify(projects));
      togglePopup();
      navigate("/projects");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <header className="popup-header">
          <h2>Create a New Project</h2>
          <button className="close-button" onClick={togglePopup}>
            X
          </button>
        </header>
        <form onSubmit={handleCreateProject}>
          <div className="form-group">
            <label htmlFor="projectName">Enter Project Name:</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={togglePopup}>
              Cancel
            </button>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectPopup;
