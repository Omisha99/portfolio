import { useState } from 'react';
import '../App.css';

import art1 from '../assets/art/art1.png';
import art2 from '../assets/art/art2.png';
import art3 from '../assets/art/art3.png';
import art4 from '../assets/art/art4.png';
import art5 from '../assets/art/art5.png';
import art6 from '../assets/art/art6.png';
import art7 from '../assets/art/art7.png';
import art8 from '../assets/art/art8.png';
import art9 from '../assets/art/art9.png';
import art10 from '../assets/art/art10.png';
import art11 from '../assets/art/art11.png';
import art12 from '../assets/art/art12.png';
import art13 from '../assets/art/art13.png';
import art14 from '../assets/art/art14.png';
import art15 from '../assets/art/art15.png';
import art16 from '../assets/art/art16.png';
import art17 from '../assets/art/art17.png';
import art18 from '../assets/art/art18.png';
import art19 from '../assets/art/art19.png';
import art20 from '../assets/art/art20.png';
import art21 from '../assets/art/art21.png';
import art22 from '../assets/art/art22.png';
import art23 from '../assets/art/art23.png';
import art24 from '../assets/art/art24.png';
// ...etc

const images = [
  { src: art1, title: 'Artwork 1' },
  { src: art2, title: 'Artwork 2' },
  { src: art3, title: 'Artwork 3' },
  { src: art4, title: 'Artwork 4' },
  { src: art5, title: 'Artwork 5' },
  { src: art6, title: 'Artwork 6' },
  { src: art7, title: 'Artwork 7' },
  { src: art8, title: 'Artwork 8' },
  { src: art9, title: 'Artwork 9' },
  { src: art10, title: 'Artwork 10' },
  { src: art11, title: 'Artwork 11' },
  { src: art12, title: 'Artwork 12' },
  { src: art13, title: 'Artwork 13' },
  { src: art14, title: 'Artwork 14' },
  { src: art15, title: 'Artwork 15' },
  { src: art16, title: 'Artwork 16' },
  { src: art17, title: 'Artwork 17' },
  { src: art18, title: 'Artwork 18' },
  { src: art19, title: 'Artwork 19' },
  { src: art20, title: 'Artwork 20' },
  { src: art21, title: 'Artwork 21' },
  { src: art22, title: 'Artwork 22' },
  { src: art23, title: 'Artwork 23' },
  { src: art24, title: 'Artwork 24' },
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
