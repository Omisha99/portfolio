import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import '../App.css';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { useCallback } from 'react';

export default function Contact() {
    const particlesInit = useCallback(async engine => {
      await loadLinksPreset(engine);
    }, []);
  
    return (
      <section className="contact-section" id="contact">
        <Particles
          id="contact-particles"
          className="particles-bg"
          init={particlesInit}
          options={{
            preset: 'links',
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
                resize: true
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 }
              }
            },
            particles: {
              color: { value: "#a78bfa" },
              links: {
                color: "#a78bfa",
                distance: 150,
                enable: true,
                opacity: 0.05,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.6
              }
            }
          }}
        />
  
      <div className="contact-content">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-text">
          Let’s connect — whether it’s collaboration, questions, or just geeking out on art & tech.
        </p>

        <div className="contact-links">
          <a href="https://linkedin.com/in/omisha-sapra/" target="_blank" rel="noopener noreferrer" title="Linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Omisha99" target="_blank" rel="noopener noreferrer" title="Github">
            <FaGithub />
          </a>
          <a href="mailto:" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://drive.google.com/file/d/1KvstXP2beLIyj9ptbu7pVHbAdSxfWuVP/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="View Resume">
            <FaFileDownload />
        </a>

        </div>
      </div>
    </section>
  );
}
