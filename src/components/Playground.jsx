import { useEffect, useRef } from 'react';
import './GlitchTheme.css';
import avatarGlitch from "../assets/glitchAvatar.png";
import avatarNormal from "../assets/avatar.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import glitchZap from '../assets/zap.mp3'; 
import GalleryGrid from "../components/GalleryGrid";
import digitalArt from "../data/DigitalArt";

export default function Playground() {

    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
  
  useEffect(() => {
    const audio = new Audio(glitchZap);
    audio.volume = 0.3;
    audio.play();
  }, []);
const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const drawGlitch = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const w = 30 + Math.random() * 100;
      const h = 5 + Math.random() * 20;
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.08)`;
      ctx.fillRect(x, y, w, h);
    }

    requestAnimationFrame(drawGlitch);
  };

  drawGlitch();

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <section className="glitch-mode">
    <canvas ref={canvasRef} className="glitch-canvas" />
        <div className="glitch-strings">
        {Array.from({ length: 30 }).map((_, i) => (
            <div
            key={i}
            className="glitch-string"
            style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 5}s`,
                background: `linear-gradient(to bottom, transparent, hsla(${Math.random() * 360}, 100%, 70%, 0.2), transparent)`
            }}
            />
        ))}
        </div>
        <div className="hero-avatar-wrapper">
        <div
              className="avatar-fade-container"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => navigate("/")}
            >
              <img
                src={avatarGlitch}
                alt="Glitch Avatar"
                className={`avatar-img-g fade-top ${hovered ? "fade-out" : ""}`}
              />
              <img
                src={avatarNormal}
                alt="Avatar"
                className={`avatar-img-g fade-bottom ${hovered ? "fade-in" : ""}`}
              />
            </div>
        </div>

      <h1 className="glitch-heading">⧉ Glitch Init</h1>
      <p className="glitch-sub">
      <h2 className="glitch-sub-heading">Welcome to the corrupted timeline.</h2>
        Home to generative art, shader hacks, and captured light - reality may not render correctly.
        {/* This is where my experiments, generative art,
        and prompt engineering skills live. */}
      </p>

      <div className="glitch-grid">
        <div className="glitch-card">
          <h3>🎨 Generative Art</h3>
          <p>Gallery of AI art, live sketches & procedural visuals</p>
          <button onClick={() => navigate("/playground/gai_art")} className="glitch-mini-but">View Gallery</button>
        </div>

        <div className="glitch-card">
          <h3>👁️ Interactive Computer Graphics</h3>
          <p>OpenGL/WebGL experiments, shaders, and visual tweaks</p>
          <button onClick={() => navigate("/playground/opengl")} className="glitch-mini-but">Boot Graphics</button>
        </div>

        <div className="glitch-card">
          <h3>📸 Photography</h3>
          <p>Nature, architecture, and travel moments frozen in time</p>
          <button onClick={() => navigate("/playground/photography")} className="glitch-mini-but">Enter Memory</button>
        </div>
        
        <div className="glitch-card">
          <h3>🖼️ Digital Art</h3>
          <p>Hand-drawn sketches, stylized pieces</p>
          <button onClick={() => navigate("/playground/digital_art")} className="glitch-mini-but">Render Artbook</button>
        </div>
      </div>



      <button onClick={() => window.location.href = "/"} className="glitch-exit">
        🚪 Escape Back To Reality
      </button>
    </section>
  );
}
