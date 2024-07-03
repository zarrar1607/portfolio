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


import { Row, Image } from 'react-bootstrap';

import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { render } from "react-dom";
import "./styles.scss";

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export default function ProjectImageCarousel(project_name) {
  const filteredItems = ProjectImageItems.reduce((filtered, item) => {
    if (item.projectname === project_name.project_name) {
      filtered.push(item);
    }
    return filtered;
  }, []);

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`
    });
  });

  return (
    <>
      {filteredItems.length > 0 ? (
        <div className="horizontal_scroll_container" {...bind()}>
          {filteredItems.map((item, index) => (
            <animated.div
              key={index}
              className="project_card"
              style={{
                ...style,
                height: '300px', // Set a specific height for the card
              }}
            >
              {item.videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.videoUrl}
                  allowFullScreen
                  title={`Video ${index}`}
                  style={{ border: 'none' }}
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/Project/${item.filename}`}
                  alt={item.title}
                  style={{ maxHeight: '100%', width: '100%', objectFit: 'cover' }} // Ensures the image fits within the card
                />
              )}
            </animated.div>
          ))}
        </div>
      ) : null}
    </>
  );
}