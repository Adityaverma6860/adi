import React from 'react';
import VaserLipoImage from './technologies/vaser_lipo.jpeg';
import './technologies/technologies.css'
import Board from '../Board'
import Board2 from '../Board2'
import TestMoni from '../TestMoni'


export default function VaserLipo() {
  return (
    <>
      <div className="VaserLipo-container">
        <div className="content">
          <h2>VaserLipo Technology</h2>
          <p>Welcome to Shape You Deserve, the ultimate destination for a beautifully sculpted body. Are you tired of stubborn fat that refuses to budge even with a healthy diet and regular exercise? Non surgical Vaser Liposuction is a revolutionary body contouring procedure that helps you achieve the dream figure you’ve always desired. Leveraging advanced ultrasound technology, non surgical vaser liposuction selectively targets and removes unwanted fat deposits with precision while preserving the surrounding tissues. Discover how this minimally invasive procedure can transform your body and boost your confidence, granting you the ultimate freedom to live your life to the fullest.
          </p>
          {/* Add more information or details here */}
        </div>
        <div className="img-technologies">
          <img src={VaserLipoImage} alt="VaserLipo-img" height={363} />
        </div>
      </div>      <Board />

      <div className="vaserlipo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A5lsrlygvZU?si=jk-YOl9RKKMIDF3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/n4T6ARiYMxo?si=wQsV9J6sXisXDLpS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <Board2 />

      <TestMoni />

    </>

  );
}
