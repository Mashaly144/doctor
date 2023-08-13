import React from 'react';
import './dashUsers.css';
import avater1 from '../../../Assets/Img/avt1.png';
import avater2 from '../../../Assets/Img/avt2.png';
import avater3 from '../../../Assets/Img/avt3.png';
import avater4 from '../../../Assets/Img/avt4.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.css';
// import required modules
import { Pagination } from 'swiper';

const slides = [
  {
    image: avater1,
    alt: 'Image 1',
    name: 'Edward Newgate',
  },
  {
    image: avater2,
    alt: 'Image 2',
    name: 'Edward Newgate',
  },
  {
    image: avater3,
    alt: 'Image 3',
    name: 'Edward Newgate',
  },
  {
    image: avater4,
    alt: 'Image 4',
    name: 'Edward Newgate',
  },
  {
    image: avater1,
    alt: 'Image 1',
    name: 'Edward Newgate',
  },
  {
    image: avater2,
    alt: 'Image 2',
    name: 'Edward Newgate',
  },
  {
    image: avater3,
    alt: 'Image 3',
    name: 'Edward Newgate',
  },
  {
    image: avater4,
    alt: 'Image 4',
    name: 'Edward Newgate',
  },
];

const DashUsers = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {slides.map((slide, index) => {
        const { alt, image, name } = slide;
        return (
          <SwiperSlide key={index} className='swiper-slide'>
            {/* avatar details */}
            <div className='swiper-card'>
              {/* image */}
              <div>
                <img src={image} alt={alt} />
              </div>
              {/* description */}
              <div>
                <div className='font-medium text-base'>{name}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DashUsers;
