import './Home.scss'
import React from 'react';
//import Logo from '../ProfileImage';
import { Col, Container, Row, Image } from 'react-bootstrap';
import WordCloud from './WordCloud';
import { useRef, useState, useEffect } from 'react';
import ImageCarousel from './ImageCloud';
import SkillWords from './SkillWords';

const words = SkillWords;



const Home = () => {
    const impCol = useRef(null);
    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

    const [resizing, setResizing] = useState(false);

    const handleResize = () => {
        if (!resizing) {
            setResizing(true);
            setTimeout(() => {
                if (impCol.current) {
                    const { width, height } = impCol.current.parentNode.getBoundingClientRect();
                    setParentSize({ width, height });
                    setResizing(false);
                }
            }, 500); // Adjust the delay as needed
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (


        <div className='home'>
            <div className='dummyHeight'></div>
            <Container className='' fluid>
                <Row className='align-items-center justify-content-center'>
                    <Col sm={12} md={6} xl={4} className='about_me_logo'>
                        <Image src={process.env.PUBLIC_URL + '/ProfileImage/my_image.svg'} alt="My Profile" fluid />
                    </Col>
                    <Col sm={12} md={6} xl={6} className='about_me d-flex flex-column'>
                        <Row>
                            <h1 className='display-1 flex-shrink-0'>
                                Mohammed Misbah Zarrar
                            </h1>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} xl={12}>
                                <div className='flex-grow-1 border about_me_content'>
                                    <p>
                                        Hi! &#x1F44B; <br />
                                        Welcome to my portfolio!  &#x1F603; <br />
                                        I'm a <strong>full-stack software developer</strong> with a passion for <strong>Artificial Intelligence(AI) and Automation</strong>. 👨‍💻 <br />
                                        My research interests align closely with my hobbies, which include
                                        <strong>developing efficient AI models (TinyML) for robots and creating high-performance software</strong> 🏎️. <br /><br />

                                        Currently, I work as a <strong>Software Machine Learning Engineer</strong> at <strong>Pinnacle Technology</strong>.
                                        I hold a <strong>Master’s in Computer Science</strong>, specializing in <strong>Data Science</strong>, from the <strong>University of Kansas</strong>.
                                        I proudly presented <strong>TinyLidarNet</strong> at <strong>IROS 2024</strong>, a leading conference in robotics! 🚀<br />
                                        Beyond work and research, I enjoy <strong>playing table tennis</strong> 🏓, <strong>practicing Taekwondo</strong> 🥋, and <strong>traveling</strong> 🌍<br /> <br />

                                        Feel free to explore my portfolio and get to know more about my work and experiences! ✨

                                    </p>
                                </div>
                            </Col>
                            {/* <Col sm={12} md={12} xl={4}>
                                <div className='flex-grow-1 border about_me_content' style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start', height:'100%', marginTop:'10px'}}>
                                    <strong>Currently:</strong> Master's Student at University of Kansas <br />
                                    <strong>Summer Intership:</strong> Software Developer at Rademacher Financial<br />
                                    <strong>Research:</strong> TinyML under Dr. Heechul Yun<br />
                                </div>
                            </Col> */}
                        </Row>

                    </Col>
                </Row>
            </Container>

            <Container className=' skills' fluid>
                <Row className='w-100 jumbotron_title'>
                    <Col>
                        <h1 className='display-3'>Skills{/*{parentSize.width - 5} x {parentSize.height - 15}*/}</h1>
                    </Col>
                </Row>
                <Row className='w-100 flex-grow-1 about_me_content mb-3' style={{ maxHeight: '100%', maxWidth: '100%', marginLeft: '0px', marginRight: '0px' }}>
                    <Col style={{ padding: 0, border: 0 }} ref={impCol}>
                        <WordCloud words={words} finalWidth={parentSize.width - 5} finalHeight={parentSize.height * 0.85} />
                    </Col>
                </Row>
            </Container>

            <Container className='jumbotron' fluid>
                <Row className='w-100 jumbotron_title'>
                    <Col>
                        <h1 className='display-3'>Certs</h1>
                    </Col>
                </Row>
                <Row className='w-100 h-100 about_me_content ' style={{ marginLeft: '0px', marginRight: '0px', marginBottom: '5px' }} >
                    <ImageCarousel />
                </Row>
            </Container>
        </div>
    );
};

export default Home;
