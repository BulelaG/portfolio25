import React from 'react';
import { Container } from 'react-bootstrap';
import './EventsGallery.css';

const eventPhotos = [
  {
    image: '/images/events/ethcapetown-stage.jpg',
    title: 'Web3 Node Engine',
    caption: 'Web3 hackathon participation'
  },
  {
    image: '/images/events/ocean-hub-africa.jpg',
    title: 'Ocean Hub Africa 2025',
    caption: 'Hackathon team and challenge work'
  },
  {
    image: '/images/events/ethcapetown-circle.jpg',
    title: 'EthCapeTown 2024',
    caption: 'Ideating, Building & Shipping'
  },
  {
    image: '/images/events/genz-creative-hackathon.jpg',
    title: 'Gen Z Creative Hackathon 2023',
    caption: 'Ideation and product thinking'
  },
  {
    image: '/images/events/ai-driven-hackathon.jpg',
    title: 'AI Driven Hackathon',
    caption: 'AI Driven Solutions'
  },
  {
    image: '/images/events/nasa-space-apps.jpg',
    title: 'Lightning Dev Bootcamp 2026',
    caption: 'Developer community event'
  },
  {
    image: '/images/events/bbd-aws-community.jpg',
    title: 'BBD / AWS Community',
    caption: 'Cloud and community learning'
  },
  {
    image: '/images/events/bgb-innovation-challenge.jpg',
    title: 'BGB Innovation Challenge 2024',
    caption: 'Innovation and collaboration'
  }
];

const EventsGallery = () => {
  const carouselItems = [...eventPhotos, ...eventPhotos];

  return (
    <section id="events" className="events-gallery">
      <Container>
        <div className="events-heading">
          <p>Interests / Hackathons / Events</p>
          <h2>Building in real rooms, with real communities.</h2>
        </div>

        <div className="event-carousel" aria-label="Hackathon and event photo carousel">
          <div className="event-track">
            {carouselItems.map((event, index) => {
              const isDuplicate = index >= eventPhotos.length;

              return (
              <article
                className="event-card"
                key={`${event.title}-${index}`}
                aria-hidden={isDuplicate ? 'true' : undefined}
              >
                <img src={event.image} alt={isDuplicate ? '' : `${event.title} event`} />
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.caption}</p>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventsGallery;
