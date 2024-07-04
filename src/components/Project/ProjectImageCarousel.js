import React, { useState } from 'react';
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import ProjectImageItems from './ProjectImageItems';
import './ProjectImageCarousel.scss';
import "./styles.scss";

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export default function ProjectImageCarousel({ project_name }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const filteredItems = ProjectImageItems.reduce((filtered, item) => {
    if (item.projectname === project_name) {
      filtered.push(item);
    }
    return filtered;
  }, []);

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`
    });
  });

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

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
              onClick={() => handleCardClick(item)}
            >
              {item.videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.videoUrl}
                  allowFullScreen
                  title={`Video ${index}`}
                  style={{ border: 'none' }}
                  className="project_video_card"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/Project/${item.filename}`}
                  alt={item.title}
                  style={{ maxHeight: '100%', width: '100%', objectFit: 'cover' }} // Ensures the image fits within the card
                  className="project_image_card"
                />
              )}
              <div className="caption">{item.title}</div>
            </animated.div>
          ))}
        </div>
      ) : null}

      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            {selectedItem.videoUrl ? (
              <iframe
                width="100%"
                height="400px"
                src={selectedItem.videoUrl}
                allowFullScreen
                title={`Video ${selectedItem.title}`}
                style={{ border: 'none' }}
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/Project/${selectedItem.filename}`}
                alt={selectedItem.title}
                className="modal_image"
              />
            )}
            <div className="modal_caption">{selectedItem.title}</div>
          </div>
        </div>
      )}
    </>
  );
}
