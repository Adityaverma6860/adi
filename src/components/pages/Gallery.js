import React from 'react';
import { Link } from 'react-router-dom';

import '../css/gallery.css';


import img1 from '../img/home/img1.jpg';
import img2 from '../img/home/img2.jpg';
import img3 from '../img/home/img3.jpg';
import img4 from '../img/home/img4.jpg';
import img5 from '../img/home/img5.jpg';
import img6 from '../img/home/img6.jpg';
import img7 from '../img/home/img7.jpg';
import img8 from '../img/home/img8.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

// import Testimonials from './Testimonials'
import TestMoni from './TestMoni';


export default function Gallery() {
  return (
    <>
      <div className="header-text"><b>Photo Gallery</b></div>
      <div className="subheader-text">Before and After Pictures</div>
      <div className="main-container">

      <div className="image-container">
          <Link to="/bbl">
            <img src={img5} alt="Image 5" className="image"/>
            <div className="image-name">BBL</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/mommy-makeover">
            <img src={img8} alt="Image 8" className="image"/>
            <div className="image-name">Mommy Makeover</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/tummy-tuck">
            <img src={img7} alt="Image 7" className="image"/>
            <div className="image-name">Tummy Tuck</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/breast-augmentation">
            <img src={img1} alt="Image 1" className="image"/>
            <div className="image-name">Breast Augmentation</div>
          </Link>
        </div>


       


        <div className="image-container">
          <Link to="/lipo-360">
            <img src={img3} alt="Image 3" className="image"/>
            <div className="image-name">Lipo 360</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/breast-lift">
            <img src={img2} alt="Image 2" className="image"/>
            <div className="image-name">Breast lift</div>
          </Link>
        </div>


        <div className="image-container">
          <Link to="/face-and-neck">
            <img src={img4} alt="Image 4" className="image"/>
            <div className="image-name">Face and Neck</div>
          </Link>
        </div>


        


        <div className="image-container">
          <Link to="/transgender">
            <img src={img6} alt="Image 6" className="image"/>
            <div className="image-name">Transgender</div>
          </Link>
        </div>
      </div>

      <TestMoni/>
    <div className="g-lerry">
       <div className="book-for-counsl">
        <Link to="/contact">
          <h2 className='pages-content-heading'>Book Your Consultation Now</h2>
          <button className='couns-btn'>Book Your Free Consultation        <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        </Link>
      </div>
    </div>
     
      {/* <Testimonials/> */}
      <div className="disclamer">
          <p>DISCLAIMER - Results of treatment and surgeries and processes outlined vary from person to person. The images presented might differ from their initial version  with possible elimination of personally identifiable details like tattoos and Jewellery etc. Some of the photographs have been modified by changing the backdrop color and picture size adjustments by cropping from their original version.</p>
        </div>
    </>
  );
}
