import React from 'react';
import './Footer.scss'

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2023 Mohammed Misbah Zarrar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;