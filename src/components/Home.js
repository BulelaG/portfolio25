import React, {  } from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import './Home.css';


const Home = () => {


  // useEffect(() => {
  //   const emoji = document.querySelector('.once-on-load');
  //   if (emoji) {
  //     emoji.addEventListener('animationend', () => {
  //       emoji.classList.remove('once-on-load');
  //     });
  //   }
  // }, []);

  return (
    <header className="vh-100 border border-warning border-bottom-0 text-dark d-flex align-items-center">
      <div className="text  px-5 justify-content-between w-100">

        {/* Right: Hero message */}
        <div className='hero-msg '>
        <h3 className="display-3 text-light">
         Hi <span className="wave-emoji once-on-load">👋🏽</span>,</h3>
           <p className="text-warning">Welcome to my portfolio.</p>
        <h3 className="display-3 text-light"> I’m a Web Developer & Web3 Enthusiast</h3>
        <h3>I design & build scalable, elegant solutions for real-world problems — from beautiful front-ends to smart Web3 integrations. </h3>
        </div>
        <hr className='text-warning'></hr>

        {/* socials */}
        <div className='socials'>
        <div className="d-flex flex-row align-items-center gap-3">
          <a href="https://linkedin.com/in/bulelag" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0038b5" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#000" />
          </a>
          <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} color="#000" />
          </a>
        </div>
        </div>

      </div>

    </header>
  );
};

export default Home;
