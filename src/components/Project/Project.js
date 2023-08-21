import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ProjectItem from './TimeLineItem';
import timelineElements from "./timelineElements"
import './Project.scss'

import SideNav from './SideNav.js';
import Home from "../Home/Home.js";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


const Project = () => {
    

    return (
        <>
            <SideNav />

            {timelineElements.map((element, index) => (
                <div
                    className="projectline"
                    style={{ border:'none' }}
                    key={element.id}
                >
                    <div key={element.id} className='jumbotron'>
                        <ProjectItem
                            title={element.title}
                            company={element.company}
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

export default Project;