import React from 'react'
import '../css/gifControls.css' //Import CSS

import Lipo1 from '../img/gif/Lipo_Converted/Lipo1.gif'
import Lipo2 from '../img/gif/Lipo_Converted/Lipo2.gif'
import Lipo3 from '../img/gif/Lipo_Converted/Lipo3.gif'
import Lipo4 from '../img/gif/Lipo_Converted/Lipo4.gif'
import Lipo5 from '../img/gif/Lipo_Converted/Lipo5.gif'
import Lipo6 from '../img/gif/Lipo_Converted/Lipo6.gif'

export default function Lipo360() {
  return (
    <>
    <div className="text-content">
        Lipo 360
      </div>
      <div className="container-gif">
        <div className="gif">
          <img src={Lipo1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={Lipo2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={Lipo3} alt="GIF3" />
        </div>
        <div className="gif">
          <img src={Lipo4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={Lipo5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={Lipo6} alt="GIF6" />
        </div>
      </div>
    </>
  )
}
