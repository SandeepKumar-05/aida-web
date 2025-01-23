import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Members.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow} from 'swiper/modules';

import pic from './assets/event.png';
import Para from './Para';


function Members(props) {
  const data = [
            1,2,3,4,5
        ];
// 
    return (
            <Swiper
            initialSlide={(data.length/2)-1}
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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="card__image-container">
                      <img src={pic} alt="event" className="card__image" />
                    </div>
                    <div className="card__content">
                      <h1 className="card__title">Event</h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            );
      };
      

export default Members;