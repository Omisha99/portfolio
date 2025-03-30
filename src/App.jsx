import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import Skills from './components/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sidebar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </div>

    </>
  )
}

export default App
