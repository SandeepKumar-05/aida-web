import './App.css';
import { useState } from 'react';
import Home from "./Home";
import EventsPage from "./components/eventspage";
import Certificate from "./components/Certificate";
import Faculty from "./components/Faculty";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StarsCanvas from './Canvas/Stars';
import Project from './components/Project'
import Login from './Login/Login';
import FacultyDashboard from './Admin/Pages/FacultyDashboard';
import Dashboard from './Admin/Dashboard';
import EventDashboard from './Admin/Pages/EventDashboard';
import AchivementDashboard from './Admin/Pages/AchivementDashboard';
import ProjectDashboard from './Admin/Pages/ProjectDashboard';
import MembersDashboard from './Admin/Pages/MembersDashboard';
function App() {

    return (

      <div className="App">
        <StarsCanvas />
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path='/project' element={<Project/>} />
          <Route path="/verify" element={<Certificate />} />
          <Route path="/login" element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/facultydashboard' element={<FacultyDashboard/>}/>
          <Route path='/projectdashboard' element={<ProjectDashboard/>} />
          <Route path='/eventdashboard' element={<EventDashboard/>}/>
          <Route path='/memberdashboard' element={<MembersDashboard/>}/>
          <Route path='/achivementdashboard' element={<AchivementDashboard/>} />
        </Routes>
      </Router>

      </div>
    );
}

export default App
