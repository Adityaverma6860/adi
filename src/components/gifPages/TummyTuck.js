import React from 'react'
import '../css/gifControls.css' //Import CSS

import TT1 from '../img/gif/Tummy_Tuck_Converted/TT1.gif'
import TT2 from '../img/gif/Tummy_Tuck_Converted/TT2.gif'
import TT3 from '../img/gif/Tummy_Tuck_Converted/TT3.gif'
import TT4 from '../img/gif/Tummy_Tuck_Converted/TT4.gif'
import TT5 from '../img/gif/Tummy_Tuck_Converted/TT5.gif'
import TT6 from '../img/gif/Tummy_Tuck_Converted/TT6.gif'
import TT7 from '../img/gif/Tummy_Tuck_Converted/TT7.gif'
import TT8 from '../img/gif/Tummy_Tuck_Converted/TT8.gif'
import TT9 from '../img/gif/Tummy_Tuck_Converted/TT9.gif'
export default function TummyTuck() {
  return (
    <>
      <div className="text-content">
        Tummy Tuck   </div>
      <div className="container-gif">
        <div className="gif">
          <img src={TT1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={TT2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={TT3} alt="GIF3" />
        </div>
        <div className="gif">
          <img src={TT4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={TT5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={TT6} alt="GIF6" />
        </div>
        <div className="gif">
          <img src={TT7} alt="GIF7" />
        </div>
        <div className="gif">
          <img src={TT8} alt="GIF8" />
        </div>

        <div className="gif">
          <img src={TT9} alt="GIF9" />
        </div>
      </div>
    </>
  )
}
