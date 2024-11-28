import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='w-full flex items-center flex-col justify-center px-[2.5vw]'>
      <h2 className='text-[3vw] font-semibold mb-[1vw] text-center'>Our Clientele</h2>
      <div className='w-full h-[30vh]'>
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
              <img className='w-[50%] h-[60%] object-contain' src="https://www.allastir.com/images/9wanbury.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
              <img className='w-[50%] h-[60%] object-contain' src="https://www.allastir.com/images/11aris.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
              <img className='w-[50%] h-[60%] object-contain' src="https://www.allastir.com/images/12akums.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
              <img className='w-[50%] h-[60%] object-contain' src="https://www.allastir.com/images/13Cipla1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full h-full flex items-center justify-center'>
              <img className='w-[50%] h-[60%] object-contain' src="https://www.allastir.com/images/18Unison1.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
