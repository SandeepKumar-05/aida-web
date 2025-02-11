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
        img:"https://ik.imagekit.io/AIDA/Past%20Events/Recent%20Events/EventDataAnalytics.jpg?updatedAt=1739291882424",
        content:"The Department of Artificial Intelligence and Data Science at Jyothi Engineering College is hosting a hands-on workshop on Data Analytics Using Tableau on February 12–13, 2025, at the Computer Center. This session offers practical insights into data visualization and analytics, helping participants enhance their skills in data-driven decision-making."
  },
  {
        img:"https://ik.imagekit.io/AIDA/Past%20Events/Recent%20Events/KickBoxingCropped.jpg?updatedAt=1739204539965",
        content:"Yasin Muhammed P. M. from the Artificial Intelligence and Data Science department of Jyothi Engineering College won gold in the Senior Kick Light (Under 76 kg) category at the UIC National Kickboxing Championship 2025, held at V. K. Krishna Menon Indoor Stadium, Kozhikode. Competing against top athletes nationwide, he showcased remarkable skill and determination, adding to the college’s sporting achievements.",
  },
  {
    img:"https://ik.imagekit.io/AIDA/Past%20Events/aida%20inaguration/inaguration.jpg?updatedAt=1738311057185",
    content:"The Artificial Intelligence and Data Science Association (AIDA) at Jyothi Engineering College is excited to invite students and faculty to its inauguration event. Scheduled for January 31st at 2:00 PM in Decennial Hall, this event marks the launch of a new initiative aimed at fostering innovation, collaboration, and learning in the fields of AI and data science. Attendees will have the opportunity to learn about the association's mission, upcoming activities, and how they can get involved. Join us to celebrate this milestone and be a part of our journey towards excellence in AI and data science.",
  },
  {
    img:"https://ik.imagekit.io/AIDA/Past%20Events/poster/placement.jpg?updatedAt=1738311185783",
    content:"The AD department of Jyothi Engineering College is proud to announce the successful placements of eight students in esteemed companies, including Movate, ESAF, and Cognizant. Notably, Movate has recruited five students, showcasing the caliber of our academic programs and the dedication of our students. We extend our heartfelt congratulations to all the placed students and wish them a bright and successful career ahead.",
  },
  {
    img: pic,
    content: "We are proud to announce that Al Amthan R. M., a student from S6 AD, has qualified from the South-West Zone Inter-University Karate Competition. He will now represent APJAKTU in the All India Inter-University Karate Competition 2024-25 at Maharshi Dayanand University, Rohtak. This remarkable achievement highlights his dedication and skill. We wish him the best of luck in the upcoming competition!"
  },
    
    
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