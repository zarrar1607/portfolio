import React, { useRef, useEffect, useState } from 'react';
import './TimelineItem.scss';
import timelineElements from "./timelineElements";
import { useScroll, animated, useSpring } from '@react-spring/web';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const TimelineItem = ({ id, title, company, location, description, date, year, color }) => {
  const [textStyles, textApi] = useSpring(() => ({
    x: '100%'
  }));

  const [scrollProgress, setScrollProgress] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [idx, setId] = useState(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollProgress(scrollYProgress);

      const itemCount = timelineElements.length;
      const itemFraction = 1 / itemCount;
      const start = (itemCount - id) * itemFraction; // Adjust the start position for each item
      const end = start + itemFraction; // Adjust the end position for each item

      setStart(start);
      setEnd(end);
      setId(id);


      if (
        scrollYProgress >= start - 0.05
        &&
        scrollYProgress <= end + 0.05
      ) {
        textApi.start({ x: '0%' });
      } else {
        textApi.start({ x: '100%' });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div className="timeline-item">
      <div style={{ overflow: 'hidden' }}>
        <animated.div style={textStyles}>
          <div className="content">
            <h1 className='display-1' style={{ color: color }}>{title}</h1>
          </div>
        <div className="content">
          <h2 className='display-4'>{company}</h2>
        </div>
        <div className="content">
          <h5>{location}, {date}</h5>
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
        <div className="scroll-progress">
          ScrollYProgress: {scrollProgress.toFixed(2)},
          start: {start.toFixed(2)},
          end: {end.toFixed(2)},
          idx: {idx.toFixed(2)}
        </div>
        </animated.div>
      </div>
    </div>
  );
};

export default TimelineItem;
