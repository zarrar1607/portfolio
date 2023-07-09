import React from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="sm" className="nav-bar fixed-top">
      <Container className="nav-bar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/' ? 'nav-bar-active' : ''
              }`}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/experience' ? 'nav-bar-active' : ''
              }`}
              to="/experience"
            >
              Experience
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/project' ? 'nav-bar-active' : ''
              }`}
              to="/project"
            >
              Project
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/education' ? 'nav-bar-active' : ''
              }`}
              to="/education"
            >
              Education
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/contact' ? 'nav-bar-active' : ''
              }`}
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
