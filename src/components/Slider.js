import React from 'react';
import './css/slider.css';

import img1 from './img/slider/img1.png'
import img2 from './img/slider/img2.png'
import img3 from './img/slider/img3.png'
import img4 from './img/slider/img4.png'

import img5 from './img/slider/img5.png'
import img6 from './img/slider/img6.png'
import img7 from './img/slider/img7.png'
import img8 from './img/slider/img8.png'
import img9 from './img/slider/img9.jpg'



export default function Slider() {
  return (
    <div className="slider-container">
      <div className="insurance-container">
        <h2 className="sliderHeading">Insurance</h2>
        <div className="insurance">
          <img src={img1} alt=""  />
          <img src={img2} alt=""  />
          <img src={img3} alt=""  />
          <img src={img4} alt=""  />
        </div>
      </div>
      <div className="finance-container">
        <h2 className="sliderHeading">Finance</h2>
        <div className="finance">
          {/* <img src={img5}  alt="" className='moment' /> */}
          <img src={img6} alt=""  />
          <img src={img7} alt="" className='patinent' />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
      </div>
    </div>
  );
}
