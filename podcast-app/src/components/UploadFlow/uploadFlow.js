import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LeftNavbar from "../LeftNavbar/leftNavbar";
import EditorScreen from '../EditorScreen/editor'
import UploadPopup from "../UploadPopup/uploadPopup";
import "./uploadFlow.css";

const UploadFlow = () => {
  const { projectId } = useParams();
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const [selectedProject, setSelectedProject] = useState(projects[projectId]);
  const [popupType, setPopupType] = useState("");

  const handleSave = (name, description) => {
    const updatedProjects = [...projects];
    updatedProjects[projectId] = { ...selectedProject, name, description };
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setSelectedProject({ ...selectedProject, name, description });
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setSelectedProject(null);
  };

  return (
    <div className="upload-flow">
      <LeftNavbar />
      <EditorScreen
        project={selectedProject}
        setPopupType={setPopupType}
        handleSave={handleSave}
        handleDelete = {handleDelete}
      />
      {popupType && (
        <UploadPopup
          type={popupType}
          onClose={() => setPopupType("")}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UploadFlow;
