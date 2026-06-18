import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import './Footer.css';

const email = 'gomoshebulela@gmail.com';
const whatsappLink = 'https://wa.me/27672169078?text=Hi%20Bulela%2C%20I%20need%20a%20website%20or%20business%20web%20tool';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <Container>
        <div className="footer-cta">
          <div>
            <h2>Ready to launch your website?</h2>
            <p>Send a short brief on WhatsApp. Websites start from R2,500.</p>
          </div>
          <div className="footer-actions">
            <a href={whatsappLink} className="btn btn-success footer-whatsapp-cta" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="me-2" />
              Get a WhatsApp Quote
            </a>
            <a href={`mailto:${email}`} className="btn btn-outline-light">
              <FaEnvelope className="me-2" />
              Email Me
            </a>
          </div>
        </div>

        <Row className="text-center text-md-start align-items-center">
          <Col className="text-center" md={12}>
            <h5 className="fw-bold">Let's Connect</h5>
            <div className="d-flex text-center justify-content-center gap-3 mt-2">
              <a href="https://linkedin.com/in/bulelag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
              <a href="https://github.com/BulelaG" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
              <a href="https://x.com/BulelaGomoshe" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter size={24} /></a>
            </div>
            <p>Cape Town, South Africa</p>
            <p>{email}</p>
          </Col>
        </Row>

        <div className="text-center small text-primary">
          (c) {new Date().getFullYear()} Bulela Gomoshe - Built with React
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
