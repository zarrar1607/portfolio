import React from 'react';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="sm" className="nav-bar fixed-top">
      <Container className="nav-bar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="nav-bar-button nav-bar-active"
            to="/" 
            >
              Home
            </NavLink>

            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="nav-bar-button"
            to="/experience" 
            >
              Experience
            </NavLink>

            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="nav-bar-button"
            to="/project" 
            >
              Project
            </NavLink>

            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="nav-bar-button"
            to="/education" 
            >
              Education
            </NavLink>

            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="nav-bar-button"
            to="/contact" 
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  /*return(
  <nav>
    <NavLink exact="true" activeClassname="active" to="/">
      Home
    </NavLink>
    <NavLink exact="true" activeClassname="active" to="/contact">
      Contact
    </NavLink>
  </nav>
  );*/
};

export default Navigation;
