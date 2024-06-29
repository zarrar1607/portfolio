import React, { useState, useEffect, useRef } from 'react';
// import { MouseParallax, ScrollParallax, ScrollParallaxHandle } from "react-just-parallax";
// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'

// import TimelineItem from './TimeLineItem';
import timelineElements from "./timelineElements"
// import './Education.scss'
// import './CardScroller.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { hexToRgb } from '@mui/material';
import { height } from '@mui/system';

// const getColorClass = (id) => {
//   const purpleShades = [
//     '#3A006E', // Darkest shade
//     '#665299',
//     '#6E5FA3',
//     '#776FB7',
//     '#7E7FCC', 
//     '#858FE0', // Lightest shade
//   ];
//   const year =[
//     2024,
//     2021,
//     2017,
//     2015,
//   ]
//   let i = 0;
//   for(i = 0; i<year.length; i++){
//     if(year[i] == id)
//       return purpleShades[i];
//   }
// };


// const Education = () => {
//     const timelineElementsRefs = useRef([]);
//   const cubeRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const cubeRect = cubeRef.current?.getBoundingClientRect();

//       timelineElementsRefs.current.forEach((timelineYearRef) => {
//         const timelineYearRect = timelineYearRef?.getBoundingClientRect();

//         if (
//           timelineYearRect &&
//           cubeRect &&
//           timelineYearRect.left + timelineYearRect.width >= cubeRect.left &&
//           timelineYearRect.left <= cubeRect.left + cubeRect.width &&
//           timelineYearRect.top + timelineYearRect.height >= cubeRect.top &&
//           timelineYearRect.top <= cubeRect.top + cubeRect.height
//         ) {
//           timelineYearRef.classList.add('glowing');
//         } else {
//           timelineYearRef.classList.remove('glowing');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className='education'>
//       <div ref={cubeRef} className="cube"></div>

//       {timelineElements.map((element, index) => (
//         <div
//           className="timeline"
//           style={{
//             borderColor: getColorClass(element.year)
//           }}
//           key={element.id}
//         >
//           <div ref={(ref) => (timelineElementsRefs.current[index] = ref)} className="timeline-year">{element.year}</div>
//           <div key={element.id} className=''>
//             <TimelineItem
//               title={element.title}
//               company = {element.company}
//               location={element.location}
//               description={element.description}
//               date={element.date}
//               year={element.year}
//               color={ getColorClass(element.year)}
//               gradeType={element.GradeType}
//               grade={element.Grade}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Education = () => {
//   const timelineElementsRefs = useRef([]);
// const cubeRef = useRef(null);

// useEffect(() => {
//   const handleScroll = () => {
//     const cubeRect = cubeRef.current?.getBoundingClientRect();

//     timelineElementsRefs.current.forEach((timelineYearRef) => {
//       const timelineYearRect = timelineYearRef?.getBoundingClientRect();

//       if (
//         timelineYearRect &&
//         cubeRect &&
//         timelineYearRect.left + timelineYearRect.width >= cubeRect.left &&
//         timelineYearRect.left <= cubeRect.left + cubeRect.width &&
//         timelineYearRect.top + timelineYearRect.height >= cubeRect.top &&
//         timelineYearRect.top <= cubeRect.top + cubeRect.height
//       ) {
//         timelineYearRef.classList.add('glowing');
//       } else {
//         timelineYearRef.classList.remove('glowing');
//       }
//     });
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

// const Education = () => {
//   const [currentCard, setCurrentCard] = useState(1);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = containerRef.current.scrollTop;
//       const containerHeight = containerRef.current.clientHeight;

//       if (scrollTop < containerHeight / 2) {
//         setCurrentCard(1);
//       } else if (scrollTop < containerHeight * 1.5) {
//         setCurrentCard(2);
//       } else {
//         setCurrentCard(3);
//       }
//     };

//     const container = containerRef.current;
//     container.addEventListener('scroll', handleScroll);

//     return () => {
//       container.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="parallax-container" ref={containerRef}>
//       <div className={`card ${currentCard === 1 ? 'active' : ''}`}>
//         <div className="card-header">Header 1</div>
//         <div className="card-content">
//           Content for Card 1
//         </div>
//       </div>
//       <div className={`card ${currentCard === 2 ? 'active' : ''}`}>
//         <div className="card-header">Header 2</div>
//         <div className="card-content">
//           Content for Card 2
//         </div>
//       </div>
//       <div className={`card ${currentCard === 3 ? 'active' : ''}`}>
//         <div className="card-header">Header 3</div>
//         <div className="card-content">
//           Content for Card 3
//         </div>
//       </div>
//     </div>
//   );
// };



// const ScrollContainer = ({ children }) => {
//   const [scrollElement, setScrollElement] = useState(null);
//   const containerRef = useRef();

//   useEffect(() => {
//     setScrollElement(containerRef.current);
//   }, []);

//   return (
//     <div className="scroll-container" ref={containerRef}>
//       {scrollElement && (
//         <ParallaxProvider
//           scrollContainer={scrollElement}
//           // scrollAxis={props.scrollAxis}
//         >
//           {children}
//         </ParallaxProvider>
//       )}
//     </div>
//   );
// };

const Education = () => {

  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      {/* <Parallax translateX={50}>
          <div className="card">
            <div className="card-header display-1">
              {timelineElements[1].title}
              <button
                className={`collapse${timelineElements[1].id}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${timelineElements[1].id}`}
                aria-expanded="false"
                aria-controls={`collapse${timelineElements[1].id}`}
                style={{ marginLeft: '10px' }}
              >
                Toggle
              </button>
            </div>
            <div id={`collapse${timelineElements[1].id}`} className="collapse card-content">
              <div className="display-7">
                <strong>{timelineElements[1].company}</strong>
              </div>
              <div className="display-7">{timelineElements[1].GradeType}: {timelineElements[1].Grade}</div>
              <p>{timelineElements[1].location}</p>
              <p>{timelineElements[1].date}</p>
              <div>{timelineElements[1].description}</div>
            </div>
          </div>
        </Parallax> */}
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};


export default Education;