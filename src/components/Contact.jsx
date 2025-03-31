import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import '../App.css';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { useCallback, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
    const particlesInit = useCallback(async engine => {
      await loadLinksPreset(engine);
    }, []);


  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send. Try again!");
        }
      );
  };
  
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
          {/* <a href="mailto:" title="Email">
            <FaEnvelope />
          </a> */}
          <a href="https://drive.google.com/file/d/1KvstXP2beLIyj9ptbu7pVHbAdSxfWuVP/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="View Resume">
            <FaFileDownload />
        </a>

        </div>
      <section className="contact-section-2" id="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        <p className="form-status">{status}</p>
      </form>
    </section>
      </div>
    </section>
    
  );
}
