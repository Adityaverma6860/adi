import React from 'react'
import '../css/gifControls.css' //Import CSS

// import Images
import BBL1 from '../img/gif/BBL_Converted/BBL1.gif'
import BBL2 from '../img/gif/BBL_Converted/BBL2.gif'
import BBL3 from '../img/gif/BBL_Converted/BBL3.gif'
import BBL4 from '../img/gif/BBL_Converted/BBL4.gif'
import BBL5 from '../img/gif/BBL_Converted/BBL5.gif'
import BBL6 from '../img/gif/BBL_Converted/BBL6.gif'
import BBL7 from '../img/gif/BBL_Converted/BBL7.gif'

export default function BBL() {
    return (
        <>
            <div className="text-content">
                Brazilian Butt Lift
            </div>
            <div className="container-gif">
                <div className="gif">
                    <img src={BBL1} alt="GIF1"/>
                </div>
                <div className="gif">
                    <img src={BBL2} alt="GIF2"/>
                </div>
                <div className="gif">
                    <img src={BBL3} alt="GIF3"/>
                </div>
                <div className="gif">
                    <img src={BBL4} alt="GIF4"/>
                </div>
                <div className="gif">
                    <img src={BBL5} alt="GIF5"/>
                </div>
                <div className="gif">
                    <img src={BBL6} alt="GIF6"/>
                </div>
                {/* <div className="gif">
                    <img src={BBL6} alt="GIF7"/>
                </div> */}

            </div>
        </>
    )
}
