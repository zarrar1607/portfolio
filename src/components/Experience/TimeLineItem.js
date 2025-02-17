// TimeLineItem.js
import React, { useState, useRef, useEffect } from 'react';
import './TimelineItem.scss';
import { useSpring, animated } from '@react-spring/web';

const TimelineItem = ({ title, company, location, description, date, color }) => {
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef(null);

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isInView state if the item is in the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Adjust how much of the element needs to be visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  // React Spring animation
  const textStyles = useSpring({
    // Slide in from the right if in view, otherwise stay off-screen
    transform: isInView ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isInView ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    <div className="timeline-item" ref={itemRef}>
      <animated.div style={textStyles}>
        <div className="content">
          <h1 className="display-1" style={{ color: color }}>{title}</h1>
        </div>
        <div className="content">
          <h2 className="display-4">{company}</h2>
        </div>
        <div className="content">
          <h5>{location}, {date}</h5>
        </div>
        <div className="content">
          {description}
        </div>
      </animated.div>
    </div>
  );
};

export default TimelineItem;
