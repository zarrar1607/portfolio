import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import { useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ImageCloud.scss';


SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function ImageCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('.//images', false, /\.(png|jpe?g|svg)$/));

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1200) {
        setSlidesPerView(5);
      } else if (windowWidth >= 992) {
        setSlidesPerView(4);
      } else if (windowWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
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

  const calculateOpacity = (index) => {
    const distance = Math.abs(index - activeIndex);
    const maxDistance = Math.floor(slidesPerView / 2); // Max distance from the center slide
    const minOpacity = 0.5; // Minimum opacity
    const opacityStep = (1 - minOpacity) / maxDistance;
    return 1 - distance * opacityStep;
  };

  const getImageHeight = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      return 500;
    } else if (windowWidth >= 992) {
      return 400;
    } else if (windowWidth >= 768) {
      return 300;
    } else {
      return 200;
    }
  };


  return (
    <Swiper
      effect="coverflow"
      slidesPerView={slidesPerView}
      centeredSlides
      grabCursor
      //loop
      autoplay={{
        delay:  1500, // Time between slides (in ms)
        disableOnInteraction: false, // Keep autoplay after user interactions
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="swiper-container"
      coverflowEffect={{
        slideShadows: false,
        rotate: -10,
        depth: 100,
        stretch: -10,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className={`slide-content ${activeIndex === index ? 'active' : 'inactive'}`}
            onClick={() => handleSlideClick(index)}
            style={{ 
              opacity: calculateOpacity(index) ,
              transition: 'transform 0.6s, opacity 0.5s', // Add CSS transition property for smoother effect
            }}
          >
            <img src={image} alt={`Image ${index + 1}`} style={{ maxHeight: getImageHeight() }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}