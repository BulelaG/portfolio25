import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light border-top">
      <Container>
        <h2 className="text-center mb-4 title text-dark">Contact Me</h2>
        <p className="text-center text-muted mb-5">
          Got a project idea or just want to say hi? Fill in the form below or reach out directly via email.
        </p>

        <Form 
          id="contact-form" 
          name="contact-form" 
          action="https://formspree.io/f/mlezrjaw" 
          method="POST"
        >
          <Form.Group className="mb-4">
            <Form.Label className="text-dark px-1">Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-dark px-1">Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-dark px-1">Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message" 
              rows={4} 
              placeholder="Write your message here" 
              required 
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-4">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
