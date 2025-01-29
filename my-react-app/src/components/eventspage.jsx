import React from "react";
import "./eventspage.css";
import pic from "./assets/event.png"

const events = [
  {
    id: 1,
    title: "Technical Talk on RPA (UI Path)",
    speaker: "Mr. Rahul Unnikrishnan",
    venue: "Decennial Hall",
    image: pic,
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
  {
    id: 5,
    title: "AI/Metaverse Workshop",
    date: "Oct 28",
    speakers: ["Anisha S", "Rama R"],
    price: "150/-",
    image: "/images/metaverse_workshop.png",
  },
  {
    id: 6,
    title: "AI/Metaverse Workshop",
    date: "Oct 28",
    speakers: ["Anisha S", "Rama R"],
    price: "150/-",
    image: "/images/metaverse_workshop.png",
  },
];

function EventsPage(){
  return (
    <div className="events-page">

      <h1 className="title">Events</h1>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              {event.date && <p><strong>Date:</strong> {event.date}</p>}
              {event.speaker && <p><strong>Speaker:</strong> {event.speaker}</p>}
              {event.speakers && (
                <p><strong>Speakers:</strong> {event.speakers.join(", ")}</p>
              )}
              {event.venue && <p><strong>Venue:</strong> {event.venue}</p>}
              {event.price && <p><strong>Price:</strong> {event.price}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
