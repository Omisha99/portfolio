import { Routes, Route } from 'react-router';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Camera from './components/Camera';

import ComingSoon from './components/ComingSoon';
import Playground from './components/Playground'; 


import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeLayout() {
  return (
    <>
      <Sidebar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      {/* <section id="gallery"><Gallery /></section> */}
      <section id="contact"><Contact /></section>
    </>
  );
}


function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/glitch" element={<Playground />} />
      <Route path="/glitch/digital_art" element={<Gallery />} />
      <Route path="/glitch/gai_art" element={<ComingSoon />} />
      <Route path="/glitch/photography" element={<Camera />} />
      <Route path="/glitch/opengl" element={<ComingSoon />} />
      {/* <Route path="/playground/ai" element={<AiGallery />} />
      <Route path="/playground/photos" element={<PhotographyGallery />} /> */}
    </Routes>

    </>
  )
}

export default App
