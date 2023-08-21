import React from 'react';
import './ProjectItem.scss';
import { Col, Row } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';


const ProjectItem = ({ title, company, location, description, date, year }) => {
  return (
    <>
    <div className="project-item">
      <div className="content">
          <h1 className='display-1'>{title}</h1>
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
    </div>
      <div className='project_images' >
        <ImageCarousel />
      </div>
    </>
  );
};

export default ProjectItem;
