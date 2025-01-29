import React, { useState } from "react";
import "eventspage2.css";

const events = [
  {
    id: 1,
    title: "Technical Talk on RPA (UI Path)",
    speaker: "Mr. Rahul Unnikrishnan",
    venue: "Decennial Hall",
    image: "/images/technical_talk.png",
  },
  {
    id: 2,
    title: "Exploring the Digital Frontier",
    date: "21 Aug",
    image: "/images/digital_frontier.png",
  },
  {
    id: 3,
    title: "Introduction to Data Analytics",
    speaker: "Sidharth S Unnithan",
    venue: "Computer Centre",
    image: "/images/data_analytics.png",
  },
  {
    id: 4,
    title: "AI/Metaverse Workshop",
    date: "Oct 28",
    speakers: ["Anisha S", "Rama R"],
    price: "150/-",
    image: "/images/metaverse_workshop.png",
  },
];

const EventsPage = () => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setGlowPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="events-page" onMouseMove={handleMouseMove}>
      <div
        className="background-glow"
        style={{
          left: glowPosition.x,
          top: glowPosition.y,
        }}
      ></div>

      <nav className="navbar">
        <h1 className="logo">AIDA</h1>
        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>

      <h2 className="page-title">Events</h2>

      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              {event.date && <p><strong>Date:</strong> {event.date}</p>}
              {event.speaker && <p><strong>Speaker:</strong> {event.speaker}</p>}
              {event.venue && <p><strong>Venue:</strong> {event.venue}</p>}
              {event.speakers && <p><strong>Speakers:</strong> {event.speakers.join(", ")}</p>}
              {event.price && <p><strong>Price:</strong> {event.price}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
