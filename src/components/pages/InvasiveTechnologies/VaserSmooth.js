import React from 'react';
import VaserSmoothImage from './technologies/VaserSmooth.jpg'; // Correct import statement for the image file
import './technologies/technologies.css'
import Board from '../Board';
import Board2 from '../Board2';
import TestMoni from '../TestMoni';

export default function VaserSmooth() {
    return (
        <>
            <div className="VaserLipo-container">
                <div className="content">
                    <h2>VASER SMOOTH</h2>
                    <p>Utilizing innovative ultrasound technology, Vaser Smooth efficiently breaks down the fibrous bands that cause the dimpling effect on the skin’s surface while simultaneously promoting collagen production for a smoother, more toned appearance. With minimal downtime and reduced side effects compared to traditional liposuction, Vaser Smooth is a game-changer in the world of body contouring and cellulite reduction, giving you the confidence to embrace your body’s natural shape with ease.</p>
                    {/* Add more information or details here */}
                </div>
                <div className="img-technologies">
                    <img src={VaserSmoothImage} alt="VaserSmooth" height={363} /> {/* Use the imported image variable */}
                </div>
            </div>
            <Board />
            {/* <Board2 /> */}
            <TestMoni />
        </>
    );
}
