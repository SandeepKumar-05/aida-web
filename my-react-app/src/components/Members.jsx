import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import React, { useState, useEffect } from "react";
import dataset from './content';
import './Members.css';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow} from 'swiper/modules';

const Filter = () => {
  const [year, setYear] = useState(2023);
  const [filteredData, setFilteredData] = useState(dataset);
  useEffect(() => {
    handleFilter('2023');
}, [dataset]);


  // Extract unique years for the dropdown
  const uniqueYears = [...new Set(dataset.map(item => item.year))].sort((a, b) => a - b);

  const handleFilter = (selectedYear) => {
    setYear(selectedYear);
    const filtered = selectedYear ? dataset.filter(item => item.year.toString() === selectedYear) : dataset;
    setFilteredData(filtered);
  };

  return (
    <div className="mainDiv">
     
     <select value={year} onChange={(e) => handleFilter(e.target.value)}>
        <option key={2023}value={2023}>Select year</option>
        {uniqueYears.map(yr => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </select>
{/* 
      <div className="slider">
      <div className="container">
        <Marquee speed={50} pauseOnHover={true} direction="left">
          <div className="cards">
            {filteredData.map(item => (
              <div key={item.id} className="card">
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div> */}

    <Swiper
            initialSlide={(filteredData.length/4)-1}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'3'}
              coverflowEffect={{
                rotate: 30,
                stretch: 4,
                depth: 300,
                modifier: 0.8,
                slideShadows: true,

              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              // pagination={true}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              className="mySwiperM"
            >
              {filteredData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="card__image-container">
                      <img src={item.link} alt="event" className="card__image" />
                    </div>
                    <div className="card__content">
                      <h1 className="card__title">{item.name}</h1>
                      <p className="card__text">{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
    
    </div>
  );
};

export default Filter;