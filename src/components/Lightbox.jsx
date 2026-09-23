// /src/components/Lightbox.jsx
import { useEffect, useCallback } from 'react';
import './Lightbox.css';

// Fullscreen image viewer. Pass the array of image srcs, the index to open
// on, and onClose/onIndexChange callbacks - the parent owns the open state.
const Lightbox = ({ images, index, onClose, onIndexChange }) => {
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goPrev, goNext]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        &times;
      </button>

      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-arrow lightbox-arrow-prev"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            goPrev();
          }}
        >
          &#8249;
        </button>
      )}

      <img
        src={images[index]}
        alt=""
        className="lightbox-image"
        onClick={(event) => event.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-arrow lightbox-arrow-next"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
        >
          &#8250;
        </button>
      )}
    </div>
  );
};

export default Lightbox;
