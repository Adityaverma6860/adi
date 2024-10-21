import React from 'react';
import potenza from './technologies/potenza.jpg'; // Renamed the import to avoid conflict
import './technologies/technologies.css';
import Board from '../Board';
import Board2 from '../Board2';
import TestMoni from '../TestMoni';

export default function Potenza() { // Renamed the function
    return (
        <>
            <div className="VaserLipo-container">
                <div className="content">
                    <h2>POTENZA</h2>
                    <p>Experience the power of Potenza, a cutting-edge skin rejuvenation treatment that uses radiofrequency energy to revitalize your skin and reveal a youthful appearance. By addressing common skin concerns such as fine lines, wrinkles, acne scars, stretch marks, and uneven skin tone, Potenza offers a non-invasive or minimally invasive solution to help you achieve the smooth, radiant complexion you’ve always desired. Discover how this innovative treatment can transform your skin and enhance your natural beauty, bringing you one step closer to the flawless skin you deserve.</p>
                    {/* Add more information or details here */}
                </div>
                <div className="img-technologies">
                    <img src={potenza} alt="Morpheus8" height={350} />
                </div>
            </div>
            <Board />

            <div className="oneVideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c-j-rK2hTfc?si=qA-neQgVAkjqi2r-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/72eYssBWN8U?si=RWV_NaCVWsPIoSMr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Board2 />

            <TestMoni />
        </>
    );
}
