import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './About.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python','Java', 'MongoDB', 'MySQL', 'REST APIs']
  },
  {
    title: 'Blockchain & Web3',
    skills: ['Smart contract integration', 'dApp concepts', 'Ethers.js', 'Bitcoin', 'Celo']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Netlify', 'Vercel', 'Figma', 'Canva', 'Postman', 'Jira', 'Confluence']
  }
];

const softSkills = [
  'Problem Solving',
  'Entrepreneurial Mindset',
  'Team Collaboration',
  'Creative Ideation',
  'Adaptability',
  'Communication (EN/XH)',
  'Resilience',
  'Growth-Oriented'
];

const About = () => {
  return (
    <section id="about" className="text-dark bg-light border border-muted border-bottom-0">
      <Container>
        <h2 className="text-center py-2 mb-5 title">About Me</h2>

        <Row className="align-items-start">
          <Col md={6}>
            <h4 className="fw-semibold py-2 mb-2">Who I Am</h4>
            <p>
              I'm <strong>Bulela Gomoshe</strong>, a Full-Stack Developer and Web innovator based in Cape Town.
              My journey began with a curiosity for computers, eventually growing into a love for building impactful digital solutions.
            </p>
            <p>
              I'm an entrepreneur at heart - resourceful, collaborative, and focused on meaningful tech.
              Hackathons are where I turn ideas into working prototypes, fast.
            </p>
            <p>
              With experience across front-end, back-end, and Web3, I aim to build for digital inclusion, financial empowerment,
              and practical creativity. Whether it's interfaces or ideas, I build with purpose.
              Currently, I am exploring Blockchain & AI.
            </p>

            <p className="fst-italic">
              
              Let's connect, code, and create something powerful - together.
            </p>

            <h5 className="mt-5 mb-3 fw-bold">Soft Skills</h5>
            <div className="d-flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge bg="secondary" key={skill}>{skill}</Badge>
              ))}
            </div>

            <div className="d-flex py-3 justify-content-start">
              <a href="./Bulela CV Resume.pdf" download className="btn bg-dark btn-sm btn-outline-info">
                <b>Download Resume</b>
              </a>
            </div>
          </Col>

          <Col md={6}>
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
