import React from 'react'
import '../css/gifControls.css' //Import CSS

import FC1 from '../img/gif/Face_And_Neck/FC1.gif'
import FC2 from '../img/gif/Face_And_Neck/FC2.gif'
import FC3 from '../img/gif/Face_And_Neck/FC3.gif'
import FC4 from '../img/gif/Face_And_Neck/FC4.gif'
import FC5 from '../img/gif/Face_And_Neck/FC5.gif'
import FC6 from '../img/gif/Face_And_Neck/FC6.gif'
import FC7 from '../img/gif/Face_And_Neck/FC7.gif'
import FC8 from '../img/gif/Face_And_Neck/FC8.gif'
import FC9 from '../img/gif/Face_And_Neck/FC9.gif'

export default function FaceAndNeck() {
  return (
    <>
      <div className="text-content">
        Face And Neck      </div>
      <div className="container-gif">
        <div className="gif">
          <img src={FC1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={FC2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={FC3} alt="GIF3" />
        </div>
        <div className="gif">
          <img src={FC4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={FC5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={FC6} alt="GIF6" />
        </div>
        <div className="gif">
          <img src={FC7} alt="GIF7" />
        </div>
        <div className="gif">
          <img src={FC8} alt="GIF8" />
        </div>
        <div className="gif">
          <img src={FC9} alt="GIF9" />
        </div>
      </div>
    </>
  )
}
