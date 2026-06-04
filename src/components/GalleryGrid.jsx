// src/components/GalleryGrid.jsx
import { useState } from "react";
import "./GlitchTheme.css";
import { useNavigate } from "react-router";


export default function GalleryGrid({ title, images, id }) {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="glitch-mode-gal" id={id}>
      <button onClick={() => navigate("/glitch")} className="glitch-exit-gal">
      Back to Glitch 👈
      </button>
      <h2 className="glitch-heading">{title}</h2>

      <div className="art-grid">
        {images.map((img, i) => (
          <div
            className="art-card"
            key={i}
            onClick={() => setSelected(img)}
            title={img.title}
          >
            <img src={img.src} alt={img.title} />
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/glitch")} className="glitch-exit-gal">
      Back to Glitch 👈
      </button>

      {selected && (
        <div className="gallery-modal" onClick={() => setSelected(null)}>
          <img src={selected.src} alt={selected.title} />
          <button className="close-button" onClick={() => setSelected(null)}>
            ✖
          </button>
        </div>
      )}
    </section>
  );
}
