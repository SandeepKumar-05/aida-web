import React,{useState} from 'react'
import './AchivementDashboard.css'
import Sidebar from '../Sidebar'
function AchivementDashboard() {
   
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleContentClick = () => {
    if (isSidebarExpanded) {
      setIsSidebarExpanded(false); // Collapse the sidebar when clicking on content
    }
  };

  return (
   <div className="mainDash">
       <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <h1>Coming Soon...</h1>
    </div>
  )
}

export default AchivementDashboard
