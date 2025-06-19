import React,{useState} from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Stack,
  Avatar,
  LinearProgress,
  Divider,
  Button
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './Dashboard.css';
import Sidebar from './Sidebar'
const Dashboard = () => {
  // Raw sample data
  const faculty = [
    { id: 1, name: 'Dr. Ayesha' },
    { id: 2, name: 'Dr. Ravi' },
    { id: 3, name: 'Dr. Anita' },
    { id: 4, name: 'Dr. Mohan' },
  ];

  const projectCount = 12;
  const upcomingEvents = 5;
  const completedProjects = 8;

  const projectProgress = Math.round((completedProjects / projectCount) * 100);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const projectData = [
    { month: 'Jan', projects: 2 },
    { month: 'Feb', projects: 3 },
    { month: 'Mar', projects: 4 },
    { month: 'Apr', projects: 1 },
    { month: 'May', projects: 2 },
  ];

  const eventData = [
    { month: 'Jan', events: 0 },
    { month: 'Feb', events: 1 },
    { month: 'Mar', events: 2 },
    { month: 'Apr', events: 1 },
    { month: 'May', events: 1 },
  ];

   const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // const handleContentClick = () => {
  //   if (isSidebarExpanded) {
  //     setIsSidebarExpanded(false); // Collapse the sidebar when clicking on content
  //   }
  // };


  return (
    <div className='mainDash'>    
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} className="sidebarDash"/>
    <Box className="dashboard-home">
      <Typography variant="h4" className="dashboard-title">
        Dashboard Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} className="dashboard-summary">
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="summary-card">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: '#1976d2' }}>
                <PeopleAltIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Faculty Members
                </Typography>
                <Typography variant="h5">{faculty.length}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper className="summary-card">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: '#2e7d32' }}>
                <WorkOutlineIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Active Projects
                </Typography>
                <Typography variant="h5">{projectCount}</Typography>
              </Box>
            </Stack>
            <Box mt={2}>
              <Typography variant="body2" gutterBottom>
                Completion: {projectProgress}%
              </Typography>
              <LinearProgress variant="determinate" value={projectProgress} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper className="summary-card">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: '#ed6c02' }}>
                <EventAvailableIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle2" color="textSecondary">
                  Upcoming Events
                </Typography>
                <Typography variant="h5">{upcomingEvents}</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} className="chart-section">
        <Grid item xs={12} md={6}>
          <Paper className="chart-card">
            <Typography variant="h6" gutterBottom>
              Project Submissions Over Months
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="projects" fill="#2e7d32" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="chart-card">
            <Typography variant="h6" gutterBottom>
              Events Trend
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={eventData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="events" stroke="#ed6c02" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Paper className="dashboard-section">
        <Typography variant="h6">Recent Activity</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">🎓 New faculty joined: Dr. Kavya (AI Dept)</Typography>
        <Typography variant="body2">📁 Project “Smart Bin” marked as completed</Typography>
      </Paper>

      {/* Quick Actions */}
      <Paper className="dashboard-section">
        <Typography variant="h6">Quick Actions</Typography>
        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">Add Faculty</Button>
          <Button variant="outlined" color="success">Create Project</Button>
          <Button variant="outlined" color="warning">Schedule Event</Button>
        </Stack>
      </Paper>
    </Box>
    </div>
  );
};

export default Dashboard;
