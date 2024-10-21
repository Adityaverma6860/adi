

import React, { useState } from 'react';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import s1 from '../img/SliderCreatives/s1.png';
import s2 from '../img/SliderCreatives/s2.png';
import s3 from '../img/SliderCreatives/s3.png';

const Slide = () => {
  const banners = [s1, s2, s3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? banners.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === banners.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slide-container">
      <button onClick={goToPrevSlide} className="slide-btn prev-btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="slide">
        <img src={banners[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <button onClick={goToNextSlide} className="slide-btn next-btn">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Slide;
