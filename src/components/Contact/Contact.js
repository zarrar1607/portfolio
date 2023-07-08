import React from 'react';
import ContentSection from '../ContentSection/ContentSection';
import Logo from '../ProfileImage';
import './Contact.scss'

const Contact = () => {
    const TagComponent = () => (
        <>
            Contact PAge
        </>
    );
    return(
        <>
            <ContentSection pageComponent={<TagComponent />} />
        </>
    );
};

export default Contact;
