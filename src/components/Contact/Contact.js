import React from 'react';
import './Contact.scss'
import { Button, Col, Form, Row, Image } from 'react-bootstrap';
import EmailForm from './EmailForm';

const Contact = () => {
    return (
        <div className=' contact'>
            <Row className=' '>
                <Col className=' flex-grow-1 jumbotron' xs={12} md={6}>
                    <EmailForm />
                </Col>
                <Col className=' jumbotron' xs={6} md={3}>
                    <Row className=' w-100'>
                        <Col className='' xs={6} >
                            <a href="https://www.linkedin.com/in/misbah-zarrar-758363104/" target='blank_' rel="noopener noreferrer">
                                <Image src={ process.env.PUBLIC_URL +'/Icons/LinkedIn.svg'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 LinkedIn icon_text' xs={6}>
                            <a href="https://www.linkedin.com/in/misbah-zarrar-758363104/" target='blank_' rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </Col>
                    </Row>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://github.com/zarrar1607" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/Github.svg'} className='img-fluid icon'  rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 Github icon_text' xs={6}>
                            <a href="https://github.com/zarrar1607" rel="noopener noreferrer" target='blank_'>
                                Github
                            </a>
                        </Col>
                    </Row>
                    <Row className='w-100'>
                        <Col className='' xs={6}>
                            <a href="mailto:zarrar_1607@gmail.com" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/Mail.svg'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 Mail icon_text' xs={6}>
                            <a href="mailto:zarrar_1607@gmail.com" rel="noopener noreferrer" target='blank_'>
                                E-Mail
                            </a>
                        </Col>
                    </Row>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://leetcode.com/zarrar1607/" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/LeetCode.png'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 LeetCode icon_text' xs={6}>
                            <a href="https://leetcode.com/zarrar1607/" rel="noopener noreferrer" target='blank_'>
                                LeetCode
                            </a>
                        </Col>
                    </Row>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://www.hackerrank.com/zarrar2009" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/HackerRank.png'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 HackerRank icon_text' xs={6}>
                            <a href="https://www.hackerrank.com/zarrar2009" rel="noopener noreferrer" target='blank_'>
                                HackerRank
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col className=' jumbotron' xs={6} md={3}>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://learn.microsoft.com/en-us/users/mohammedmisbahzarrar-8116/achievements#badges-section" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'./Icons/Microsoft.png'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 Microsoft icon_text' xs={6}>
                            <a href="https://learn.microsoft.com/en-us/users/mohammedmisbahzarrar-8116/achievements#badges-section" rel="noopener noreferrer" target='blank_'>
                                Microsoft Learn
                            </a>
                        </Col>
                    </Row>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://www.techgig.com/misbahzarrar" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/TechGig.png'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 TechGig icon_text' xs={6}>
                            <a href="https://www.techgig.com/misbahzarrar" rel="noopener noreferrer" target='blank_'>
                                TechGig
                            </a>
                        </Col>
                    </Row>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://g.dev/misbah_zarrar" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/Google.svg'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 Google icon_text' xs={6}>
                            <a href="https://g.dev/misbah_zarrar" rel="noopener noreferrer" target='blank_'>
                                Google
                            </a>
                        </Col>
                    </Row>
                    <Row className=' w-100'>
                        <Col className='' xs={6}>
                            <a href="https://www.youtube.com/@misbahzarrar5487/" rel="noopener noreferrer" target='blank_'>
                                <Image src={ process.env.PUBLIC_URL +'/Icons/Youtube.svg'} className='img-fluid icon' rounded />
                            </a>
                        </Col>
                        <Col className=' flex-grow-1 Youtube icon_text' xs={6}>
                            <a href="https://www.youtube.com/@misbahzarrar5487/" rel="noopener noreferrer" target='blank_'>
                                Youtube
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
