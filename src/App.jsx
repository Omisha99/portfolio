import { Routes, Route, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Camera from './components/Camera';
import ComingSoon from './components/ComingSoon';
import Playground from './components/Playground';
import ProjectDetail from './components/ProjectDetail';
import ProjectGallery from './components/ProjectGallery';
import CareerTimeline from './components/CareerTimeline';
import ThemeToggle from './components/ThemeToggle';
import EasterEggPortal from './components/EasterEggPortal';


import AOS from 'aos';
import 'aos/dist/aos.css';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const savedTheme = window.localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function HomeLayout({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <section id="hero">
          <Hero theme={theme} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        {/* <section id="gallery"><Gallery /></section> */}

        <section id="contact">
          <Contact />
        </section>
      </main>

    </>
  );
}

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const targetFromState = location.state?.scrollTo;
    const targetFromHash = location.hash ? location.hash.replace('#', '') : null;
    const target = targetFromState || targetFromHash;

    if (!target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const scrollTimer = window.setTimeout(() => {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 100);

    return () => window.clearTimeout(scrollTimer);
  }, [location.pathname, location.hash, location.state]);

  return null;
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [isReturningFromGlitch, setIsReturningFromGlitch] = useState(false);
  const RETURN_TO_REALITY_MS = 1800;
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // useEffect(() => {
  //   if (!location.state?.fromGlitch) return undefined;

  //   setIsReturningFromGlitch(true);

  //   const timer = window.setTimeout(() => {
  //     setIsReturningFromGlitch(false);
  //     window.history.replaceState(
  //       {},
  //       document.title,
  //       `${window.location.pathname}${window.location.hash}`
  //     );
  //   }, RETURN_TO_REALITY_MS);

  //   return () => window.clearTimeout(timer);
  // }, [location.key, location.state]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'theme-transitioning',
      isThemeTransitioning
    );
  }, [isThemeTransitioning]);

  const toggleTheme = () => {
    setIsThemeTransitioning(true);
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

    window.setTimeout(() => {
      setIsThemeTransitioning(false);
    }, 560);
  };

  return (
  <>
    <ScrollToHashElement />

    {!isHomePage && (
      <ThemeToggle
        theme={theme}
        toggleTheme={toggleTheme}
        className="floating-theme-toggle"
      />
    )}

    <EasterEggPortal />

    {isReturningFromGlitch && (
      <div className="reality-return-transition reality-return-transition-global" aria-hidden="true">
        <div className="reality-return-scanlines" />
        <div className="reality-return-label">rebuilding reality...</div>
      </div>
    )}

    <Routes>
      <Route
        path="/"
        element={<HomeLayout theme={theme} toggleTheme={toggleTheme} />}
      />

      <Route path="/project-gallery" element={<ProjectGallery />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/career-timeline" element={<CareerTimeline />} />

      <Route path="/glitch" element={<Playground />} />
      <Route path="/glitch/digital_art" element={<Gallery />} />
      <Route path="/glitch/gai_art" element={<ComingSoon />} />
      <Route path="/glitch/photography" element={<Camera />} />
      <Route path="/glitch/opengl" element={<ComingSoon />} />
    </Routes>
  </>
);
}

export default App;
