import React from 'react';
import './ContentSection.scss';
import Logo from '../ProfileImage.js';

const ContentSection = (props) => {
    return (
        <section className='content_section'>
            {/*<Logo />*/}
            {props.pageComponent}
        </section>
    );
};

export default ContentSection;