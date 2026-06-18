import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa6';
import './Contact.css';

const email = 'gomoshebulela@gmail.com';
const whatsappLink = 'https://wa.me/27672169078?text=Hi%20Bulela%2C%20I%20need%20a%20website%20or%20business%20web%20tool';

const steps = [
  'Free quote',
  'Design/build',
  'Launch'
];

const faqs = [
  {
    question: 'How much does a website cost?',
    answer: 'Small business websites start from R2,500. The final cost depends on pages, content, features, and integrations.'
  },
  {
    question: 'How long does it take?',
    answer: 'A simple website can usually be completed in a few days once the content is ready. Larger builds take longer.'
  },
  {
    question: 'Do you build online stores?',
    answer: 'Yes. I can build simple online stores, product pages, enquiry flows, and WhatsApp-ready purchase journeys.'
  },
  {
    question: 'Do you offer support?',
    answer: 'Yes. I can help with updates, fixes, small improvements, hosting guidance, and post-launch support.'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="border-top">
      <Container>
        <div className="contact-heading">
          <h2 className="text-center mb-3 title text-light">Let's build your website.</h2>
          <p className="text-center text-light mb-3">
            WhatsApp is the fastest way to get a quote. Use the form if you prefer email.
          </p>
          <p className="contact-price-note">Starting from R2,500</p>
          <div className="contact-fallbacks">
            <a href={whatsappLink} className="btn btn-success contact-whatsapp-cta" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="me-2" />
              Get a WhatsApp Quote
            </a>
            <a href={`mailto:${email}`} className="btn btn-outline-light">
              <FaEnvelope className="me-2" />
              {email}
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <div className="process-strip" aria-label="How it works">
            {steps.map((step, index) => (
              <span key={step}>
                <strong>{index + 1}</strong>
                {step}
              </span>
            ))}
          </div>

          <Form
            id="contact-form"
            name="contact-form"
            action="https://formspree.io/f/mlezrjaw"
            method="POST"
            className="contact-form"
          >
            <Form.Group className="mb-3">
              <Form.Label className="text-light px-1">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light px-1">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-light px-1">Project details</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Website, store, or business tool. Include timeline and examples if you have them."
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="px-4">
              Send by Email
            </Button>
          </Form>

          <div className="faq-list" aria-label="Frequently asked questions">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
