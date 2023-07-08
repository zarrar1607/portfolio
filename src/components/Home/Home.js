import React from 'react';
import ContentSection from '../ContentSection/ContentSection';
import Logo from '../ProfileImage';

const Home = () => {
    const TagComponent = () => (
        <>
            <Logo />
        </>
    );
    return(
        <>
            <ContentSection pageComponent={<TagComponent />} />
        </>
    );
};

export default Home;
