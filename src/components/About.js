// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';


const About = () => {
  return (
    <section id="about" className="py-5  border border-danger">
      <Container>
        
        <Row className="align-items-center">
        <h2 className='text-center'>About Me</h2>

          
          <Col md={6}>
            
            <p>I’m Bulela Gomoshe, a Full-Stack Web Developer and aspiring Web3 innovator based in Cape Town. My journey started with a curiosity for how computers work and evolved into a passion for building meaningful digital solutions.<br></br><br></br>

I’m an entrepreneur at heart — driven by creativity, collaboration, and impact. Hackathons are where I thrive, turning big ideas into working prototypes fast. <br></br><br></br>

With real-world experience in front-end and full-stack projects, I’m now diving deeper into blockchain and Web3, aiming to help shape the future of digital experiences. Let’s connect, code, and build something powerful — together.✨ 
            </p>
          </Col>
          <Col md={6}>
          {/* <img
              width="500" 
              height="600" 
              src="../images/dev-gif less-bg.gif" 
              alt="Profile"
              className=""
            /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
