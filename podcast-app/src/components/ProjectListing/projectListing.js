import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import "./projectListing.css";

const ProjectListing = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const handleCreateNewProject = () => {
    navigate("/initial");
  };

  return (
    <div>
      <Header />
      <div className="project-list-container">
        <div className="project-heading-container">
          <h1>Projects</h1>
          <button onClick={handleCreateNewProject} className="create-button ">
            Create New Project
          </button>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => navigate(`/upload/${index}`)}
            >
              <div className="project-icon-container">
                <h1 className="project-icon">{project[0]}</h1>
              </div>
              <h2 className="project-title">{project}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
