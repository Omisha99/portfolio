import GalleryGrid from "./GalleryGrid";
import comingSoon from "../data/ComingSoon"; 
import { useNavigate } from "react-router";
import './GlitchTheme.css';
import avatarGlitch from "../assets/glitchAvatar.png"; 


export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <section className="glitch-mode-gal">
    <button onClick={() => navigate("/glitch")} className="glitch-exit-gal">
    ← Back to Glitch
    </button>
    <h2 className="glitch-heading"> ✨ Prototype in the Lab</h2>

    <div
      className="avatar-fade-container">
      <img
        src={avatarGlitch}
        alt="Glitch Avatar"
        className={`avatar-img-g`}
      />
    </div>
  </section>
    
  );
}

