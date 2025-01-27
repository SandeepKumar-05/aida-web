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

function Recent() {
    return (
      <>
      <Para fontsize="30px" content="Let's have a look on what's happening on AIDA" indexImg={10}></Para>
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
        
        <SwiperSlide>
          <div className="slideR">
          <img className="eventImg" src={pic} alt="pic"></img>
          <div className="eventContent">
            <Para  indexImg={1} fontsize="22px" content="Al Amthan R. M. (S6 AD), qualified from the South-West Zone Inter-Uni-  versity Karate Competition to represent APJAKTU in the All India  Inter-University Karate Competition 2024-25 at Maharshi Dayanand Uni-  versity, Rohtak."/>
            <a className="link" href="www.google.com">Know more</a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideR">
          <img className="eventImg" src={pic} alt="pic"></img>
          <Para  indexImg={1} fontsize="22px" content="Al Amthan R. M. (S6 AD), qualified from the South-West Zone Inter-Uni-  versity Karate Competition to represent APJAKTU in the All India  Inter-University Karate Competition 2024-25 at Maharshi Dayanand Uni-  versity, Rohtak.Know more!"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideR">
          <img className="eventImg" src={pic} alt="pic"></img>
          <Para  indexImg={1} fontsize="22px" content="Al Amthan R. M. (S6 AD), qualified from the South-West Zone Inter-Uni-  versity Karate Competition to represent APJAKTU in the All India  Inter-University Karate Competition 2024-25 at Maharshi Dayanand Uni-  versity, Rohtak.Know more!"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideR">
          <img className="eventImg" src={pic} alt="pic"></img>
          <Para  indexImg={1} fontsize="22px" content="Al Amthan R. M. (S6 AD), qualified from the South-West Zone Inter-Uni-  versity Karate Competition to represent APJAKTU in the All India  Inter-University Karate Competition 2024-25 at Maharshi Dayanand Uni-  versity, Rohtak.Know more!"/>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
    );
}

export default Recent;