// src/App.js
import React from 'react';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
