import './EventDashboard.css';
import Sidebar from '../Sidebar';
import React, { useState } from 'react'; 
import { IoMdAdd } from "react-icons/io";
import eventData from '../../components/description';

const EventDashboard = () => {
   const events = eventData;

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [photo, setPhoto] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, position, email, linkedin, photo });
  };

  const handlePulseClick = () => {
    setShowDashboard(!showDashboard);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleContentClick = () => {
    if (isSidebarExpanded) {
      setIsSidebarExpanded(false); // Collapse the sidebar when clicking on content
    }
  };

  return (
    <div>
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className="ContainerEvent" onClick={handleContentClick}>
        <h1>Events</h1>
        <div className="flexcontentsEvent">
          {showDashboard ? (
            <div className="event-dashboard">
              <form onSubmit={handleSubmit}>
                <p>New</p>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Faculty Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="LinkedIn URL"
                    value={linkedin}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <span>Upload Photo</span>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            <div className="addiconevent">
              <IoMdAdd onClick={handlePulseClick} className="addevent" />
            </div>
          )}
        </div>
        <div className="dashevents-grid">
          {events.map((event, index) => (
            <div className="dashevent-card" key={index}>
              <img src={event.img} alt="Event" className="dashimageButton" />
              <div className="dashevent-content">
                <h3>{event.title}</h3>
                <p>{event.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
