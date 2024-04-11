import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper1.css';

import pic1  from "../assets/pic1.png";
import pic2  from "../assets/pic2.png";
import pic3  from "../assets/pic3.png";
import pic4  from "../assets/pic4.png";
import pic5  from "../assets/pic5.png";

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



const slides = [pic1,pic2,pic3,pic4,pic5];

export default function Swiper1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        loop 
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}