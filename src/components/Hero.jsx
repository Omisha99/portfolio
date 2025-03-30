import '../App.css';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { useCallback } from 'react';
import avatar from '../assets/avatar.png'; 

export default function Hero() {
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
      <img src={avatar} alt="Avatar" className="hero-avatar" />

        <h1 className="hero-title">Hi, I’m [Your Name]</h1>
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
