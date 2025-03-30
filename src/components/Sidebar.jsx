import { useEffect, useState } from 'react';
import { FaUser, FaBriefcase, FaFileDownload, FaProjectDiagram, FaImages, FaEnvelope, FaHome, FaCode } from 'react-icons/fa';
import '../App.css';
import profile from '../assets/avatar.png';


export default function Sidebar() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { threshold: 0.6 } // triggers when 60% of the section is visible
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src={profile} alt="Your Name" />
      </div>
      <ul className="sidebar-links">
        <li className={activeId === 'hero' ? 'sidebar-active' : ''}>
          <a href="#hero" title="Home"><FaHome /></a>
        </li>
        <li className={activeId === 'about' ? 'sidebar-active' : ''}>
          <a href="#about" title="About"><FaUser /></a>
        </li>
        <li className={activeId === 'skills' ? 'sidebar-active' : ''}>
          <a href="#skills" title="Skills"><FaUser /></a>
        </li>
        <li className={activeId === 'experience' ? 'sidebar-active' : ''}>
          <a href="#experience" title="Experience"><FaBriefcase /></a>
        </li>
        <li className={activeId === 'projects' ? 'sidebar-active' : ''}>
          <a href="#projects" title="Projects"><FaCode /></a>
        </li>
        <li className={activeId === 'gallery' ? 'sidebar-active' : ''}>
            <a href="#gallery" title="Gallery"><FaImages /></a>
        </li> 
        <li className={activeId === 'contact' ? 'sidebar-active' : ''}>
          <a href="#contact" title="Contact"><FaEnvelope /></a>
        </li>
        <li>
        <a href="https://drive.google.com/file/d/1KvstXP2beLIyj9ptbu7pVHbAdSxfWuVP/view?usp=sharing" title="Resume" target="_blank" rel="noopener noreferrer">
            <FaFileDownload />
        </a>
        </li>
      </ul>
    </div>
  );
}
