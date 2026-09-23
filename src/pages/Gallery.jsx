// /src/pages/Gallery.jsx
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import FadeIn from '../components/FadeIn';
import './Gallery.css';

// Drop real photos in public/assets/ with these filenames (or rename here).
const GALLERY_IMAGES = [
  '/assets/gallery-1.png',
  '/assets/gallery-2.png',
  '/assets/gallery-3.png',
  '/assets/gallery-4.png',
  '/assets/gallery-5.png',
  '/assets/gallery-6.png',
  '/assets/gallery-7.png',
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="gallery-page">
      <div className="gallery-page-inner">
        <h1 className="gallery-page-title">Gallery</h1>

        <FadeIn>
          <div className="gallery-page-copy">
            <p>
              A few shots of the pub, the beer garden, The Stables function
              room and some of our events, basically a look at the good
              times we get up to at The Boat &amp; Horses.
            </p>
          </div>

          <div className="gallery-page-grid">
            {GALLERY_IMAGES.map((src, index) => (
              <button
                type="button"
                className="gallery-page-item"
                key={src}
                onClick={() => setLightboxIndex(index)}
              >
                <img src={src} alt="The Boat and Horses" loading="lazy" />
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default Gallery;
