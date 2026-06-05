import '../App.css';
import avatarDark from '../assets/avatar.png';
import avatarLight from '../assets/avatar-light.png';

export default function Hero({ theme }) {
  const isLight = theme === 'light';

  return (
    <section className="hero-section">
      <div className="hero-content hero-centered">
        <div className="hero-avatar-shell" aria-label="Omisha avatar">
          <img
            src={avatarDark}
            alt="Omisha avatar"
            className={`hero-main-avatar avatar-theme-image avatar-dark ${
              isLight ? 'is-hidden' : 'is-visible'
            }`}
          />

          <img
            src={avatarLight}
            alt=""
            aria-hidden="true"
            className={`hero-main-avatar avatar-theme-image avatar-light ${
              isLight ? 'is-visible' : 'is-hidden'
            }`}
          />
        </div>

          {/* <p className="hero-eyebrow">Engineer at heart, Artist by instinct</p> */}
        <h1 className="hero-title">Hi, I’m Omisha</h1>

        <p className="hero-tags">
          AI/ML Engineer <span>•</span> LLMs & Agentic Workflows <span>•</span> Creative AI Systems <span>•</span> 3D Graphics
        </p>

        <p className="hero-description">
          Building applied AI systems across language, vision, voice and creative tools - 
          spanning LLM workflows, agentic and multimodal systems, generative tools and 3D production pipelines.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            View My Work
          </a>
          <a href="#contact" className="hero-button secondary">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
