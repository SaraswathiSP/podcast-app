import React from "react";
import './editorscreen.css';
import { FaHome } from "react-icons/fa";

const EditorScreen = ({ project, setPopupType, handleDelete }) => {
  return (
    <div className="editor-screen" style={{ padding: "40px" }}>
      <div className="breadcrumb">
        <span>
          <FaHome className="home-icon" style={{ color: "#7E22CE" }} /> {project?.name} / Upload
        </span>
      </div>
      <h1 style={{ color: "#7E22CE", fontSize: "40px" }}>Upload</h1>
      <div className="upload-options" style={{ display: "flex" }}>
        <div style={{ border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', padding: '15px', margin: '15px' }} onClick={() => setPopupType("youtube")}>
          <img
            src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718016172/Frame_1_qjxkid.png"
            alt="youtube"
            style={{ width: '50px' }}
          />
          <span>Upload Youtube Video</span>
        </div>
        <div style={{ border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', padding: '15px', margin: '15px' }} onClick={() => setPopupType("spotify")}>
          <img
            alt="spotify"
            src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718016173/Frame_2_mdp97g.png"
            style={{ width: '50px' }}
          />
          <span>Upload Spotify Podcast</span>
        </div>
        <div style={{ border: '1px solid #999999', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', padding: '15px', margin: '15px' }} onClick={() => setPopupType("rssfeed")}>
          <img
            alt="rssfeed"
            src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718016172/image_1_lwcdtw.png"
            style={{ width: '50px' }}
          />
          <span>Upload from Rss Feed</span>
        </div>
      </div>
      {project?.name && project?.description ?  (
     <table className="project-table" style={{ border: '2px solid #999999', borderRadius: '15px', borderCollapse: 'collapse', width: '100%' }}>
     <thead>
       <tr>
         <th style={{ border: '2px solid #999999', padding: '10px', textAlign: 'left' }}>Name</th>
         <th style={{ border: '2px solid #999999', padding: '10px', textAlign: 'left' }}>Upload Date & Time</th>
         <th style={{ border: '2px solid #999999', padding: '10px', textAlign: 'left' }}>Status</th>
         <th style={{ border: '2px solid #999999', padding: '10px', textAlign: 'left' }}>Actions</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td style={{ border: '2px solid #999999', padding: '10px' }}>{project.name}</td>
         <td style={{ border: '2px solid #999999', padding: '10px' }}>{new Date().toLocaleString()}</td>
         <td style={{ border: '2px solid #999999', padding: '10px' }}>Done</td>
         <td style={{ border: '2px solid #999999', padding: '10px' }}>
           <button style={{ padding: '5px 10px', marginRight: '5px', color: '#7E22CE', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
           <button onClick={() => handleDelete(project.id)} style={{ padding: '5px 10px',  color: 'red', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
         </td>
       </tr>
     </tbody>
   </table>
   
      ) : (
        <div className="select-file-container" style={{ padding:'20px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" , margin:'20px', borderStyle:"dotted"}}>
          <img src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718018033/cloud_upload_w9ji5m.png" alt="upload-icon" />
          <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
          <img style={{width:'150px'}}alt="#" src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718018032/MP4_MOV_MP3_WAV_PDF_DOCX_or_TXT_file_efzezb.png" />
          <img style={{width:'150px'}} alt="#" src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718018033/Button_vpdctj.png" />
        </div>
      )}
    </div>
  );
};

export default EditorScreen;
