// Sidenav.js
import React, { useState } from 'react';
import { navData } from "./SideNavContent.js";
import { Collapse, Row, Col } from 'react-bootstrap';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './SideNav.scss';

export default function Sidenav() {
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
            <span className='sideNavContent'>
                {sidenavOpen &&
                    navData.map(item => (
                        <div key={item.id} className='sideitem border'>
                            <Row onClick={() => toggleItem(item.id)} className={sidenavOpen ? 'collapsible-header' : 'collapsible-header-closed'}>
                                {item.icon}
                                <Col xs={8} className={sidenavOpen ? 'linkText border' : 'linkText linkTextClosed border '}>{item.text}</Col>
                                <Col xs={4} className='triangle-icon border'>{activeItem === item.id ? '▼' : '►'}</Col>
                            </Row>
                            <Collapse in={activeItem === item.id}>
                                <div className='collapsible-body'>
                                    {item.sublinks && item.sublinks.map(sublink => (
                                        <div key={sublink.id} className='sideitem border'>
                                            {sublink.icon}
                                            <span className='linkText'>{sublink.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </Collapse>
                        </div>
                    ))}
            </span>
            <span>
                <button className='menuBtn border' onClick={toggleSidenav}>
                    <KeyboardDoubleArrowLeftIcon />
                </button>
            </span>
        </div>
    );
}
