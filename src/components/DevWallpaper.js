import React from 'react';
import {
  FaBootstrap,
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaServer,
  FaTerminal
} from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTypescript, SiVercel } from 'react-icons/si';
import './DevWallpaper.css';

const iconSets = {
  about: [FaReact, SiJavascript, FaNodeJs, FaGithub, FaCode, FaGitAlt, FaTerminal, FaDatabase, FaCloud, FaLaptopCode, SiTypescript, FaServer],
  projects: [FaReact, FaHtml5, FaCss3Alt, FaBootstrap, SiMongodb, SiVercel, FaServer, FaCode, FaGithub, SiJavascript, FaDatabase, FaCloud],
  timeline: [FaGitAlt, FaGithub, SiTypescript, FaNodeJs, SiJavascript, FaReact, FaTerminal, FaCloud, FaDatabase, FaCode, SiVercel, SiMongodb]
};

const DevWallpaper = ({ variant = 'about' }) => {
  const icons = iconSets[variant] || iconSets.about;
  const graphicTypes = ['ring', 'window', 'line', 'node', 'bracket', 'grid', 'orbit', 'spark', 'stack'];

  return (
    <div className={`dev-wallpaper dev-wallpaper-${variant}`} aria-hidden="true">
      {icons.map((Icon, index) => (
        <span className={`dev-wallpaper-icon icon-${index + 1}`} key={`${variant}-${index}`}>
          <Icon />
        </span>
      ))}
      {graphicTypes.map((type, index) => (
        <span
          className={`dev-wallpaper-graphic graphic-${type} graphic-${index + 1}`}
          key={`${variant}-${type}`}
        />
      ))}
    </div>
  );
};

export default DevWallpaper;
