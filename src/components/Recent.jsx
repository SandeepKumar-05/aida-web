import "./Recent.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Para from './Para';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import pic from './assets/event.png';
import { TypeAnimation } from "react-type-animation";
import { data } from "react-router-dom";

const content = [
  {
    img: pic,
    content: "We are proud to announce that Al Amthan R. M., a student from S6 AD, has qualified from the South-West Zone Inter-University Karate Competition. He will now represent APJAKTU in the All India Inter-University Karate Competition 2024-25 at Maharshi Dayanand University, Rohtak. This remarkable achievement highlights his dedication and skill. We wish him the best of luck in the upcoming competition!"
  },

  {
        img:"https://ik.imagekit.io/AIDA/Past%20Events/poster/placement.jpg?updatedAt=1738311185783",
        content:"The AD department of Jyothi Engineering College is proud to announce the successful placements of eight students in esteemed companies, including Movate, ESAF, and Cognizant. Notably, Movate has recruited five students, showcasing the caliber of our academic programs and the dedication of our students. We extend our heartfelt congratulations to all the placed students and wish them a bright and successful career ahead.",
  },
  // {
  //       img:"https://ik.imagekit.io/AIDA/Past%20Events/poster/s7%20topper.jpg?updatedAt=1738311147371",
  //       content:"The Department of Artificial Intelligence and Data Science is thrilled to announce the top performers of the Semester 7 examinations. Congratulations to Aparnna Joseph, who achieved an impressive SGPA of 9.6, Bhagyalakshmi S, with an SGPA of 9.3, and Gopika PS, who earned an SGPA of 9.2. Their outstanding academic achievements are a testament to their hard work and dedication. We extend our best wishes for their continued success and bright futures ahead!",
  // },
  {
        img:"https://ik.imagekit.io/AIDA/Past%20Events/aida%20inaguration/inaguration.jpg?updatedAt=1738311057185",
        content:"The Artificial Intelligence and Data Science Association (AIDA) at Jyothi Engineering College is excited to invite students and faculty to its inauguration event. Scheduled for January 31st at 2:00 PM in Decennial Hall, this event marks the launch of a new initiative aimed at fostering innovation, collaboration, and learning in the fields of AI and data science. Attendees will have the opportunity to learn about the association's mission, upcoming activities, and how they can get involved. Join us to celebrate this milestone and be a part of our journey towards excellence in AI and data science.",
  }
    
    
]

function Recent() {
    return (
      <>
      <div className="recentHeading">
        <p>What's New ?</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperR"
      >
        {/* <SwiperSlide>
          <div className="slideR">
          <img className="eventImg" src={pic} alt="pic"></img>
          <div className="eventContent">
            <Para  indexImg={1} fontsize="22px" content="Al Amthan R. M. (S6 AD), qualified from the South-West Zone Inter-Uni-  versity Karate Competition to represent APJAKTU in the All India  Inter-University Karate Competition 2024-25 at Maharshi Dayanand Uni-  versity, Rohtak."/>
          </div>
          </div>
        </SwiperSlide> */}

        {content.map((item) => (
          <SwiperSlide>
            <div className="slideR">
            <img className="eventImg" src={item.img} alt="pic"></img>
            <div className="eventContent">
              <Para  indexImg={1} fontsize="22px" content={item.content}/>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </>
    );
}

export default Recent;