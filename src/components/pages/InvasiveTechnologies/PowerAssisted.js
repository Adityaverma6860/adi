import React from 'react';
import pal from './technologies/pal.png';
import './technologies/technologies.css'
import Board from '../Board'
import Board2 from '../Board2'
import TestMoni from '../TestMoni'


export default function PowerAssisted() {
    return (
        <>
            <div className="VaserLipo-container">
                <div className="content">
                    <h2>POWER ASSISTED LIPOSUCTION (PAL)</h2>
                    <p>Power-assisted liposuction (PAL) is a cutting-edge body contouring procedure that utilizes a vibrating tipped cannula to break down fat cells more efficiently, making removing them from the body easier. This innovative technique allows for greater precision and more effective results when compared to traditional liposuction methods, often leading to a smoother, more defined appearance. We’re here to guide you through the process if you’re considering power-assisted liposuction to help you sculpt your ideal physique.</p>
                    {/* Add more information or details here */}
                </div>
                <div className="img-technologies">
                    <img src={pal} alt="pal" height={400} />
                </div>
            </div>
            <Board />

            <div className="oneVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zn7iosrGqLg?si=wg_dKyK6AHBP7kGl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Board2 />

            <TestMoni />

        </>

    );
}
