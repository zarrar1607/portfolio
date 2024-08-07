import React from 'react';
import ProjectItem from './ProjectItem';
import timelineElements from "./timelineElements"
import './Project.scss'
import ImageCarousel from './ProjectImageCarousel';

import SideNav from './SideNav.js';


const Project = () => {
    return (
        <div className='project'>
            <SideNav />
            <div style = {{paddingTop:"100px"}}>

            </div>
            {timelineElements.map((element, index) => (
                <div
                    className="project-card"
                    style={{ border: 'none' }}
                    key={element.id}
                    id={"project_" + element.id} 
                >
                    <ProjectItem
                            id={element.id}
                            project_title={element.project_title}
                            project_type={element.project_type}
                            project_domain={element.project_domain}
                            date={element.date}
                            year={element.year}
                            skills={element.skills}
                            description={element.description}
                            image_path={element.image_path}
                    />
                    <div className='project_images' >
                        <ImageCarousel project_name={element.project_name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;