import React from 'react'
import '../css/gifControls.css' //Import CSS

import BL1 from '../img/gif/Brest_Lift_Converted/BL1.gif'
import BL2 from '../img/gif/Brest_Lift_Converted/BL2.gif'
import BL3 from '../img/gif/Brest_Lift_Converted/BL3.gif'
import BL4 from '../img/gif/Brest_Lift_Converted/BL4.gif'
import BL5 from '../img/gif/Brest_Lift_Converted/BL5.gif'
import BL6 from '../img/gif/Brest_Lift_Converted/BL6.gif'
import BL7 from '../img/gif/Brest_Lift_Converted/BL7.gif'
import BL8 from '../img/gif/Brest_Lift_Converted/BL8.gif'
import BL9 from '../img/gif/Brest_Lift_Converted/BL9.gif'


export default function BreastLift() {
  return (
    <>
      <div className="text-content">
        Breast Lift
      </div>
      <div className="container-gif">
        <div className="gif">
          <img src={BL1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={BL2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={BL3} alt="GIF3" />
        </div>
        <div className="gif">
          <img src={BL4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={BL5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={BL6} alt="GIF6" />
        </div>
        <div className="gif">
          <img src={BL7} alt="GIF7" />
        </div>
        <div className="gif">
          <img src={BL8} alt="GIF8" />
        </div>
        <div className="gif">
          <img src={BL9} alt="GIF9" />
        </div>
      </div>
    </>
  )
}
