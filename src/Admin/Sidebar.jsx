import React, { useState } from 'react';
import './Sidebar.css';
import { TfiDashboard } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Sidebar = ({ isExpanded, toggleSidebar }) => {


  const content = [
  { label: 'Dashboard', icon: <TfiDashboard />, route: '/dashboard' },
  { label: 'Faculty', icon: <FaChalkboardTeacher />, route: '/facultydashboard' },
  { label: 'Project', icon: <GrProjects />, route: '/projectdashboard' },
  { label: 'Events', icon: <MdEventAvailable />, route: '/eventdashboard' },
  { label: 'Achivements', icon: <MdOutlineEmojiEvents />, route: '/achivementdashboard' },
  { label: 'Members', icon: <HiOutlineUsers />, route: '/memberdashboard' },
  { label: 'Settings', icon: <CiSettings />, route: '/settings' },
  { label: 'Logout', icon: <CiLogout/>, route: '/Logout' },
];


  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
        <div className="header" onClick={toggleSidebar}>
          {isExpanded ? <BsBoxArrowLeft /> : <BsBoxArrowInRight />}
        </div>
        <div className="menu">
          {content.slice(0, 6).map((item, index) => (
           <Link 
                to={item.route}
                className={`menu-item ${location.pathname === item.route ? 'active-menu-item' : ''}`}
                key={index}> 
                <div className="menu-item">
                  {item.icon}{isExpanded && <span>{item.label}</span> }
                </div>
            </Link>
          ))}
        </div>
        <div className="other-section">
          {isExpanded && <h3>OTHER</h3>}
          {content.slice(6).map((item, index) => (
            <div className="menu-item" key={index}>
              {item.icon}
              {isExpanded && <span>{item.label}</span>}
            </div>
          ))}
          <div className="dashfooter">
            <FaCircleUser />
            {isExpanded && <span>Sarah Milley</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
