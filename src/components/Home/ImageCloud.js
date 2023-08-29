import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ImageCloud.scss';
import ImageItems from './ImageItems'; // Import your ImageItems array

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function ImageCarousel() {
  // State for the number of slides displayed
  const [slidesPerView, setSlidesPerView] = useState(3);
  // State to track the currently active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle window resize to adjust the number of slides displayed
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

    // Initial call and event listener for resizing
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle click on a slide to set it as active
  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate opacity based on the distance from the active slide
  const calculateOpacity = (index) => {
    const distance = Math.abs(index - activeIndex);
    const maxDistance = Math.floor(slidesPerView / 2);
    const minOpacity = 0.5;
    const opacityStep = (1 - minOpacity) / maxDistance;
    return 1 - distance * opacityStep;
  };

  // Determine the maximum image height based on window width
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
      autoplay={{
        delay: 1500, // Time between slides (in ms)
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
      {/* Map through ImageItems array to create slides */}
      {ImageItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={`slide-content ${activeIndex === index ? 'active' : 'inactive'}`}
            onClick={() => handleSlideClick(index)}
            style={{
              opacity: calculateOpacity(index),
              transition: 'transform 0.6s, opacity 0.5s',
            }}
          >
            {/* Load images from the 'Certificates' directory */}
            <img src={ process.env.PUBLIC_URL +`/Certificates/${item.filename}`} alt={`${item.title}`} style={{ maxHeight: getImageHeight() }} />
          </div>
          <div className={`slide-caption ${activeIndex === index ? 'active' : 'inactive'}`}>{`${item.title}`}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
