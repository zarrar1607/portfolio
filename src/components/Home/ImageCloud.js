import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import { useRef, useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ImageCloud.scss';
import img from '../../assests/images/DeepLearning.AI TensorFlow Developer.jpg'


SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function ImageCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('.//images', false, /\.(png|jpe?g|svg)$/));
  const slides = [
    img,
    img,
    img,
    img,
    img,
    img,
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
    '../../images/DeepLearning.AI TensorFlow Developer.jpg',
  ];


  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 576) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Swiper
      effect="coverflow"
      slidesPerView={slidesPerView}
      centeredSlides
      grabCursor
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="swiper-container border"
      coverflowEffect={{
        slideShadows: false,
        rotate: -10,
        depth: 100,
        stretch: -10,
        slideShadows:false,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className={`slide-content ${
              activeIndex === index ? 'active' : 'inactive'
            } border ` }
            onClick={() => handleSlideClick(index)}
          >
            <img src={image} height={400} alt={`Image ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
