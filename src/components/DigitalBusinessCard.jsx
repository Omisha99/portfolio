import { Link } from 'react-router';
import '../App.css';
import avatarDark from '../assets/avatar.png';
import avatarLight from '../assets/avatar-light.png';
import { FaLinkedin, FaGithub, FaFileDownload, FaGlobe } from 'react-icons/fa';


export default function DigitalBusinessCard() {
  return (
    <main className="digital-card-page">
      <section className="digital-card-shell" aria-label="Digital business card">
        <div className="digital-card-orb digital-card-orb-one" />
        <div className="digital-card-orb digital-card-orb-two" />

        <div className="digital-card-avatar-wrap">
            <div className="digital-card-avatar-stack">
                <img
                src= {avatarDark}
                alt="Pixel avatar of Omisha"
                className="digital-card-avatar digital-card-avatar-dark"
                />

                <img
                src={avatarLight}
                alt=""
                aria-hidden="true"
                className="digital-card-avatar digital-card-avatar-light"
                />
            </div>
            </div>

        {/* <p className="digital-card-kicker">Digital Business Card</p> */}

        <h1>Omisha Sapra</h1>

        <p className="digital-card-role">
          Machine Learning Engineer
        </p>

        <p className="digital-card-summary">
          {/* Building applied AI systems across LLM workflows, agentic systems,
          computer vision, generative AI, voice interfaces and production ML. */}
          AI Systems • LLMs • Computer Vision • Generative AI
        </p>

        {/* <div className="digital-card-tags" aria-label="Focus areas">
          <span>Applied AI</span>
          <span>LLMs</span>
          <span>Agentic Workflows</span>
          <span>Computer Vision</span>
          <span>Production ML</span>
        </div> */}

        

        <div className="digital-card-actions">
         
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
                href="https://omishasapra.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                title="Portfolio"
                >
                <FaGlobe />
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

          {/* <a href="mailto:YOUR_EMAIL_HERE">
            Email
          </a> */}
        </div>

        {/* <Link className="digital-card-home" to="/">
          ← Back to portfolio
        </Link> */}
      </section>
    </main>
  );
}