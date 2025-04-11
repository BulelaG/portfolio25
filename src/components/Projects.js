// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';


const Projects = () => {
  const projectData = [
    {
      title: 'Point of Sales App',
      description: 'Description of project 1',
      image: '../images/images/fly-shoe-Ecommerce.png',
      link: '#'
    },
    {
      title: 'Tutor Platform App',
      description: 'Description of project 2',
      image: '../images/images/thuto-app.png',
      link: '#'
    },
    {
      title: 'Chatbot App',
      description: 'MyChat is an advanced chatbot designed to assist users in conducting research on various topics',
      image: '../images/images/chatbot.PNG',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'Description of project 2',
      image: '../images/images/cityCast.jpeg',
      link: '#'
    },
    {
      title: 'ScholarFi Dapp',
      description: 'Description of project 1',
      image: '../images/images/scholarFi.png',
      link: '#'
    },
    {
      title: 'Kasi-eco Marketplace App',
      description: 'Description of project 2',
      image: '../images/images/Kasi-eCo.jpeg',
      link: '#'
    },
    {
      title: '  Bank Portal App',
      description: 'The Bank Portal App is a comprehensive banking solution that empowers users to manage their finances with ease and security. From creating accounts to conducting transactions, this platform offers a seamless banking experience',
      image: '../images/images/Bank.PNG',
      link: '#'
    },
    {
      title: 'Metric Converter',
      description: 'The Unit Converter is a handy tool designed to simplify the process of converting between different units of measurement',
      image: '../images/images/Unit_converter.PNG',
      link: '#'
    },
    {
      title: 'To-do app',
      description: 'A to-do webapp best for daily tasks',
      image: '../images/images/T-D-L.jpeg',
      link: '#'
    },
    {
      title: 'Resturant App',
      description: 'Les Chèvres is a beautifully crafted website dedicated to showcasing the exquisite offerings of a French restaurant.',
      image: '../images/images/restu.PNG',
      link: '#'
    }
   
  ];

  return (
    <section id="projects" className=" border border-muted">
      <Container>
        <h2 className="text-center  title">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} key={index} className="my-3 d-flex">
            <Card className="flex-fill">
              <Card.Img variant="top" src={project.image} className="project-image" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-text">{project.description}</Card.Text>
                <a href={project.link} className="btn btn-outline-info mt-auto">View Project</a>
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
