import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import './Home.css';

const Home = () => {
  return (
    <header id="home" className="vh-100 text-dark d-flex align-items-center">
      <div className="text px-5 justify-content-between w-100">
        <div className="hero-content">
          <div className="hero-msg">
            <h3 className="display-3 text-light">Hi, I'm Bulela.</h3>
             <br/>  
            <h3 className="text-light">
                I build websites, online stores & MVPs 
                for small to medium businesses, 
                serving clients across South Africa..
            </h3>
            <p className="text-warning fs-4 fw-semibold">
               From R2,500.
            </p>
            <br/>  
            <p className="text-warning mt-2 fs-6">
            📍Based in Cape Town &nbsp;|&nbsp; ⚡ Fast turnaround
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Developer working at a laptop"
            />
          </div>
        </div>

        <div className="mt-4 hero-actions"><a
          
            href="https://wa.me/27672169078?text=Hi%20Bulela%2C%20I%20need%20a%20website%20or%20chatbot%20for%20my%20business"
            className="btn btn-outline-success me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="me-2" />
            Get a Free Quote
          </a>

          <a href="#projects" className="btn btn-outline-warning me-3">
            See My Work
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