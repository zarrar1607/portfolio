import React, { useState, useEffect, useRef } from 'react';
import TimelineItem from './TimeLineItem';
import './Experience.scss';
import timelineElements from "./timelineElements"

import "react-vertical-timeline-component/style.min.css"

const getColorClass = (id) => {
  const purpleShades = [
    '#3A006E', // Darkest shade
    '#665299',
    '#6E5FA3',
    '#776FB7',
    '#7E7FCC', 
    '#858FE0', // Lightest shade
  ];
  const year =[
    2023,
    2022,
    2021,
    2020,
  ]
  let i = 0;
  for(i = 0; i<year.length; i++){
    if(year[i] == id)
      return purpleShades[i];
  }
};

const Experience = () => {
  const timelineElementsRefs = useRef([]);
  const cubeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cubeRect = cubeRef.current?.getBoundingClientRect();

      timelineElementsRefs.current.forEach((timelineYearRef) => {
        const timelineYearRect = timelineYearRef?.getBoundingClientRect();

        if (
          timelineYearRect &&
          cubeRect &&
          timelineYearRect.left + timelineYearRect.width >= cubeRect.left &&
          timelineYearRect.left <= cubeRect.left + cubeRect.width &&
          timelineYearRect.top + timelineYearRect.height >= cubeRect.top &&
          timelineYearRect.top <= cubeRect.top + cubeRect.height
        ) {
          timelineYearRef.classList.add('glowing');
        } else {
          timelineYearRef.classList.remove('glowing');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={cubeRef} className="cube"></div>

      {timelineElements.map((element, index) => (
        <div
          className="timeline"
          style={{
            borderColor: getColorClass(element.year)
          }}
          key={element.id}
        >
          <div ref={(ref) => (timelineElementsRefs.current[index] = ref)} className="timeline-year">
            {element.year}
          </div>
          <div key={element.id} className=''>
            <TimelineItem
              title={element.title}
              company = {element.company}
              location={element.location}
              description={element.description}
              date={element.date}
              year={element.year}
              color={ getColorClass(element.year)}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default Experience;
