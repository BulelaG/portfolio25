import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start align-items-center">
         

         

          {/* Right: Socials */}
          <Col className='text-center' md={12}>
            <h5 className="fw-bold">Let’s Connect</h5>
            <div className="d-flex text-center justify-content-center justify-content-center gap-3 mt-2">
              <a href="https://linkedin.com/in/bulelag" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://github.com/BulelaG" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
              <a href="https://x.com/BulelaGomoshe" target="_blank" rel="noopener noreferrer"><FaXTwitter size={24} /></a>
            </div>
             <p>🌍 Cape Town, South Africa</p>
             <p>📧 gomoshebulela@gmail.com</p>
          </Col>
        </Row>

        {/* Bottom Line */}
        <div className="text-center small text-primary">
          © {new Date().getFullYear()} Bulela Gomoshe — Built with 💻 & ☕ 
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
