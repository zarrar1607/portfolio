import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ProjectItem from './ProjectItem';
import timelineElements from "./timelineElements"
import './Project.scss'
import ImageCarousel from './ProjectImageCarousel';

import SideNav from './SideNav.js';
import Home from "../Home/Home.js";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Row, Image } from 'react-bootstrap';


const Project = () => {
    return (
        <div className='project'>
            {/*<div class='jumbotron' style={{justifyContent:'center', alignItems:'center'}}>
                <Image src={ process.env.PUBLIC_URL +'/Under Construction.jpg'} alt='Under Construction' fluid></Image>
            </div>*/}
            <SideNav />
            {timelineElements.map((element, index) => (
                <div
                    className="jumbotron"
                    style={{ border: 'none' }}
                    key={element.id}
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