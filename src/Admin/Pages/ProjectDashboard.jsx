import './ProjectDashboard.css';
import Sidebar from '../Sidebar';
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai"; 
import ProjectData from '../../components/projectData'

const ProjectDashboard = () => {
  const [projectName, setProjectName] = useState('');
  const [details, setDetails] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ projectName, details, file: selectedFile });

    // Clear form after submission (optional)
    setProjectName('');
    setDetails('');
    setSelectedFile(null);
    setShowDashboard(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handlePulseClick = () => {
    setShowDashboard(!showDashboard);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleContentClick = () => {
    if (isSidebarExpanded) {
      setIsSidebarExpanded(false);
    }
  };

  const uniqueYears = [...new Set(ProjectData.map(project => project.year))];
  const filteredProjects = ProjectData.filter(project => project.year === selectedYear);

  return (
    <div className='mainDash'>
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      <div className="containerProject" onClick={handleContentClick}>
        <h1>PROJECT</h1>

        <div className="flexcontents">
          {showDashboard ? (
            <div className="project-dashboard">
              <form className="form-container" onSubmit={handleSubmit} encType="multipart/form-data">
                <h1 className="form-header">Project Name</h1>
                <input
                  type="text"
                  className="form-input"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  required
                />

                <h2 className="form-subheader">Details</h2>
                <textarea
                  className="form-textarea"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Enter project details"
                  required
                />

                <div className="upload-section">
                  <label htmlFor="file-upload" className="upload-label">
                    {selectedFile ? selectedFile.name : 'upload photo'}
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className="addicon">
              <IoMdAdd onClick={handlePulseClick} className="add" />
            </div>
          )}
        </div>

      <div className="mainContPro">
        <div className="selectPro" aria-label="Year selectors">
          <select
            className="yearSelectPro"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {uniqueYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div className="subContPro" key={index}>
              <div className="img_sidePro">
                <img
                  src={project.img}
                  alt={project.name}
                  onError={(e) => (e.target.src = '/fallback.jpg')}
                />
              </div>
              <div className="contentProjectDash">
                <h1>{project.name}</h1>
                <p>{project.detail}</p> 
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="git" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found for {selectedYear}.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
