import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import styles from './styles.module.css';
import timelineElements from "./timelineElements"

const Education = () => {
  const alignCenter = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', scrollbarWidth: 'none!important' };
  const purpleShades = [
    '#3A006E', // Darkest shade
    '#4C008A',
    '#6400B6',
    '#776FB7',
    '#7E7FCC', 
    '#858FE0', // Lightest shade
  ];
  return (
    <div className={styles.container}>
      <div className={styles.background} />

      <Parallax pages={4}>
        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <div className={`${styles.card_header} ${styles.title}`} style = {{background:purpleShades[0]}}>
              {timelineElements[3].title}
            </div>
            <div className={`${styles.card_header}`} style = {{background:purpleShades[0]}}>
              Specialize in Data Science
            </div>
            <div className={`${styles.card_header}`} style = {{background:purpleShades[0]}}>
              {timelineElements[3].company}
            </div>

            <div className={`${styles.card_content}`}>
              <div className="content">
                <h5>{timelineElements[3].location}<br />{timelineElements[3].date}</h5>
              </div>
              <div className="content">
                <h5><strong>Grade</strong>: {timelineElements[3].Grade}</h5>
              </div>
              <div className="content">
                <p>{timelineElements[3].description}</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <div className={`${styles.card_header} ${styles.title}`}  style = {{background:purpleShades[1]}}>
              {timelineElements[2].title}
            </div>
            <div className={`${styles.card_header}`} style = {{background:purpleShades[1]}}>
              {timelineElements[2].company}
            </div>
            <div className={`${styles.card_content}`}>
              <div className="content">
                <h5>{timelineElements[2].location}<br />{timelineElements[2].date}</h5>
              </div>
              <div className="content">
                <h5><strong>Grade</strong>: {timelineElements[2].Grade}</h5>
              </div>
              <div className="content">
                <p>{timelineElements[2].description}</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <div className={`${styles.card_header} ${styles.title}`} style = {{background:purpleShades[2]}}>
              {timelineElements[1].title}
            </div>
            <div className={`${styles.card_header}`} style = {{background:purpleShades[2]}}>
              {timelineElements[1].company}
            </div>
            <div className={`${styles.card_content}`}>
              <div className="content">
                <h5>{timelineElements[1].location}<br />{timelineElements[1].date}</h5>
              </div>
              <div className="content">
                <h5><strong>Grade</strong>: {timelineElements[1].Grade}</h5>
              </div>
              <div className="content">
                <p>{timelineElements[1].description}</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <div className={`${styles.card_header} ${styles.title}`} style = {{background:purpleShades[3]}}>
              {timelineElements[0].title}
            </div>
            <div className={`${styles.card_header}`} style = {{background:purpleShades[3]}}>
              {timelineElements[0].company}
            </div>
            <div className={`${styles.card_content}`}>
              <div className="content">
                <h5>{timelineElements[0].location}<br />{timelineElements[0].date}</h5>
              </div>
              <div className="content">
                <h5><strong>Grade</strong>: {timelineElements[0].Grade}</h5>
              </div>
              <div className="content">
                <p>{timelineElements[0].description}</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Education;
