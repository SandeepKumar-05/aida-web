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
    handleFilter('2024');
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
     
     <select className='btn' value={year} onChange={(e) => handleFilter(e.target.value)}>
        {uniqueYears.map(yr => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </select>
    <Swiper
            initialSlide={(filteredData.length/6-1)}
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
                <SwiperSlide>
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