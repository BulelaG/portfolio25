import React, { useState } from 'react';
import { Container, ButtonGroup, Button,  Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import './Timeline.css';

const timelineData = [
  {
    title: "CAM Developer",
    org: "Clickatell",
    icon: <FaBriefcase />,
    date: "May 2024 – Oct 2024",
    desc: "Built AI-powered chatbots and collaborated on UI/UX improvements.",
    type: "experience"
  },
  {
    title: "Web Developer Intern",
    org: "Life Choices Studio",
    icon: <FaBriefcase />,
    date: "Apr 2022 – Present",
    desc: "Developed user-friendly, responsive websites using modern frameworks.",
    type: "experience"
  },
  {
    title: "Life Choices Academy",
    org: "Web Dev & Personal Development",
    icon: <FaGraduationCap />,
    date: "Sep 2021 – Apr 2022",
    desc: "Learned web development(MEAN stack), team collaboration, and professional skills.",
    type: "education"
  },
  {
    title: "Fullstack Web Dev Program",
    org: "Ayoba Developer Program",
    icon: <FaGraduationCap />,
    date: "Mar 2023 – Jul 2023",
    desc: "MEAN stack development, APIs, agile methods, and microapps.",
    type: "education"
  },
  {
    title: "Systems Development National Certificate NQF5",
    org: "CAPACITI (MICT SETA)",
    icon: <FaGraduationCap />,
    date: "Nov 2023 – Oct 2024",
    desc: "Software & Web Development, professionalism, and systems thinking.",
    type: "education"
  },
];

const Timeline = () => {
  const [filter, setFilter] = useState('all');

  const filteredTimeline = timelineData.filter(item =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <section id="timeline" className="py-5 bg-light">
      <Container>
        <h2 className="text-center py-5  title">Timeline</h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center ">
          <ButtonGroup>
            <Button variant={filter === 'all' ? 'primary' : 'outline-primary'} onClick={() => setFilter('all')}>All</Button>
            <Button variant={filter === 'experience' ? 'primary' : 'outline-primary'} onClick={() => setFilter('experience')}>Experience</Button>
            <Button variant={filter === 'education' ? 'primary' : 'outline-primary'} onClick={() => setFilter('education')}>Education</Button>
          </ButtonGroup>
        </div>

        {/* Timeline List */}
        <div className="timeline">
          {filteredTimeline.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <h6 className="text-muted">{item.org}</h6>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
    
  );
};

export default Timeline;
