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
import './ProjectImageCarousel.scss';
import ProjectImageItems from './ProjectImageItems';


SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function ProjectImageCarousel(project_name) {
  //project_name = "f1tenth";
  const filteredItems = ProjectImageItems.reduce((filtered, item) => {
    console.log('item.projectname:', item.projectname);
    console.log('project_name:', project_name.project_name);
    if (item.projectname === project_name.project_name) {
      console.log('Matched');
      filtered.push(item);
    }
    return filtered;
  }, []);
  console.log('filtered items:', filteredItems);

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

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
      return 300;
    } else if (windowWidth >= 992) {
      return 250;
    } else if (windowWidth >= 768) {
      return 200;
    } else {
      return 200;
    }
  };

  const getTopPadding = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      return 60;
    } else if (windowWidth >= 992) {
      return 60;
    } else if (windowWidth >= 768) {
      return 60;
    } else {
      return 60;
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

      {filteredItems.map((item, index) => (
        <SwiperSlide key={index}
          style={{ paddingTop: getTopPadding() }}
        >
          <div
            className={`slide-content ${activeIndex === index ? 'active' : 'inactive'}`}
            onClick={() => handleSlideClick(index)}
            style={{
              opacity: calculateOpacity(index),
              transition: 'transform 0.6s, opacity 0.5s', // Add CSS transition property for smoother effect
            }}

          >
            {/* Check if the item has a video URL, and if so, embed the video */}
            {item.videoUrl ? (
              <iframe
                width="100%" // Set the width as needed
                height="100%" // Set the height as needed
                src={item.videoUrl}
                allowFullScreen
                title={`Video ${index}`}
              />
            ) : (
              <img src={process.env.PUBLIC_URL + `/Project/${item.filename}`} alt={`${item.title}`} style={{ maxHeight: getImageHeight() }} />
            )}
          </div>
          <div className={`slide-caption ${activeIndex === index ? 'active' : 'inactive'}`}>{`${item.title}`}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}