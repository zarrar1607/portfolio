import './Home.scss'
import React from 'react';
import Logo from '../ProfileImage';
import { Col, Container, Row } from 'react-bootstrap';

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
    </>
  );
};

export default Home;
