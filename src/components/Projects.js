// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DevWallpaper from './DevWallpaper';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Point of Sales App',
      description: 'Retail sales dashboard built to make inventory, checkout, and receipts easier to manage in one place.',
      problem: 'Small retailers need a simple way to track products, sales, and receipts without spreadsheet chaos.',
      solution: 'Built a focused POS interface with product management, sales tracking, and checkout flow.',
      outcome: 'Cleaner retail workflow for stock control and daily selling.',
      clientType: 'Retail / small business',
      proof: 'Live demo available',
      image: '/images/images/fly-shoe-Ecommerce.png',
      link: 'https://fly-kicks-pos.netlify.app',
      tech: ['Vue.js', 'Bootstrap', 'Node.js'],
      caseStudy: true
    },
    {
      title: 'Tutor Platform App',
      description: 'Education marketplace concept for connecting learners with tutors through profiles and booking flows.',
      problem: 'Learners need a clearer way to discover tutors, compare profiles, and request sessions.',
      solution: 'Created tutor listings, profile structure, ratings, and a booking-focused experience.',
      outcome: 'A service-platform pattern that can scale into paid bookings and learner management.',
      clientType: 'Education / marketplace',
      proof: 'Live demo available',
      image: '/images/images/thuto-app.png',
      link: 'https://thuto-platform.netlify.app',
      tech: ['Vue.js', 'Express.js', 'Bootstrap', 'MongoDB', 'Node.js'],
      caseStudy: true
    },
    {
      title: 'Kasi-eco Marketplace App',
      description: 'Local marketplace concept for township vendors and eco-conscious products.',
      problem: 'Local vendors need a digital storefront that feels accessible and practical for community commerce.',
      solution: 'Designed a product marketplace with vendor-friendly browsing and a simple shopping experience.',
      outcome: 'A stronger online-store example for small-business and marketplace work.',
      clientType: 'Local commerce / online store',
      proof: 'Live demo available',
      image: '/images/images/Kasi-eCo.jpeg',
      link: 'https://kasi-e-co-iqvz.vercel.app/home',
      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      caseStudy: true
    },
    {
      title: 'Weather App',
      description: 'CityCast is a weather forecast app that fetches real-time weather data and presents it in a user-friendly interface.',
      image: '/images/images/cityCast.jpeg',
      link: 'https://citycastapp.netlify.app',
      tech: ['JavaScript', 'Bootstrap', 'OpenWeatherMap API']
    },
    {
      title: 'ScholarFi Dapp',
      description: 'A decentralized learning platform that rewards learners using blockchain-based smart contracts and learning tokens.',
      image: '/images/images/scholarFi.png',
      link: 'https://w3scholar.netlify.app',
      tech: ['Solidity', 'React', 'Ethers.js', 'Bootstrap']
    },
    {
      title: 'Chatbot App',
      description: 'MyChat is a research assistant chatbot built around conversational prompts and quick topic exploration.',
      image: '/images/images/chatbot.PNG',
      link: 'https://mycht.netlify.app',
      tech: ['OpenAI API', 'Node.js', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Bank Portal App',
      description: 'A full-stack banking solution that enables users to manage accounts, transfer funds, and view transactions securely.',
      image: '/images/images/Bank.PNG',
      link: 'https://github.com/BulelaG',
      tech: ['Python']
    },
    {
      title: 'Metric Converter',
      description: 'The Unit Converter is a handy tool that simplifies converting between various measurement units in real-time.',
      image: '/images/images/Unit_converter.PNG',
      link: 'https://github.com/BulelaG/Java/tree/main/unitConverter',
      tech: ['Java']
    },
    {
      title: 'To-do App',
      description: 'A clean and simple task manager built for organizing daily to-dos with the ability to add, check, and delete tasks.',
      image: '/images/images/T-D-L.jpeg',
      link: 'https://todo-task100.netlify.app',
      tech: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Restaurant App',
      description: 'A restaurant website concept focused on menu presentation, brand feel, and simple customer browsing.',
      image: '/images/images/restu.PNG',
      link: 'https://leschevres.netlify.app',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    }
  ];

  const featuredProjects = projectData.filter((project) => project.caseStudy);
  const supportingProjects = projectData.filter((project) => !project.caseStudy);
  const renderTechBadges = (tech) => (
    <div className="mb-3 tech-badges" aria-label={`Tech stack: ${tech.join(', ')}`}>
      {tech.map((item, index) => (
        <React.Fragment key={item}>
          <span className="badge bg-secondary me-2">{item}</span>
          {index < tech.length - 1 && ' '}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section id="projects" className="border border-muted">
      <DevWallpaper variant="projects" />
      <Container>
        <h2 className="text-center title">Projects</h2>
        <p className="projects-intro">
          Featured builds are framed as business problems, not just tech demos. These show the kind of practical
          websites, stores, and tools I can build for clients.
        </p>

        <div className="project-section-label">
          <span>Featured case studies</span>
        </div>
        <Row>
          {featuredProjects.map((project) => (
            <Col md={4} key={project.title} className="my-3 d-flex">
              <Card className={`flex-fill ${project.caseStudy ? 'case-study-card' : ''}`}>
                <Card.Img variant="top" src={project.image} className="project-image" />
                <Card.Body className="d-flex flex-column">
                  {project.caseStudy && <span className="case-study-kicker">Case study</span>}
                  <Card.Title className="card-title">{project.title}</Card.Title>
                  <Card.Text className="card-text">{project.description}</Card.Text>

                  <div className="case-study-meta">
                    <span>{project.clientType}</span>
                    <span>{project.proof}</span>
                  </div>

                  <div className="case-study-points">
                    <p><strong>Problem</strong>{project.problem}</p>
                    <p><strong>Solution</strong>{project.solution}</p>
                    <p><strong>Outcome</strong>{project.outcome}</p>
                  </div>

                  {renderTechBadges(project.tech)}

                  <a href={project.link} className="btn btn-outline-info mt-auto" target="_blank" rel="noopener noreferrer">
                    View Live Build
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="project-section-label supporting-label">
          <span>More builds</span>
        </div>
        <Row>
          {supportingProjects.map((project) => (
            <Col md={4} key={project.title} className="my-3 d-flex">
              <Card className="flex-fill supporting-project-card">
                <Card.Img variant="top" src={project.image} className="project-image" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="card-title">{project.title}</Card.Title>
                  <Card.Text className="card-text">{project.description}</Card.Text>

                  {renderTechBadges(project.tech)}

                  <a href={project.link} className="btn btn-outline-info mt-auto" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
