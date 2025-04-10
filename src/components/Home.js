import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import './Home.css';

const Home = () => {
  return (
    <header className="vh-100 border border-danger text-dark d-flex align-items-center">
      <div className="text d-flex px-5 justify-content-between w-100">

        {/* Left: Social Links */}
      

        {/* Right: Hero message */}
        <div className='hero-msg '>
        <h3 className="display-3 text-light">
         Hi <span className="wave-emoji">👋🏽</span>,</h3>
           <p className="text-warning">Welcome to my portfolio.</p>
        <h3 className="display-3 text-light"> I’m a Web Developer & Web3 Enthusiast</h3>
        <h3>I build scalable, elegant solutions for real-world problems — from beautiful front-ends to smart Web3 integrations. </h3>
        </div>

      </div>
      <hr />
    </header>
  );
};

export default Home;
