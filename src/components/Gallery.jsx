import { useState } from 'react';
import '../App.css';

import art1 from '../assets/art/avatar.jpg';
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
    <section className="gallery-section" id="gallery" data-aos="fade-up" data-aos-delay="200">
      <h2 className="gallery-heading">Gallery</h2>

      {!selectedImage ? (
        <div className="scroll-gallery">
          {images.map((img, i) => (
            <div className="scroll-card" key={i} onClick={() => setSelectedImage(img)}>
              <img src={img.src} alt={img.title} />
            </div>
          ))}
        </div>
      ) : (
        <div className="expanded-image-wrapper" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.title} className="expanded-image" />
          {/* <p className="modal-caption">{selectedImage.title}</p> */}
          <button className="close-button" onClick={() => setSelectedImage(null)}>Go Back</button>
        </div>

        
      )}
    </section>
  );
}
