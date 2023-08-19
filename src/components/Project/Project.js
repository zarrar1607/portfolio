import React from 'react';
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
            <div className='project-content'>
                <div className='jumbotron'>
                    Project PAge
                </div>
                <div className='jumbotron'>
                    Project PAge
                </div>
                <div className='jumbotron'>
                    Project PAge
                </div>
                <div className='jumbotron'>
                    Project PAge
                </div>
                <div className='jumbotron'>
                    Project PAge
                </div>
            </div>
        </>
    );
};

export default Project;