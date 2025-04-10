// src/components/Skills.js
import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import './Skills.css';


const Skills = () => {
  return (
    <section id="skills" className="py-5 border border-danger text-light">
      <Container>
        <h2 className="text-center">Skills</h2>
        <div className="my-4">
          <h5>React</h5>
          <ProgressBar now={80} label="80%" />
        </div>
        <div className="my-4">
          <h5>JavaScript</h5>
          <ProgressBar now={90} label="90%" />
        </div>
        <div className="my-4">
          <h5>Web3</h5>
          <ProgressBar now={75} label="75%" />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
