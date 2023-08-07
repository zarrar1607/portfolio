import React from 'react';
import './TimelineItem.scss';
import { Col, Row } from 'react-bootstrap';

const TimelineItem = ({ title, company, location, description, date, year }) => {
  return (
    <div className="timeline-item">
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
  );
};

export default TimelineItem;
