import React from "react";
import "./popup.css";
import whatsappImage20250128At22334Pm1 from "./assets/chatbot.png";

const Event = () => {
  return (
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

      <img
        className="whatsapp-image"
        alt="Whatsapp image"
        src={whatsappImage20250128At22334Pm1}
      />
    </div>
  );
};

export default Event;
