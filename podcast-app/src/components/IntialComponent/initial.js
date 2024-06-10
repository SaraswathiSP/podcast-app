import React, { useState } from "react";
import "./initial.css";
import { FaHome } from "react-icons/fa";
import Header from "../Header/header";
import CreateProjectPopup from "../CreateProjectPopup/createProjectPopup";

const InitialComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="initial-container">
      <Header />
      <div className="back-to-home">
        <FaHome className="home-icon" />
        <span>Back to Home</span>
      </div>
      <div className="content">
        <h1>Create New Project</h1>
        <img
          src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718002561/Group_16_lan4dp.png"
          alt="Project"
          className="project-image"
        />
        <p>
          Get started with your new podcast project by creating a new project.
        </p>
        <button onClick={togglePopup} className="create-button">
          Create New Project
        </button>
      </div>
      {showPopup && <CreateProjectPopup togglePopup={togglePopup} />}
    </div>
  );
};

export default InitialComponent;
