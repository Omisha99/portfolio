import { useState } from 'react';
import '../App.css';
import art1 from '../assets/art/avatar.png';
import art2 from '../assets/art/avatar.png';
import art3 from '../assets/art/avatar.png';
// ...etc

const images = [
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-heading">Gallery</h2>

      <div className="scroll-gallery">
        {images.map((img, i) => (
          <div className="scroll-card" key={i} onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={img.title} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.title} />
          <p className="modal-caption">{selectedImage.title}</p>
        </div>
      )}
    </section>
  );
}
