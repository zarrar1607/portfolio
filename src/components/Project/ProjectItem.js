import React from 'react';
import './ProjectItem.scss';
import { Col, Row } from 'react-bootstrap';
import ImageCarousel from './ProjectImageCarousel';


const ProjectItem = ({id, project_title, project_type, project_domain, date, year, skills, description, image_path }) => {
  const getDomainColor = (domain) => {
    if(domain == 'Deep Learning' || domain == 'Natural Language Processing' || domain == 'Computer Vision')
        return '#1A6E37';
    else if(domain == 'Robotics')
        return '#333333';
    else if(domain == 'IROS 2024')
        return 'red';
    else{
      return '#0D2B74';
    }
  };
  const getSkillColor = (skills) => {
    const purpleShades = [
      '#3A006E', // Darkest shade
      '#665299',
      '#6E5FA3',
      '#776FB7',
      '#7E7FCC',
      '#858FE0', // Lightest shade
    ];
  
    // Check if skills is defined and not empty
    if (!skills || skills.length === 0) {
      return null; // You can return null or an empty array, depending on your preference
    }
  
    return skills.map((skill, i) => (
      <span key={i} className='tag' style={{ backgroundColor: purpleShades[i % purpleShades.length] }}>
        {skill}
      </span>
    ));
  };
  return (
    <>
      <div className="project-item">

        <div className="content">
          <h1 className='display-1'>{project_title}</h1>
        </div>

        <div className="content">
          <h2 className='display-4'>{project_type}</h2>
        </div>

        <div className="content">
          <h5>
            {date}
          </h5>
        </div>

        <div className="content">
            {project_domain && project_domain.length > 0 && project_domain.map((domain) => (
              <span key={domain} className='tag' 
              style={{backgroundColor: getDomainColor(domain)}}>
                {domain}
                </span>
            ))}
        </div>

        <div className="content">
          <p className='description'>{description}</p>
        </div>

        <div className="content">
          <strong>Technology Used: </strong>
          <span className=''>{getSkillColor(skills)}</span>
        </div>
      </div>

    </>
  );
};

export default ProjectItem;
