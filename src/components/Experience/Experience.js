import React, { useRef, useEffect } from 'react';
import TimelineItem from './TimeLineItem';
import './Experience.scss';
import timelineElements from "./timelineElements";

const getColorClass = (year) => {
  const purpleShades = [
    '#3A006E', // Darkest shade
    '#665299',
    '#6E5FA3',
    '#776FB7',
    '#7E7FCC',
    '#858FE0', // Lightest shade
  ];
  const years = [2025, 2024, 2023, 2022, 2021, 2020];

  for (let i = 0; i < years.length; i++) {
    if (years[i] === year) {
      return purpleShades[i];
    }
  }
  return '#858FE0'; // Default color
};

const Experience = () => {
  const timelineElementsRefs = useRef([]);
  const cubeRef = useRef(null);

  useEffect(() => {
    // If you need the "glowing" effect for the timeline-year
    const handleScroll = () => {
      const cubeRect = cubeRef.current?.getBoundingClientRect();
      timelineElementsRefs.current.forEach((yearRef) => {
        const rect = yearRef?.getBoundingClientRect();
        if (
          rect && cubeRect &&
          rect.left + rect.width >= cubeRect.left &&
          rect.left <= cubeRect.left + cubeRect.width &&
          rect.top + rect.height >= cubeRect.top &&
          rect.top <= cubeRect.top + cubeRect.height
        ) {
          yearRef.classList.add('glowing');
        } else {
          yearRef.classList.remove('glowing');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={cubeRef} className="cube"></div>
      {timelineElements.map((element, index) => (
        <div
          className="timeline"
          style={{
            borderColor: getColorClass(element.year),
            ...(index === timelineElements.length - 1 && { paddingTop: "20px" })
          }}
          key={element.id}
        >
          <div
            ref={(ref) => (timelineElementsRefs.current[index] = ref)}
            className="timeline-year"
          >
            {element.year}
          </div>
          <TimelineItem
            title={element.title}
            company={element.company}
            location={element.location}
            description={element.description}
            date={element.date}
            color={getColorClass(element.year)}
          />
        </div>
      ))}
    </>
  );
};

export default Experience;
