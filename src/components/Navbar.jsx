import { useEffect, useState } from 'react';
import { FaMoon, FaSun , FaFileDownload} from 'react-icons/fa';
import '../App.css';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

    const handleScroll = () => {
      const current = sections.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a href="#hero" className="nav-logo" aria-label="Go to hero section">
        <span className="nav-mark">OS</span>
        {/* <span className="nav-name">Omisha</span> */}
      </a>

      <div className="nav-right">
        <ul className="nav-links">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <li key={item.href}>
                <a className={activeId === id ? 'nav-link active' : 'nav-link'} href={item.href}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
         <a
            className="nav-resume"
            href="https://drive.google.com/file/d/1OLzuxHuMGDQI-GSjZzFP5DHu0Gz2DHAG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            title="View Resume"
          >
            Resume
          </a>

          
        {/* <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button> */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}
