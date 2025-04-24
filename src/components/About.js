import React from 'react';
import { Container, Row, Col, ProgressBar, Badge } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className=" text-dark bg-light border border-muted border-bottom-0 ">
      <Container>
        {/* SECTION TITLE */}
        <h2 className="text-center py-2 mb-5 title ">About Me</h2>

        <Row className="align-items-start">
          {/* === LEFT: ABOUT === */}
          <Col md={6}>
            <h4 className="fw-semibold py-2 mb-2">Who I Am</h4>
            <p>
              I’m <strong>Bulela Gomoshe</strong>, a Full-Stack Web Developer and aspiring Web3 innovator based in Cape Town.
              My journey began with a curiosity for computers, eventually growing into a love for building impactful digital solutions.
            </p>
            <p>
              I'm an entrepreneur at heart — resourceful, collaborative, and obsessed with meaningful tech.
              Hackathons are my playground where I transform ideas into working prototypes, fast.
            </p>
            <p>
              With experience across front-end, back-end, and now exploring Web3, I aim to shape the future of tech through digital inclusion, financial empowerment, and creative code.
             Whether it’s interfaces or ideas — I build with purpose.
            </p>

            <p className="fst-italic">
              “Let’s connect, code, and create something powerful — together.” ✨
            </p>

            {/* Soft Skills */}
            <h5 className="mt-5 mb-3 fw-bold">Soft Skills</h5>
            <div className="d-flex flex-wrap gap-2">
              <Badge bg="secondary">Problem Solving</Badge>
              <Badge bg="secondary">Entrepreneurial Mindset</Badge>
              <Badge bg="secondary">Team Collaboration</Badge>
              <Badge bg="secondary">Creative Ideation</Badge>
              <Badge bg="secondary">Adaptability</Badge>
              <Badge bg="secondary">Communication (EN/XH)</Badge>
              <Badge bg="secondary">Resilience</Badge>
              <Badge bg="secondary">Growth-Oriented</Badge>
            </div>

            <div className="d-flex py-3 justify-content-start">
             <a href="./Bulela CV Resume.pdf" download>
              <button className="btn bg-dark btn-sm btn-outline-info">
              <b>Download Resume </b>
              </button>
             </a>
             </div>
          </Col>

          {/* === RIGHT: SKILLS === */}
          <Col md={6}>
            <h4 className="mb-4 fw-semibold text-center">Technical Skills</h4>

            {/* Frontend */}
            <h6 className="mt-3 text-primary
          ">Frontend</h6>
            <div className="mb-2">
              <h6>React</h6>
              <ProgressBar now={70} label="70%" />
            </div>
            <div className="mb-2">
              <h6>Angular</h6>
              <ProgressBar now={75} label="75%" />
            </div>
            <div className="mb-2">
              <h6>JavaScript</h6>
              <ProgressBar now={80} label="80%" />
            </div>
            <div className="mb-2">
              <h6>Python</h6>
              <ProgressBar now={60} label="60%" />
            </div>
            <div className="mb-2">
              <h6>HTML & CSS</h6>
              <ProgressBar now={90} label="90%" />
            </div>
            <div className="mb-2">
              <h6>Bootstrap </h6>
              <ProgressBar now={90} label="90%" />
            </div>

            {/* Backend */}
            <h6 className="mt-4 text-primary">Backend</h6>
            <div className="mb-3">
              <h6>Node.js</h6>
              <ProgressBar now={60} label="60%" />
            </div>
            <div className="mb-3">
              <h6>Express.js</h6>
              <ProgressBar now={55} label="55%" />
            </div>
            <div className="mb-3">
              <h6>MongoDB / MySQL</h6>
              <ProgressBar  now={65} label="65%" />
            </div>

            {/* Web3 */}
            <h6 className="mt-4 text-primary">Blockchain & Web3</h6>
            <div className="mb-3">
              <h6>Smart Contract Integration</h6>
              <ProgressBar now={50} label="50%" />
            </div>
            <div className="mb-3">
              <h6>Decentralized App (dApp) Concepts</h6>
              <ProgressBar now={60} label="60%" />
            </div>

            {/* Tools */}
            <h6 className="mt-4 text-muted">Tools & Platforms</h6>
            <div className="d-flex flex-wrap gap-2 mt-2">
              <Badge bg="info" text="dark">Git</Badge>
              <Badge bg="info" text="dark">GitHub</Badge>
              <Badge bg="info" text="dark">Netlify</Badge>
              <Badge bg="info" text="dark">Vercel</Badge>
              <Badge bg="info" text="dark">Figma</Badge>
              <Badge bg="info" text="dark">Canva</Badge>
              <Badge bg="info" text="dark">Postman</Badge>
              <Badge bg="info" text="dark">Jira</Badge>
              <Badge bg="info" text="dark">Confluence</Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;




























// src/components/About.js
// import React from 'react';
// import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
// import './About.css';
// import './Skills.css';


// const About = () => {
//   return (
//     <section id="about" className="py-5  border border-muted border-bottom-0">
//       <Container>
        
//         <Row className="align-items-center">
//         <h2 className='text-center title'>About Me</h2>

          
//           <Col md={6}>
            
//             <p>I’m Bulela Gomoshe, a Full-Stack Web Developer and aspiring Web3 innovator based in Cape Town. My journey started with a curiosity for how computers work and evolved into a passion for building meaningful digital solutions.<br></br><br></br>

// I’m an entrepreneur at heart — driven by creativity, collaboration, and impact. Hackathons are where I thrive, turning big ideas into working prototypes fast. <br></br><br></br>

// With real-world experience in front-end and full-stack projects, I’m now diving deeper into blockchain and Web3, aiming to help shape the future of digital experiences. Let’s connect, code, and build something powerful — together.✨ 
//             </p>
//           </Col>
//           <Col md={6}>
//           <div>

//           <section id="skills" className="py-5 text-dark">
//       <Container>
//         <h3 className="text-center text-white  skills-h3">Skills</h3>

//         <div className="my-4 text-dark">
//           <h6 >React</h6>
//           <ProgressBar now={80} label="80%" />
//         </div>
//         <div className="my-4">
//           <h6>JavaScript</h6>
//           <ProgressBar now={90} label="90%" />
//         </div>
//         <div className="my-4">
//           <h6>Web3</h6>
//           <ProgressBar now={75} label="75%" />
//         </div>
//         <div className="my-4 text-dark">
//           <h6 >React</h6>
//           <ProgressBar now={80} label="80%" />
//         </div>
//         <div className="my-4">
//           <h6>JavaScript</h6>
//           <ProgressBar now={90} label="90%" />
//         </div>
//         <div className="my-4">
//           <h6>Web3</h6>
//           <ProgressBar now={75} label="75%" />
//         </div>
//       </Container>
//     </section>

//           </div>

//           <div></div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default About;
