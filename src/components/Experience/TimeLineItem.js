import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './TimelineItem.scss';

const TimelineItem = ({ title, company, location, description, date, color }) => {
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef(null);

  // Observe element visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isInView = true if element is visible, false otherwise
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust how much of the item must be visible
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

  // Slide in from the right when isInView = true; slide out when false
  const slideStyles = useSpring({
    transform: isInView ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isInView ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    <div className="timeline-item" ref={itemRef}>
      <animated.div style={slideStyles}>
        <div className="content">
          <h1 className="display-1" style={{ color }}>{title}</h1>
        </div>
        <div className="content">
          <h2 className="display-4">{company}</h2>
        </div>
        <div className="content">
          <h5>
            {location}, {date}
          </h5>
        </div>
        <div className="content">{description}</div>
      </animated.div>
    </div>
  );
};

export default TimelineItem;
