// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';


const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'images/project1.png',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'images/project2.png',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center">Projects</h2>
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
