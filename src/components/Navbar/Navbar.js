import React, { useState } from 'react';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="sm" expanded={expanded} className="nav-bar fixed-top" onToggle={toggleNav}>
      <Container className="nav-bar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/' ? 'nav-bar-active' : ''
              }`}
              to="/"
              onClick={closeNav}
            >
              Home
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/experience' ? 'nav-bar-active' : ''
              }`}
              to="/experience"
              onClick={closeNav}
            >
              Experience
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/project' ? 'nav-bar-active' : ''
              }`}
              to="/project"
              onClick={closeNav}
            >
              Project
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/education' ? 'nav-bar-active' : ''
              }`}
              to="/education"
              onClick={closeNav}
            >
              Education
            </NavLink>

            <NavLink
              exact
              className={`nav-bar-button ${
                location.pathname === '/contact' ? 'nav-bar-active' : ''
              }`}
              to="/contact"
              onClick={closeNav}
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
