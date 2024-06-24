import React, { useState, useEffect, useRef } from 'react';
import TimelineItem from './TimeLineItem';
import timelineElements from "./timelineElements"
import './Education.scss'
import './CardScroller.scss';

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

const Education = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current.scrollTop;
      const containerHeight = containerRef.current.clientHeight;

      if (scrollTop < containerHeight) {
        setCurrentCard(1);
      } else if (scrollTop < containerHeight * 2) {
        setCurrentCard(2);
      } else {
        setCurrentCard(3);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container" ref={containerRef}>
      <div className={`card ${currentCard === 1 ? 'active' : ''}`}>
        <div className="card-header">Header 1</div>
        <div className="card-content">
          Content for Card 1
        </div>
      </div>
      <div className={`card ${currentCard === 2 ? 'active' : ''}`}>
        <div className="card-header">Header 2</div>
        <div className="card-content">
          Content for Card 2
        </div>
      </div>
      <div className={`card ${currentCard === 3 ? 'active' : ''}`}>
        <div className="card-header">Header 3</div>
        <div className="card-content">
          Content for Card 3
        </div>
      </div>
    </div>
  );
};

export default Education;