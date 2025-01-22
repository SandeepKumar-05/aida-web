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
            1,2,3,4
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
              <SwiperSlide>
                <div className='slideM'>
                  <img className='eventImgM' src={pic} alt='pic'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slideM'>
                  <img className='eventImgM' src={pic} alt='pic'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slideM'>
                  <img className='eventImgM' src={pic} alt='pic'></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slideM'>
                  <img className='eventImgM' src={pic} alt='pic'></img>
                </div>
              </SwiperSlide>
            </Swiper>
            );
      };
      

export default Members;