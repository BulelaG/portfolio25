// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';


const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="../../public/images/profile.png" // Update with your image path
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              I am a passionate developer with 2+ years of front-end development
              experience, currently based in Cape Town. I specialize in creating
              interactive and dynamic web applications using React, Web3 technologies,
              and more.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
