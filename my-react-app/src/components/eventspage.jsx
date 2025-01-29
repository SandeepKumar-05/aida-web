import React, {useState} from "react";
import "./eventspage.css";
import pic from "./assets/event.png"
// import pic2 from "./assets/test.jpg"
import Header from "./Header";
import Popup from 'reactjs-popup';


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
    image: pic,
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
    image: pic,
  },
];

function EventsPage(){

  return (
    <div className="events-page">
      <Header />
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card .background-glow">
            <Popup trigger={
              <button>
                <img src={event.image} alt={event.title} className="event-image" />
              </button>
            } 
            position="right center">
            <div className="event">
              <p className="META-HUB-boot-camp-a">
              <span className="text-wrapper">
              META HUB Boot Camp, a dynamic event hosted jointly by the Department
              of Artificial Intelligence and Data Science and the Department of
              Computer Science and Engineering at Jyothi Engineering College on
              August 21, 2024. This hands-on boot camp will explore the latest
              advancements in immersive technologies and virtual reality, providing
              participants with practical experience and valuable industry insights.
              Don’t miss this opportunity to enhance your skills and earn
              certifications!
              </span>
    
              <span className="span">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check
              it out!
              </span>
              </p>
            </div>
    
          <img
            className="whatsapp-image"
            alt="Whatsapp image"
            src={pic}
          />
        </Popup>

          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
