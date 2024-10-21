import React from 'react'
import '../css/gifControls.css' //Import CSS

import TS1 from '../img/gif/Transgender_Converted/TS1.gif'
import TS2 from '../img/gif/Transgender_Converted/TS2.gif'
import TS3 from '../img/gif/Transgender_Converted/TS3.gif'
import TS4 from '../img/gif/Transgender_Converted/TS4.gif'
import TS5 from '../img/gif/Transgender_Converted/TS5.gif'
import TS6 from '../img/gif/Transgender_Converted/TS6.gif'

export default function Transgender() {
  return (
    <>
      <div className="text-content">
        Transgender   </div>
      <div className="container-gif">
        <div className="gif">
          <img src={TS1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={TS2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={TS3} alt="GIF3" />
        </div>
        <div className="gif">
          <img src={TS4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={TS5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={TS6} alt="GIF6" />
        </div>
      </div>
    </>
  )
}
