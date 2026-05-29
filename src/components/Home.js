import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import './Home.css';

const Home = () => {
  return (
    <header id="home" className="vh-100 text-dark d-flex align-items-center">
      <div className="text px-5 justify-content-between w-100">
        <div className="hero-content">
          <div className="hero-msg">
            <h3 className="display-3 text-light">Hi,</h3>
            <p className="text-warning">Welcome to my portfolio.</p>
            <h3 className="display-3 text-light">I'm a Web Developer & Web3 Enthusiast</h3>
            <h3>
              I design and build clean, practical solutions for real-world problems -
              from thoughtful front-ends to smart Web3 integrations.
            </h3>
          </div>

          <div className="hero-visual">
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Developer working at a laptop"
            />
          </div>
        </div>

        <div className="mt-4 hero-actions">
          <a href="#projects" className="btn btn-warning me-3">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline-light">
            Contact Me
          </a>
        </div>

        <hr className="text-warning" />

        <div className="socials">
          <div className="d-flex flex-row align-items-center gap-3">
            <a href="https://linkedin.com/in/bulelag" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={30} color="#0038b5" />
            </a>
            <a href="https://github.com/BulelaG" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} color="#000" />
            </a>
            <a href="https://x.com/BulelaGomoshe" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter size={30} color="#000" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
