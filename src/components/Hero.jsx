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

        <h1 className="hero-title">Hi, I’m Omisha</h1>

        <p className="hero-tags">
          Machine Learning Engineer <span>•</span> Creative Technologist{' '}
          <span>•</span> Digital Artist <span>•</span> 3D Enthusiast
        </p>

        <p className="hero-description">
          Engineer at heart, artist by instinct — exploring the edges of machine
          learning to build adaptive systems that span pixels, prompts, voices,
          and real-world frontiers.
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
