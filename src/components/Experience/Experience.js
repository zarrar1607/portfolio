import React, { useState, useEffect, useRef } from 'react';
import { Link, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import TimelineItem from './TimeLineItem';
import './Experience.scss';
import { Row, Col } from 'react-bootstrap';
import timelineElements from "./timelineElements"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

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

  const index = id % purpleShades.length;
  return purpleShades[index];
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
            borderColor: getColorClass(element.id)
          }}
          key={element.id}
        >
          <div ref={(ref) => (timelineElementsRefs.current[index] = ref)} className="timeline-year">{element.year}</div>
          <div key={element.id} className='jumbotron'>
            <TimelineItem
              title={element.title}
              company = {element.company}
              location={element.location}
              description={element.description}
              date={element.date}
              year={element.year}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default Experience;
