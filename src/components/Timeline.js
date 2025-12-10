import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import './Timeline.css';

const timelineData = [
  // EXPERIENCE
  {
    title: "CAM Developer",
    org: "Clickatell",
    icon: <FaBriefcase />,
    date: "May 2024 – Oct 2024",
    desc: "Built WhatsApp/SMS chatbots for enterprise clients and collaborated on UI/UX improvements.",
    type: "experience"
  },
  {
    title: "Web Developer Intern",
    org: "Life Choices Studio",
    icon: <FaBriefcase />,
    date: "Apr 2022 – Jun 2022",
    desc: "Developed responsive websites and collaborated on modern frontend solutions.",
    type: "experience"
  },

  // VOLUNTEERING
  {
    title: "Celo Africa DAO Contributor",
    org: "Celo Africa DAO",
    icon: <FaBriefcase />,
    date: "Jul 2025 – Present",
    desc: "Driving ecosystem growth through events, hackathons, and community activation.",
    type: "volunteering"
  },
  {
    title: "Valora Ambassador",
    org: "Valora",
    icon: <FaBriefcase />,
    date: "Nov 2024 – Present",
    desc: "Promoting Valora wallet adoption in South Africa through education and onboarding.",
    type: "volunteering"
  },
  {
    title: "Content & Community Support",
    org: "Stellar Southern Africa Chapter",
    icon: <FaBriefcase />,
    date: "2024 – Present",
    desc: "Producing content and supporting developer-focused community events.",
    type: "volunteering"
  },
    {
    title: "Crypto Fest 2024 Event Assistant",
    org: "Bitcoin Events",
    icon: <FaBriefcase />,
    date: "Oct 2024",
    desc: "Welcomed & directed guests, assisted with event logistics and stage management.",
    type: "volunteering"
  },
  // EDUCATION
  {
    title: "WeThinkCode Software Engineering Programme",
    org: "WeThinkCode",
    icon: <FaGraduationCap />,
    date: "Sept 2025 – Present",
    desc: "Peer-led, project-based software engineering training with a strong focus on problem-solving and algorithms.",
    type: "education"
  },
  {
    title: "Bitcoin Diploma Course(7 weeks)",
    org: "Bitcoin Africa Story x My First Bitcoin",
    icon: <FaGraduationCap />,
    date: "Sept - Oct 2025",
    desc: "Completed a foundational Bitcoin course covering money principles, Bitcoin basics, wallets, mining, and practical BTC usage.",
    type: "education"
  },
  {
    title: "Bitcoin Lightning Network Bootcamp (5-Day)",
    org: "Free Africa Routing",
    icon: <FaGraduationCap />,
    date: "Feb 2024",
    desc: "Hands-on bootcamp covering Lightning Network channels, payments, nodes, and real-world implementation.",
    type: "education"
  },
  {
    title: "Systems Development National Certificate NQF5",
    org: "CAPACITI (MICT SETA)",
    icon: <FaGraduationCap />,
    date: "Nov 2023 – Oct 2024",
    desc: "Software development, systems thinking, professionalism, and technical problem solving.",
    type: "education"
  },
  {
    title: "Fullstack Web Dev Program",
    org: "Ayoba Developer Program - UCT GSB Solution Space ",
    icon: <FaGraduationCap />,
    date: "Mar 2023 – Jul 2023",
    desc: "MEAN stack development, APIs, agile workflows, and microapp deployment.",
    type: "education"
  },
  {
    title: "Life Choices Academy",
    org: "Web Development & Personal Development",
    icon: <FaGraduationCap />,
    date: "Sep 2021 – May 2022",
    desc: "MEVN stack foundations, professional development, teamwork, and real-world projects.",
    type: "education"
  }
];

const Timeline = () => {
  const [filter, setFilter] = useState('all');

  const filteredTimeline = timelineData.filter(item =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <section id="timeline" className="py-5 bg-light">
      <Container>
        <h2 className="text-center py-5 title">Timeline</h2>

        {/* FILTER BUTTONS */}
        <div className="d-flex justify-content-center mb-4">
          <ButtonGroup>
            <Button 
              variant={filter === 'all' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('all')}
            >
              All
            </Button>

            <Button 
              variant={filter === 'experience' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('experience')}
            >
              Experience
            </Button>

            <Button 
              variant={filter === 'education' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('education')}
            >
              Education
            </Button>

            <Button 
              variant={filter === 'volunteering' ? 'primary' : 'outline-primary'} 
              onClick={() => setFilter('volunteering')}
            >
              Volunteering
            </Button>
          </ButtonGroup>
        </div>

        {/* TIMELINE ITEMS */}
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
<br></br>

        {/* HACKATHON ACHIEVEMENTS */} 
<section className='timeline'>
<h3 className="text-3xl text-center mb-3 title">Hackathons</h3>
<ul className="space-y-2">
<li>
🥈 <strong>EthCapeTown Hackathon 2024 — 2nd Place</strong><br />
Built ScholarFi, a decentralized learning dApp that rewards students.
</li>
<li>
<strong>Ocean Hub Africa Hackathon 2025 - 3rd Place</strong><br></br> 
Loco for Impact Challenge - built "Blue Pulse" a solution for aquafarming using software and LoCo AUV devices
</li>
</ul>
</section>
<br></br>

{/* CERTIFICATIONS
<section className="space-y-3 timeline">
<h3 className="text-3xl text-center font-semibold title">Certifications</h3>
<ul className="space-y-2">
<li><strong>Bitcoin Diploma</strong> — Bitcoin Africa Story</li>
<li><strong>Lightning Network Bootcamp</strong> — Free Routing Africa</li>
<li>CAPACITI Systems Development NQF5 Certificate</li>
<li>Ayoba Full‑Stack Developer Certificate</li>
</ul>
</section> */}
      </Container>
    </section>
    
  );
};

export default Timeline;
