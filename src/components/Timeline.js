import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaPeopleGroup, FaTrophy } from 'react-icons/fa6';
import DevWallpaper from './DevWallpaper';
import './Timeline.css';

const sections = [
  {
    title: 'Experience',
    tone: 'experience',
    icon: <FaBriefcase />,
    items: [
      {
        title: 'CAM Developer',
        org: 'Clickatell',
        date: 'May 2024 - Oct 2024',
        desc: 'Built WhatsApp/SMS chatbots for enterprise clients and contributed to UI/UX improvements.'
      },
      {
        title: 'Web Developer Intern',
        org: 'Life Choices Studio',
        date: 'Apr 2022 - Jun 2022',
        desc: 'Developed responsive websites and collaborated on frontend delivery.'
      }
    ]
  },
  {
    title: 'Education',
    tone: 'education',
    icon: <FaGraduationCap />,
    items: [
      {
        title: 'WeThinkCode Software Engineering Programme',
        org: 'WeThinkCode',
        date: 'Sept 2025 - Present',
        desc: 'Project-based software engineering training focused on problem-solving and algorithms.'
      },
      {
        title: 'Bitcoin Diploma Course',
        org: 'Bitcoin Africa Story x My First Bitcoin',
        date: 'Sept - Oct 2025',
        desc: 'Covered Bitcoin fundamentals, wallets, money principles, mining, and practical BTC usage.'
      },
      {
        title: 'Systems Development National Certificate NQF5',
        org: 'CAPACITI / MICT SETA',
        date: 'Nov 2023 - Oct 2024',
        desc: 'Studied software development, systems thinking, professionalism, and technical problem solving.'
      },
      {
        title: 'Fullstack Web Dev Program',
        org: 'Ayoba Developer Program - UCT GSB Solution Space',
        date: 'Mar 2023 - Jul 2023',
        desc: 'Built with MEAN stack concepts, APIs, agile workflows, and microapp deployment.'
      }
    ]
  },
  {
    title: 'Community / Web3',
    tone: 'community',
    icon: <FaPeopleGroup />,
    items: [
      {
        title: 'Content & Community Support',
        org: 'Stellar Southern Africa Chapter',
        date: '2024 - Present',
        desc: 'Supporting developer-focused community events and producing ecosystem content.'
      },
      {
        title: 'Celo Africa DAO Contributor',
        org: 'Celo Africa DAO',
        date: 'Jul 2025 - Nov 2025',
        desc: 'Supported ecosystem growth through events, hackathons, and community activation.'
      },
      {
        title: 'Valora Ambassador',
        org: 'Valora',
        date: 'Nov 2024 - Nov 2025',
        desc: 'Promoted wallet adoption in South Africa through education and onboarding.'
      },
      {
        title: 'Crypto Fest Event Assistant',
        org: 'Bitcoin Events',
        date: 'Oct 2024',
        desc: 'Assisted with guest direction, event logistics, and stage support.'
      }
    ]
  }
];

const hackathons = [
  {
    result: '2nd Place',
    tone: 'gold',
    title: 'EthCapeTown Hackathon 2024',
    desc: 'Built ScholarFi, a decentralized learning dApp that rewards students.'
  },
  {
    result: '3rd Place',
    tone: 'blue',
    title: 'Ocean Hub Africa Hackathon 2025',
    desc: 'Built Blue Pulse for the Loco for Impact Challenge, connecting software with LoCo AUV devices for aquafarming.'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-5 bg-light">
      <DevWallpaper variant="timeline" />
      <Container>
        <h2 className="text-center py-5 title">Timeline</h2>

        <Row className="g-4">
          {sections.map((section) => (
            <Col lg={4} key={section.title}>
              <section className={`timeline-panel timeline-panel-${section.tone}`}>
                <div className="timeline-heading">
                  <span>{section.icon}</span>
                  <h3>{section.title}</h3>
                </div>

                <div className="timeline">
                  {section.items.map((item) => (
                    <motion.div
                      className="timeline-item"
                      key={`${item.title}-${item.date}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="timeline-icon">{section.icon}</div>
                      <div className="timeline-content">
                        <span className="timeline-date">{item.date}</span>
                        <h5>{item.title}</h5>
                        <h6 className="text-muted">{item.org}</h6>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </Col>
          ))}
        </Row>

        <section className="hackathon-proof">
          <div className="timeline-heading justify-content-center">
            <span><FaTrophy /></span>
            <h3>Hackathons</h3>
          </div>
          <Row className="g-3">
            {hackathons.map((item) => (
              <Col md={6} key={item.title}>
                <article className={`proof-card proof-card-${item.tone}`}>
                  <span>{item.result}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </article>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default Timeline;
