import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './GlitchTheme.css';
import avatarGlitch from '../assets/glitchAvatar.png';
import avatarNormal from '../assets/avatar.png';
import glitchZap from '../assets/zap.mp3';

const RETURN_COVER_DELAY_MS = 1800;

export default function Playground() {
  const [hovered, setHovered] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const returnTimerRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(glitchZap);
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Browsers can block autoplay; the transition should continue silently.
    });
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(returnTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const sizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const drawGlitch = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 20; i += 1) {
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

      animationFrameId = window.requestAnimationFrame(drawGlitch);
    };

    sizeCanvas();
    drawGlitch();

    window.addEventListener('resize', sizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', sizeCanvas);
    };
  }, []);

  const handleReturnToReality = () => {
    if (isReturning) return;

    setIsReturning(true);

    returnTimerRef.current = window.setTimeout(() => {
      navigate('/', {
        state: { fromGlitch: true },
      });
    }, RETURN_COVER_DELAY_MS);
  };

  return (
    <section className="glitch-mode">
      <canvas ref={canvasRef} className="glitch-canvas" />

      <div className="glitch-strings">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="glitch-string"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
              background: `linear-gradient(to bottom, transparent, hsla(${Math.random() * 360}, 100%, 70%, 0.2), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="hero-avatar-wrapper">
        <div
          className="avatar-fade-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleReturnToReality}
        >
          <img
            src={avatarGlitch}
            alt="Glitch Avatar"
            className={`avatar-img-g fade-top ${hovered ? 'fade-out' : ''}`}
          />
          <img
            src={avatarNormal}
            alt="Avatar"
            className={`avatar-img-g fade-bottom ${hovered ? 'fade-in' : ''}`}
          />
        </div>
      </div>

      <h1 className="glitch-heading">⧉ Glitch Init</h1>

      <div className="glitch-sub">
        <h2 className="glitch-sub-heading">Welcome to the corrupted timeline.</h2>
        <p>
          Home to generative art, shader hacks, and captured light — reality may not render correctly.
        </p>
      </div>

      <div className="glitch-grid">
        <div className="glitch-card">
          <h3>🎨 Generative Art [Coming Soon...]</h3>
          <p>Gallery of AI art, live sketches & procedural visuals</p>
          <button onClick={() => navigate('/glitch/gai_art')} className="glitch-mini-but">View Gallery</button>
        </div>

        <div className="glitch-card">
          <h3>👁️ Interactive Computer Graphics [Coming Soon...]</h3>
          <p>OpenGL/WebGL experiments, shaders, and visual tweaks</p>
          <button onClick={() => navigate('/glitch/opengl')} className="glitch-mini-but">Boot Graphics</button>
        </div>

        <div className="glitch-card">
          <h3>📸 Photography</h3>
          <p>Nature, architecture, and travel moments frozen in time</p>
          <button onClick={() => navigate('/glitch/photography')} className="glitch-mini-but">Enter Memory</button>
        </div>

        <div className="glitch-card">
          <h3>🖼️ Digital Art</h3>
          <p>Hand-drawn sketches, stylized pieces</p>
          <button onClick={() => navigate('/glitch/digital_art')} className="glitch-mini-but">Render Artbook</button>
        </div>
      </div>

      <button onClick={handleReturnToReality} className="glitch-exit" disabled={isReturning}>
        🚪 Escape Back To Reality
      </button>

      {isReturning && (
        <div className="reality-return-transition reality-return-transition-local" aria-hidden="true">
          <div className="reality-return-scanlines" />
          <div className="reality-return-label">rebuilding reality...</div>
        </div>
      )}
    </section>
  );
}
