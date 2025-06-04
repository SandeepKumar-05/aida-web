import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useState, useEffect } from "react";
import { ArrowDown } from 'lucide-react';
import './Members.css';
import arrowdown from './assets/arrowdown.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';


const Filter = () => {
  const [year, setYear] = useState(2023);
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const { data: fetchedData, error } = await supabase
          .from('members')
          .select('*')
          .order('id', { ascending: true });
        
        if (error) {
          console.error(error);
        } else {
          console.log(fetchedData);
          setDataset(fetchedData || []);
          handleFilter('2024', fetchedData || []);
        }
      } catch (err) {
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    if (dataset.length > 0) {
      handleFilter(year, dataset);
    }
  }, [dataset, year]);


  // Extract unique years for the dropdown
  const uniqueYears = [...new Set(dataset.map(item => item.year))].sort((a, b) => a - b);

  const handleFilter = (selectedYear, data = dataset) => {
    setYear(selectedYear);
    const filtered = selectedYear ? data.filter(item => item.year.toString() === selectedYear) : data;
    setFilteredData(filtered);
  };

  return (
    <div className="mainDiv">
      {loading ? (
        <div>Loading members...</div>
      ) : (
        <>
          <select className='btn' value={year} onChange={(e) => handleFilter(e.target.value)}>
        {uniqueYears.map(yr => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
        <img src={arrowdown} className='arrow-icon' />
      </select>
      <Swiper
        initialSlide={Math.max(Math.floor(filteredData.length / 2), 0)}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Default for larger screens
        breakpoints={{
          480: {
            slidesPerView: 1, // Show only one image in front on mobile
          },
          768: {
            slidesPerView: 2, // Show two images on tablets
          },
          1024: {
            slidesPerView: 3, // Show three images on larger screens
          },
        }}
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
        </>
      )}
    </div>
  );
};

export default Filter;