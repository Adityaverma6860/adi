import React from 'react';
import Morpheus8Image from './technologies/Morpheus8.jpg'; // Renamed the import to avoid conflict
import './technologies/technologies.css';
import Board from '../Board';
import Board2 from '../Board2';
import TestMoni from '../TestMoni';

export default function Morpheus8() { // Renamed the function
    return (
        <>
            <div className="VaserLipo-container">
                <div className="content">
                    <h2>Morpheus8</h2>
                    <p>Morpheus8 is an innovative, cutting-edge treatment that has revolutionized the world of skin rejuvenation and cosmetic enhancement. This minimally invasive, FDA-cleared procedure combines the power of micro-needling with radiofrequency technology to stimulate collagen production, tighten skin, and improve overall skin texture. The treatment offers remarkable results in reducing the appearance of fine lines, wrinkles, acne scars, and sagging skin. With its ability to penetrate deeper layers of the skin, skin tightening morpheus8 treatment provides long-lasting results with minimal downtime. Experience a youthful, refreshed appearance without invasive surgery with this game-changing skin tightening morpheus8 treatment.</p>
                    {/* Add more information or details here */}
                </div>
                <div className="img-technologies">
                    <img src={Morpheus8Image} alt="Morpheus8" height={300} />
                </div>
            </div>
            <Board />

            <div className="oneVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/krsS50F4nvQ?si=hPky1Km3YMxggPMB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Board2 />

            <TestMoni />
        </>
    );
}
