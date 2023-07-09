import './Home.scss'
import React from 'react';
import Logo from '../ProfileImage';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';



import './WordGroup.scss';
import Example from './WordCloud';
import MyWordCloud from './myWordCloud';


const Home = () => {

    return (
        <>
            <Container className='jumbotron'>
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

            <Container className='jumbotron border'>
                {/*<div class="word-cloud">
                    <span class="word">Hello</span>
                    <span class="word">World</span>
                    <span class="word">React</span>
                    <span class="word">JavaScript</span>
                    <span class="word">CSS</span>
                    <span class="word">HTML</span>
                </div>
                {/*<div>

                    <Example
                        words={words}
                        width={600}
                        height={400}
                        showControls={true}
                    />
    </div>*/}
                <div>
                    <MyWordCloud />
                </div>
            </Container>

            <Container className='jumbotron border'>
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
