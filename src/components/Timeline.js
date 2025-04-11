import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Timeline.css';

const timelineData = [
  {
    title: "CAM Developer",
    org: "Clickatell",
    icon: <FaBriefcase />,
    date: "May 2024 – Oct 2024",
    desc: "Built AI-powered chatbots and collaborated on UI/UX improvements for client engagement."
  },
  {
    title: "Web Developer Intern",
    org: "Life Choices Studio",
    icon: <FaBriefcase />,
    date: "Apr 2022 – Present",
    desc: "Developed responsive websites using modern frameworks. Created functional UIs with a focus on performance and user experience."
  },
  {
    title: "Fullstack Web Dev Program",
    org: "Ayoba Developer Program",
    icon: <FaGraduationCap />,
    date: "2023",
    desc: "MEAN Stack Web Development. Agile, APIs, and MicroApps Development."
  },
  {
    title: "Systems Dev Certificate",
    org: "CAPACITI (MICT SETA)",
    icon: <FaGraduationCap />,
    date: "Nov 2023 – Oct 2024",
    desc: "Software Development with a focus on professionalism, systems thinking, and web dev."
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-5 ">
      <Container>
        <h2 className="text-center py-5 mb-5 title">Timeline</h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon ">{item.icon}</div>
              <div className="timeline-content ">
                <span className="timeline-date">{item.date}</span>
                <h5 className="fw-bold">{item.title}</h5>
                <h6 className="text-muted">{item.org}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
