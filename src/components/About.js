import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import DevWallpaper from './DevWallpaper';
import './About.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Java', 'MongoDB', 'MySQL', 'REST APIs']
  },
  {
    title: 'Web3 & AI',
    skills: ['Smart contract integration', 'dApp concepts', 'Ethers.js', 'Bitcoin', 'Celo', 'OpenAI API']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Netlify', 'Vercel', 'Figma', 'Canva', 'Postman', 'Jira']
  }
];

const strengths = [
  'Fast prototyping',
  'Business-focused builds',
  'Team collaboration',
  'Community activation',
  'Problem solving',
  'Communication (EN/XH)'
];

const About = () => {
  return (
    <section id="about" className="text-dark bg-light border border-muted border-bottom-0">
      <DevWallpaper variant="about" />
      <Container>
        <h2 className="text-center py-2 mb-5 title">About Me</h2>

        <Row className="align-items-start gy-4">
          <Col lg={6}>
            <div className="about-summary">
              <p className="about-lead">
                I'm <strong>Bulela Gomoshe</strong>, a full-stack developer building affordable business web solutions for small teams, founders, and community-driven projects.
              </p>
              <p>
                I work across websites, online stores, business web tools, chatbots, and Web3 prototypes. My edge is turning early ideas into clear, usable products that people can understand, test, and improve.
              </p>
              <p>
                Hackathons and tech communities shape how I build: move quickly, solve real problems, collaborate well, and present the value clearly.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {strengths.map((skill) => (
                  <Badge bg="secondary" key={skill}>{skill}</Badge>
                ))}
              </div>

              <div className="d-flex py-3 justify-content-start">
                <a href="./Bulela CV Resume.pdf" download className="btn bg-dark btn-sm btn-outline-info">
                  <b>Download Resume</b>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <h4 className="mb-4 fw-semibold text-center">Technical Skills</h4>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h6>{group.title}</h6>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {group.skills.map((skill) => (
                      <Badge bg="primary" text="light" key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
