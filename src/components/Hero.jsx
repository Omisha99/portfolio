import '../App.css';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { useCallback, useState } from 'react';
import avatarNormal from '../assets/avatar.png'; 
import avatarGlitch from "../assets/glitchAvatar.png";
import { useNavigate } from "react-router";


export default function Hero() {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <section className="hero-section">
      <Particles
        id="tsparticles"
        className="particles-bg"
        init={particlesInit}
        options={{
          preset: 'links',
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: { value: "#a78bfa" },
            links: {
              color: "#a78bfa",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.2
            }
          }
        }}
      />
      

      <div className="hero-content">
      {/* <img src={avatar} alt="Avatar" className="hero-avatar" /> */}
      <div className="hero-avatar-wrapper">

        <div
        className="avatar-fade-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate("/glitch")}
        >
        <img
            src={avatarNormal}
            alt="Normal Avatar"
            className={`avatar-img fade-top ${hovered ? "fade-out" : ""}`}
        />
        <img
            src={avatarGlitch}
            alt="Glitch Avatar"
            className={`avatar-img fade-bottom ${hovered ? "fade-in" : ""}`}
        />
        </div>
    </div>

        <h1 className="hero-title">Hi, I’m Omisha Sapra</h1>
        <p className="hero-tags">
          Machine Learning Engineer • Creative Technologist • Digital Artist • 3D Enthusiast
        </p>
        <p className="hero-description">
          Engineer at heart, artist by instinct — exploring the edges of machine learning to build adaptive systems that span pixels, prompts, voices, and real-world frontiers.
        </p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
}
