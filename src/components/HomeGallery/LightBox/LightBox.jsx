import React, { useEffect } from 'react';
import './LightBox.css';

const Lightbox = ({ images, currentIndex, onClose, setCurrentIndex }) => {
  console.log('in lightbox')
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      {/* <div className='image-bg'> */}
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <img src={images[currentIndex]} alt="" className="lightbox-image" />
          <button className="lightbox-close" onClick={onClose}>&times;</button>
          <button className="lightbox-prev" onClick={prevImage}>&lsaquo;</button>
          <button className="lightbox-next" onClick={nextImage}>&rsaquo;</button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Lightbox;
