import React, { useState } from "react";
import "./eventspage.css";
import pic from "./assets/event.png"
import Header from "./Header";
import Popup from 'reactjs-popup';
import eventData from './description'
import Footer from "./Footer";
const events = eventData;

function EventsPage() {

  const handleOpen = () => {
    document.getElementById('events-page').style.filter = 'blur(8px)';

  };

  const handleClose = () => {
    document.getElementById('events-page').style.filter = 'blur(0px)';

  };
  return (
    <div className="events-page" id='events-page'>
      <Header />
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" >
            <Popup
              trigger={
                <img src={event.img} className="imageButton"></img>
              }
              modal
              closeOnDocumentClick
              overlayStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

              onOpen={handleOpen}
              onClose={handleClose}
              className="reactjs-popup-overlay"
            >
              <div className="popup-container">
                <img
                  src={event.img}
                  alt="Event Image"
                  className="popup-image"
                />
                <div className="popup-content">
                  <h2>
                    About the Event
                  </h2>
                  <p>
                    {event.content}

                  </p>

                </div>
              </div>
            </Popup>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EventsPage;
