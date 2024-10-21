import React from 'react';
import Aveli_Cellulite_treatment from './technologies/Aveli_Cellulite_treatment.jpg';
import './technologies/technologies.css'
import Board from '../Board'
import Board2 from '../Board2'
import TestMoni from '../TestMoni'


export default function Aveli() {
    return (
        <>
            <div className="VaserLipo-container">
                <div className="content">
                    <h2>Aveli</h2>
                    <p>Cellulite is a widespread issue that affects both men and women, often causing feelings of self-consciousness and dissatisfaction with one’s appearance. Aveli is an innovative and minimally invasive cellulite treatment that aims to help individuals regain confidence in their bodies by significantly reducing the appearance of cellulite. This cutting-edge procedure employs advanced laser technology to target the root causes of cellulite, providing long-lasting and effective results. Aveli has gained popularity due to its ability to offer a safe, quick, and comfortable experience for clients seeking to improve their skin’s texture and appearance. By understanding the various factors contributing to cellulite development, such as genetics, hormones, and lifestyle choices, Aveli addresses these issues at their core, paving the way for smoother, more toned skin.</p>
                    {/* Add more information or details here */}
                </div>
                <div className="img-technologies">
                    <img src={Aveli_Cellulite_treatment} alt="VaserLipo-img" height={363} />
                </div>
            </div>
            <Board />

            {/* <div className="vaserlipo">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/A5lsrlygvZU?si=jk-YOl9RKKMIDF3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/n4T6ARiYMxo?si=wQsV9J6sXisXDLpS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div> */}

            <div className="oneVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7yNmzvQOoVo?si=_X3R-TOiTeuM3Uit" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Board2 />

            <TestMoni />

        </>

    );
}
