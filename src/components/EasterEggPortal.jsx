import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import '../App.css';

const HOLD_DURATION_MS = 760;
const ROUTE_DELAY_MS = 2900;
const FINISH_DELAY_MS = 3900;

export default function EasterEggPortal() {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRef = useRef(null);
  const holdTimerRef = useRef(null);
  const routeTimerRef = useRef(null);
  const finishTimerRef = useRef(null);

  const [isHolding, setIsHolding] = useState(false);
  const [phase, setPhase] = useState('idle');

  const isGlitchRoute = location.pathname.startsWith('/glitch');
  const isTransitioning = phase === 'takeover' || phase === 'revealing';

  useEffect(() => {
    return () => {
      window.clearTimeout(holdTimerRef.current);
      window.clearTimeout(routeTimerRef.current);
      window.clearTimeout(finishTimerRef.current);
    };
  }, []);

  const clearHold = () => {
    window.clearTimeout(holdTimerRef.current);
    setIsHolding(false);
  };

  const startTakeover = () => {
    if (phase !== 'idle') return;

    buttonRef.current?.blur();
    setIsHolding(false);
    setPhase('takeover');

    routeTimerRef.current = window.setTimeout(() => {
      navigate('/glitch');
      setPhase('revealing');
    }, ROUTE_DELAY_MS);

    finishTimerRef.current = window.setTimeout(() => {
      setPhase('idle');
    }, FINISH_DELAY_MS);
  };

  const handlePointerDown = (event) => {
    if (phase !== 'idle') return;

    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setIsHolding(true);

    holdTimerRef.current = window.setTimeout(() => {
      startTakeover();
    }, HOLD_DURATION_MS);
  };

  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    clearHold();
  };

  const handlePointerLeave = () => {
    clearHold();
  };

  if (isGlitchRoute && !isTransitioning) {
    return null;
  }

  return (
    <>
      {!isGlitchRoute && (
        <div
          className={`portal-easter-egg portal-safe-takeover ${isHolding ? 'portal-is-holding' : ''} ${phase === 'takeover' ? 'portal-is-opening' : ''}`}
        >
          <button
            ref={buttonRef}
            type="button"
            className="portal-button"
            title="Hold to enter"
            aria-label="Hold to enter the hidden archive"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onContextMenu={(event) => event.preventDefault()}
          >
            <span className="portal-aura" />
            <span className="portal-ring">
              <span className="portal-ring-glint" />
              <span className="portal-inner">
                <span className="portal-void" />
                <span className="portal-core-swirl" />
              </span>
              <span className="portal-hold-progress" />
            </span>
            <span className="portal-orbit portal-orbit-one" />
            <span className="portal-orbit portal-orbit-two" />
            <span className="portal-particles" aria-hidden="true">
              {Array.from({ length: 14 }, (_, index) => (
                <span key={index} />
              ))}
            </span>
            <span className="portal-tooltip">hold to enter</span>
          </button>
        </div>
      )}

      {isTransitioning && (
        <div className={`takeover-transition ${phase === 'revealing' ? 'takeover-is-revealing' : ''}`} aria-hidden="true">
          <div className="takeover-vignette" />
          <div className="takeover-scanlines" />
          <div className="takeover-noise" />
          <div className="takeover-bars">
            {Array.from({ length: 8 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="takeover-console">
            <p className="takeover-kicker">ARCHIVE SIGNAL FOUND</p>
            <div className="takeover-line takeover-line-one">opening OS...</div>
            <div className="takeover-line takeover-line-two">detaching reality...</div>
            <div className="takeover-line takeover-line-three">booting hidden interface...</div>
            <div className="takeover-cursor" />
          </div>
        </div>
      )}
    </>
  );
}
