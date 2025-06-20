import React,{useState}from 'react';
import './Dashboard.css';
import { FaUsers, FaCalendarAlt, FaTrophy, FaProjectDiagram, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
  // Sample data for charts
  const eventData = [
    { name: 'Jan', events: 2 },
    { name: 'Feb', events: 3 },
    { name: 'Mar', events: 5 },
    { name: 'Apr', events: 4 },
    { name: 'May', events: 7 },
    { name: 'Jun', events: 6 },
  ];

  const projectStatusData = [
    { name: 'Completed', value: 12 },
    { name: 'Ongoing', value: 8 },
    { name: 'Planning', value: 5 },
  ];

  const achievementData = [
    { name: 'Academic', value: 15 },
    { name: 'Sports', value: 8 },
    { name: 'Cultural', value: 12 },
  ];

  const COLORS = ['#ff4d4d', '#ff9999', '#ffcccc'];

  // Sample executive members
  const executiveMembers = [
    { id: 1, name: 'John Doe', position: 'President', department: 'Computer Science' },
    { id: 2, name: 'Jane Smith', position: 'Vice President', department: 'Electrical' },
    { id: 3, name: 'Robert Johnson', position: 'Secretary', department: 'Mechanical' },
    { id: 4, name: 'Emily Davis', position: 'Treasurer', department: 'Civil' },
  ];

  // Recent activities
  const recentActivities = [
    { id: 1, title: 'Annual Tech Fest', type: 'event', date: '2023-06-15' },
    { id: 2, title: 'Alumni Meet Project', type: 'project', date: '2023-06-10' },
    { id: 3, title: 'Inter-College Sports Win', type: 'achievement', date: '2023-06-05' },
    { id: 4, title: 'Faculty Development Program', type: 'faculty', date: '2023-05-28' },
  ];
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="mainDash">
       <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
    <div className="homeDashContainer">
      <div className="homeDashHeader">
        <h1>Hi,Dev</h1>
        {/* <p>Welcome back! Here's what's happening with your association.</p> */}
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <div className="card-icon" style={{ backgroundColor: '#ffebee' }}>
            <FaUsers style={{ color: '#d32f2f' }} />
          </div>
          <div className="card-content">
            <h3>Executive Members</h3>
            <p>24</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: '#ffebee' }}>
            <FaCalendarAlt style={{ color: '#d32f2f' }} />
          </div>
          <div className="card-content">
            <h3>Upcoming Events</h3>
            <p>7</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: '#ffebee' }}>
            <FaTrophy style={{ color: '#d32f2f' }} />
          </div>
          <div className="card-content">
            <h3>Achievements</h3>
            <p>35</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: '#ffebee' }}>
            <FaProjectDiagram style={{ color: '#d32f2f' }} />
          </div>
          <div className="card-content">
            <h3>Active Projects</h3>
            <p>13</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-container">
          <h3><FaChartLine /> Events This Year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eventData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="events" fill="#d32f2f" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3><FaChartLine /> Project Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="info-section">
        <div className="executive-members">
          <h3><FaUsers /> Executive Members</h3>
          <div className="members-list">
            {executiveMembers.map(member => (
              <div key={member.id} className="member-card">
                <div className="member-avatar">{member.name.charAt(0)}</div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                  <span>{member.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-activities">
          <h3><FaCalendarAlt /> Recent Activities</h3>
          <ul>
            {recentActivities.map(activity => (
              <li key={activity.id}>
                <div className="activity-type">{activity.type}</div>
                <div className="activity-details">
                  <h4>{activity.title}</h4>
                  <p>{new Date(activity.date).toLocaleDateString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Achievement Distribution */}
      <div className="achievement-section">
        <h3><FaTrophy /> Achievement Distribution</h3>
        <div className="achievement-chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={achievementData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {achievementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;