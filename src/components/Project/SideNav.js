// Sidenav.js
import React, { useState } from 'react';
import { navData } from "./SideNavContent.js";
import { Collapse, Row, Col } from 'react-bootstrap';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import timelineElements from "./timelineElements"
import { HashLink as Link } from 'react-router-hash-link';

import './SideNav.scss';

export default function Sidenav() {
    const softwareEngineeringProjects = timelineElements.filter(project =>
        project.project_domain.includes('Software Engineering')
    );
    const aiProjects = timelineElements.filter(project =>
        project.project_domain.includes('Deep Learning', 'Natural Language Processing', 'Computer Vision')
    );
    const roboticsProjects = timelineElements.filter(project =>
        project.project_domain.includes('Robotics')
    );
    const researchProjects = timelineElements.filter(project =>
        project.project_domain.includes('IROS 2024')
    );

    const [sidenavOpen, setSidenavOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleSidenav = () => {
        setSidenavOpen(prevState => !prevState);
    };

    const toggleItem = (itemId) => {
        setActiveItem(activeItem === itemId ? null : itemId);
    };

    return (
        <div className={sidenavOpen ? 'sidenav' : 'sidenav sidenavClosed'}>
            {/* {softwareEngineeringProjects.map((element, index) => (
                <div>{element.id}x</div>))} */}
            <span className='sideNavContent'>
                {/* {sidenavOpen &&
                    navData.map(item => (
                        <div key={item.id} className='sideitem '>
                            <Row onClick={() => toggleItem(item.id)} className={sidenavOpen ? 'collapsible-header w-100' : 'collapsible-header-closed w-100'}>
                                {item.icon}
                                <Col xs={8} className={sidenavOpen ? 'linkText ' : 'linkText linkTextClosed border '}> {item.text}</Col>
                                <Col xs={4} className='triangle-icon '>{activeItem === item.id ? 'v' : '>'}</Col>
                            </Row>
                            <Collapse in={activeItem === item.id}>
                                <div className='collapsible-body'>
                                    {item.sublinks && item.sublinks.map(sublink => (
                                        <div key={sublink.id} className='sideitem '>
                                            {sublink.icon}
                                            <span className='linkText'>{sublink.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </Collapse>
                        </div>
                    ))} */}
                {sidenavOpen && (
                    <div className='sideitem '>
                        <Row onClick={() => toggleItem(0)} className={sidenavOpen ? 'collapsible-header w-100' : 'collapsible-header-closed w-100'}>
                            <Col xs={8} className={sidenavOpen ? 'linkText ' : 'linkText linkTextClosed border '}>Research</Col>
                            <Col xs={4} className='triangle-icon '>{activeItem === 1 ? 'v' : '>'}</Col>
                        </Row>
                        <Collapse in={activeItem === 0}>
                            <div className='collapsible-body'>
                                {researchProjects.map((element, index) => (
                                    <div className='sideitem linkText'>
                                        <Link smooth to={"#project_" + element.id}>
                                            {element.project_title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                        <Row onClick={() => toggleItem(1)} className={sidenavOpen ? 'collapsible-header w-100' : 'collapsible-header-closed w-100'}>
                            <Col xs={8} className={sidenavOpen ? 'linkText ' : 'linkText linkTextClosed border '}>Software Engineering</Col>
                            <Col xs={4} className='triangle-icon '>{activeItem === 1 ? 'v' : '>'}</Col>
                        </Row>
                        <Collapse in={activeItem === 1}>
                            <div className='collapsible-body'>
                                {softwareEngineeringProjects.map((element, index) => (
                                    <div className='sideitem linkText'>
                                        <Link smooth to={"#project_" + element.id}>
                                            {element.project_title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                        <Row onClick={() => toggleItem(2)} className={sidenavOpen ? 'collapsible-header w-100' : 'collapsible-header-closed w-100'}>
                            <Col xs={8} className={sidenavOpen ? 'linkText ' : 'linkText linkTextClosed border '}> Artificial Intelligence </Col>
                            <Col xs={4} className='triangle-icon '>{activeItem === 1 ? 'v' : '>'}</Col>
                        </Row>
                        <Collapse in={activeItem === 2}>
                            <div className='collapsible-body'>
                                {aiProjects.map((element, index) => (
                                    <div className='sideitem linkText'>
                                        <Link smooth to={"#project_" + element.id}>
                                            {element.project_title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                        <Row onClick={() => toggleItem(3)} className={sidenavOpen ? 'collapsible-header w-100' : 'collapsible-header-closed w-100'}>
                            <Col xs={8} className={sidenavOpen ? 'linkText ' : 'linkText linkTextClosed border '}> Robotics </Col>
                            <Col xs={4} className='triangle-icon '>{activeItem === 1 ? 'v' : '>'}</Col>
                        </Row>
                        <Collapse in={activeItem === 3}>
                            <div className='collapsible-body'>
                                {roboticsProjects.map((element, index) => (
                                    <div className='sideitem linkText'>
                                        <Link smooth to={"#project_" + element.id}>
                                            {element.project_title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>
                )
                }
            </span>
            <span>
                <button className='menuBtn border' onClick={toggleSidenav}>
                    <KeyboardDoubleArrowLeftIcon />
                </button>
            </span>
        </div>
    );
}
