//import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import img11 from './11.jpg'
import img12 from './12.jpg'
import img13 from './13.jpg'
import img14 from './14.jpg'
import img15 from './15.jpg'
import img16 from './16.jpg'
import 'swiper/css';
import './AboutSlider.css';


let images = [
    {img:img1},
    {img:img2},
    {img:img3},
    {img:img4},
    {img:img5},
    {img:img6},
    {img:img7},
    {img:img8},
    {img:img9},
    {img:img10},
    {img:img11},
    {img:img12},
    {img:img13},
    {img:img14},
    {img:img15},
    {img:img16},
]


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function AboutSlider() {
  return (
    <div className='AboutSlider'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{clickable: true,}}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      {images.map((item) => 
        <SwiperSlide><img src={item.img}></img></SwiperSlide>
    )}  
        
      </Swiper>
    </div>
  );
}