import './App.css';
import Home from "./Home";
import EventsPage from "./components/eventspage";
import Certificate from "./components/Certificate";
import Faculty from "./components/Faculty";
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
