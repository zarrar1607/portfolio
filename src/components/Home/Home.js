import './Home.scss'
import React from 'react';
import Logo from '../ProfileImage';
import { Col, Container, Row } from 'react-bootstrap';
import WordCloud from './WordCloud';
import { useRef, useState, useEffect } from 'react';

const words = [
    { text: 'Hello', value: 10 },
    { text: 'World', value: 20 },
    { text: 'React', value: 15 },
    { text: 'JavaScript', value: 12 },
    { text: 'CSS', value: 8 },
    { text: 'HTML', value: 20 },
    { text: 'OpenAI', value: 18 },
    { text: 'Chatbot', value: 14 },
    { text: 'AI', value: 16 },
    { text: 'Machine Learning', value: 13 },
    { text: 'Web Development', value: 11 },
    { text: 'Design', value: 9 },
    { text: 'Frontend', value: 17 },
    { text: 'Backend', value: 7 },
    { text: 'Database', value: 10 },
    { text: 'API', value: 19 },
    { text: 'Cloud', value: 15 },
    { text: 'Server', value: 8 },
    { text: 'Security', value: 12 },
    { text: 'Testing', value: 16 },
];



const Home = () => {
    const impCol = useRef(null);
    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });


    useEffect(() => {
        const handleResize = () => {
            if (impCol.current) {
                const { width, height } = impCol.current.parentNode.getBoundingClientRect();
                setParentSize({ width, height });
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <>
            <Container className='jumbotron' fluid>
                <Row className=''>
                    <Col xs={12} md={6} className=''>
                        <Logo />
                    </Col>
                    <Col md={6} className='about_me d-flex flex-column'>
                        <h1 className='display-3 flex-shrink-0'>
                            Mohammed Misbah Zarrar
                        </h1>
                        <div className='flex-grow-1 border about_me_content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='jumbotron border skills' fluid>
                <Row className='w-100 title border'>
                    <Col>
                        <h1 className='display-4 border'>Skills{parentSize.width - 5} x {parentSize.height - 15}</h1>
                    </Col>
                </Row>
                <Row className='w-100 border flex-grow-1' style={{ maxHeight: '100%', maxWidth: '100%' }}>
                    <Col className='border' style={{ padding: 0, border: 0, }} ref={impCol}>
                        <WordCloud words={words} title={'Skills'} finalWidth = {parentSize.width - 5} finalHeight = {parentSize.height * 0.85}/>
                    </Col>
                </Row>
            </Container>


            <Container className='jumbotron border' fluid>
                <Row className='border'>
                    <Col >
                        <h1 className='display-4 border'>
                            Skills
                        </h1>
                    </Col>
                </Row>
                <WordCloud words={words} title={'Skills'} />
            </Container>

            <Container className='jumbotron border' fluid>
                <Row className='border'>
                    <Col xs={12} md={6} className='border'>
                        <Logo />
                    </Col>
                    <Col md={6} className='about_me d-flex flex-column'>
                        <h1 className='display-3 flex-shrink-0 border'>
                            Mohammed Misbah Zarrar
                        </h1>
                        <div className='flex-grow-1 border about_me_content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
