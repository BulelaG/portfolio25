// src/components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center">Contact Me</h2>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
