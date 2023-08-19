// Sidenav.js
import React, { useState } from 'react';
import { navData } from "./SideNavContent.js";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './SideNav.scss';

export default function Sidenav() {
    const [sidenavOpen, setSidenavOpen] = useState(false);

    const toggleSidenav = () => {
        setSidenavOpen(prevState => !prevState);
    };

    return (
        <div className={sidenavOpen ? 'sidenav' : 'sidenav sidenavClosed'}>
            <span className='sideNavContent'>
                {sidenavOpen &&
                    navData.map(item => (
                        <div key={item.id} className='sideitem border'>
                            {item.icon}
                            <span className={sidenavOpen ? 'linkText' : 'linkText linkTextClosed'}>{item.text}</span>
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
