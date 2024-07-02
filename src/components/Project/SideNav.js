import React, { useState } from 'react';
import { Collapse, Row, Col } from 'react-bootstrap';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import timelineElements from "./timelineElements";
import { HashLink as Link } from 'react-router-hash-link';

import './SideNav.scss';

export default function Sidenav() {
    const projectCategories = [
        { name: 'Research', projects: timelineElements.filter(project => project.project_domain.includes('IROS 2024')) },
        { name: 'Software Engineering', projects: timelineElements.filter(project => project.project_domain.includes('Software Engineering')) },
        { name: 'Artificial Intelligence', projects: timelineElements.filter(project => project.project_domain.includes('Deep Learning', 
            'Natural Language Processing', 'Computer Vision', 'TinyML')) },
        { name: 'Robotics', projects: timelineElements.filter(project => project.project_domain.includes('Robotics')) }
    ];

    const [sidenavOpen, setSidenavOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const toggleSidenav = () => {
        setSidenavOpen(prevState => !prevState);
        if (sidenavOpen) {
            setActiveItem(null); // Collapse all items when closing the sidenav
        }
    };

    const toggleItem = (itemId) => {
        setActiveItem(activeItem === itemId ? null : itemId);
    };

    return (
        <div className={sidenavOpen ? 'sidenav' : 'sidenav sidenavClosed'}>
            <span className='sideNavContent'>
                {sidenavOpen && (
                    <div className='sideitem'>
                        {projectCategories.map((category, idx) => (
                            <React.Fragment key={idx}>
                                <Row onClick={() => toggleItem(idx)} className={sidenavOpen ? 'collapsible-header w-100' : 'collapsible-header-closed w-100'}>
                                    <Col xs={10} className={sidenavOpen ? 'linkText' : 'linkText linkTextClosed border'}>
                                        {category.name} ({category.projects.length})
                                    </Col>
                                    <Col xs={2} className='triangle-icon'>{activeItem === idx ? 'v' : '>'}</Col>
                                </Row>
                                <Collapse in={activeItem === idx}>
                                    <div className='collapsible-body'>
                                        {category.projects.map((element, index) => (
                                            <div className='sideitem linkText' key={index}>
                                                <Link smooth to={"#project_" + element.id}>
                                                    {element.project_title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </Collapse>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </span>
            <span>
                <button className='menuBtn border' onClick={toggleSidenav}>
                    <KeyboardDoubleArrowLeftIcon />
                </button>
            </span>
        </div>
    );
}
