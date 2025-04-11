// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';


const Projects = () => {
  const projectData = [
    {
      title: 'Point of Sales App',
      description: 'Description of project 1',
      image: '/src/images/fly-shoe-Ecommerce.png',
      link: '#'
    },
    {
      title: 'Tutor Platform App',
      description: 'Description of project 2',
      image: '/src/images/thuto-app.png',
      link: '#'
    },
    {
      title: 'Chatbot App',
      description: 'Description of project 1',
      image: '/src/images/chatbot.PNG',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'Description of project 2',
      image: '/src/images/cityCast.jpeg',
      link: '#'
    },
    {
      title: 'ScholarFi Dapp',
      description: 'Description of project 1',
      image: '/src/images/scholarFi.png',
      link: '#'
    },
    {
      title: 'Kasi-eco Marketplace App',
      description: 'Description of project 2',
      image: '/src/images/Kasi-eCo.jpeg',
      link: '#'
    },
    {
      title: '  Bank Portal App',
      description: 'Description of project 1',
      image: '/src/images/Bank.PNG',
      link: '#'
    },
    {
      title: 'Metric Converter',
      description: 'Description of project 2',
      image: '/src/images/Unit_converter.PNG',
      link: '#'
    },
    {
      title: 'To-do app',
      description: 'Description of project 1',
      image: '/src/images/T-D-L.jpeg',
      link: '#'
    }
   
  ];

  return (
    <section id="projects" className="py-5 border border-muted">
      <Container>
        <h2 className="text-center  title">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} key={index} className="my-3">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.link} className="btn btn-primary">View Project</a>
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
