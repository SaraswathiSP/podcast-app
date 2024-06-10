import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import "./styles.css";
import InitialComponent from "./components/IntialComponent/initial";
import ProjectListing from "./components/ProjectListing/projectListing";
import UploadFlow from "./components/UploadFlow/uploadFlow";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/initial" element={<InitialComponent />} />
        <Route path="/projects" element={<ProjectListing />} />
        <Route path="/upload/:projectId" element={<UploadFlow />} />
      </Routes>
    </Router>
  );
}
