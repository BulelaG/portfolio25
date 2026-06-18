// src/App.js
import React, { useEffect, useState } from 'react';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import EventsGallery from './components/EventsGallery';
import './App.css';

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return 'midnight';
  }

  return localStorage.getItem('portfolio-theme') || 'midnight';
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
};

function App() {
  const [theme, setTheme] = useState(getStoredTheme);
  const isSolar = theme === 'solar';
  const nextThemeLabel = isSolar ? 'Midnight' : 'Solar';

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'midnight' ? 'solar' : 'midnight';
      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <MyNavbar
        activeTheme={theme}
        nextThemeLabel={nextThemeLabel}
        onThemeToggle={toggleTheme}
      />
      <Home />
      <About />
      <Projects />
      <Timeline />
      <EventsGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
