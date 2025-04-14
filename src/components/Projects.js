// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';


const Projects = () => {
  const projectData = [
    {
      title: 'Point of Sales App',
      description: 'An intuitive POS system built for retail operations. It handles inventory management, sales tracking, and receipt generation.',
      image: '../images/images/fly-shoe-Ecommerce.png',
      link: 'https://fly-kicks-pos.netlify.app',
      tech: ['Vue.js', 'Bootstrap', 'Node.js', '']
    },
    {
      title: 'Tutor Platform App',
      description: 'A peer-to-peer tutoring platform that connects learners with verified tutors, featuring booking, profiles, and ratings.',
      image: '../images/images/thuto-app.png',
      link: 'https://thuto-platform.netlify.app',
      tech: ['Vue.js', 'Express.js', 'Bootstrap', 'MongoDB', 'Node.js']
    },
    {
      title: 'Chatbot App',
      description: 'MyChat is an advanced chatbot designed to assist users in conducting research on various topics using conversational AI.',
      image: '../images/images/chatbot.PNG',
      link: 'https://mycht.netlify.app',
      tech: ['Open AI API', 'Node.js', 'Javascript', "Bootstrap"]
    },
    {
      title: 'Weather App',
      description: 'CityCast is a weather forecast app that fetches real-time weather data and presents it in a user-friendly interface.',
      image: '../images/images/cityCast.jpeg',
      link: 'https://citycastapp.netlify.app',
      tech: ['JavaScript', 'Bootstrap', 'OpenWeatherMap API']
    },
    {
      title: 'ScholarFi Dapp',
      description: 'A decentralized learning platform that rewards learners using blockchain-based smart contracts and learning tokens.',
      image: '../images/images/scholarFi.png',
      link: 'https://w3scholar.netlify.app',
      tech: ['Solidity', 'React', 'Ethers.js', 'Bootstrap']
    },
    {
      title: 'Kasi-eco Marketplace App',
      description: 'An eco-conscious marketplace built for township vendors, promoting sustainable products with a local twist.',
      image: '../images/images/Kasi-eCo.jpeg',
      link: 'https://kasi-e-co-iqvz.vercel.app/home',
      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap']
    },
    {
      title: 'Bank Portal App',
      description: 'A full-stack banking solution that enables users to manage accounts, transfer funds, and view transactions securely.',
      image: '../images/images/Bank.PNG',
      link: 'https://github.com/BulelaG/bank_python.git',
      tech: ['Python']
    },
    {
      title: 'Metric Converter',
      description: 'The Unit Converter is a handy tool that simplifies converting between various measurement units in real-time.',
      image: '../images/images/Unit_converter.PNG',
      link: 'github.com/BulelaG/Java/tree/main/unitConverter',
      tech: [ 'JAVA']
    },
    {
      title: 'To-do App',
      description: 'A clean and simple task manager built for organizing daily to-dos with the ability to add, check, and delete tasks.',
      image: '../images/images/T-D-L.jpeg',
      link: 'https://todo-task100.netlify.app',
      tech: ['Javascript', 'HTML', 'CSS']
    },
    {
      title: 'Restaurant App',
      description: 'Les Chèvres is a beautifully crafted website dedicated to showcasing the exquisite offerings of a French restaurant.',
      image: '../images/images/restu.PNG',
      link: 'https://leschevres.netlify.app',
      tech: ['HTML', 'CSS', 'JavaScript', "Bootstrap"]
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
         
               {/* Tech Stack Badges */}
               <div className="mb-3">
                 {project.tech && project.tech.map((item, i) => (
                   <span key={i} className="badge bg-secondary me-2">{item}</span>
                 ))}
               </div>
         
               <a href={project.link} className="btn btn-outline-info mt-auto" target="_blank" rel="noopener noreferrer"></a>
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
