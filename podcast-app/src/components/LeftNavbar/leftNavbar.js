import React from "react";
import { NavLink } from "react-router-dom";
import "./leftNavbar.css";

const LeftNavbar = () => {
  return (
    <nav className="left-navbar">
      <div className="logo-section">
        <img
          src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718002852/directright_1_wncml7.png"
          alt="Logo"
          className="logo"
        />
        <img src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718002377/LAMA._ai7omm.png" />
      </div>
      <h2 style={{ color: "#211935", fontSize: "15px" }}>
        Podcast Upload Flow
      </h2>
      <div style={{ display: "flex", alignItems: "space-between" }}>
        <ul>
          <li className="selected">Projects</li>
          <li>Widget Configuration</li>
          <li>Deployment</li>
          <li>Pricing</li>
          <li className="settings">Settings</li>
        </ul>
      </div>
    </nav>
  );
};

export default LeftNavbar;
