import { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaFileDownload, FaArrowUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../App.css';

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message sent!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send. Try again!');
        }
      );
  };

  return (
    <section className="contact-section contact-minimal-section" id="contact">
      <div className="contact-minimal-shell">
        <div className="contact-minimal-left">
          <p className="section-kicker">Contact</p>
          <h2 className="contact-heading contact-minimal-heading">
            Let’s Chat
          </h2>

          <p className="contact-text contact-minimal-text">
            I’m open to AI/ML engineering roles, creative AI collaborations, product prototypes
            and conversations about turning ambitious ideas into useful systems.
          </p>

          <div className="contact-minimal-links" aria-label="Contact and profile links">
            <a
              href="https://linkedin.com/in/omisha-sapra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Omisha99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://drive.google.com/file/d/1OLzuxHuMGDQI-GSjZzFP5DHu0Gz2DHAG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              title="View Resume"
            >
              <FaFileDownload />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form contact-minimal-form">
          <div className="contact-form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name*" required />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Your email*" required />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" placeholder="What should we talk about?" />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Type your message..."
              required
            />
          </label>

          <div className="contact-form-footer">
            <button type="submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </div>
        </form>
      </div>

      <footer className="contact-footer-strip">
        <p>© {new Date().getFullYear()} Omisha Sapra</p>
        <a href="#hero" aria-label="Back to top">
          Back to top <FaArrowUp />
        </a>
      </footer>
    </section>
  );
}
