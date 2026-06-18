// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCircleHalfStroke, FaWhatsapp } from 'react-icons/fa6';
import './Navbar.css'; // Import the CSS

const whatsappLink = 'https://wa.me/27672169078?text=Hi%20Bulela%2C%20I%20need%20a%20website%2C%20online%20store%2C%20or%20business%20web%20tool';

const MyNavbar = ({ activeTheme, nextThemeLabel, onThemeToggle }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand ><Nav.Link href="#home">Bulela Gomoshe</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <a
              className="nav-whatsapp-cta"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a free quote on WhatsApp"
            >
              <FaWhatsapp />
              Quote
            </a>
            <button
              className="theme-toggle"
              type="button"
              onClick={onThemeToggle}
              aria-label={`Switch to ${nextThemeLabel} theme`}
              aria-pressed={activeTheme === 'solar'}
              data-active-theme={activeTheme}
            >
              <FaCircleHalfStroke />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
