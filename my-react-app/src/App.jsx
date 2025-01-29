import Header from "./components/Header"
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Para from "./components/Para";
import './App.css';
import Home from "./Home";
import Recent from "./components/Recent";
import ChatQuestion from "./components/ChatQuestion";
import ChatAnswer from "./components/ChatAnswer";
import Members from "./components/Members";
import EventsPage from "./components/eventspage";
import Certificate from "./components/Certificate";
import Faculty from "./components/Faculty";
import Event from "./components/popup";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
    return (
      <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/verify" element={<Certificate />} />
        </Routes>
      </Router>
      </div>
    );
}

export default App
