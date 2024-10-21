import React from 'react'
import '../css/gifControls.css' //Import CSS

import BA1 from '../img/gif/Brestt_Augmentation_Converted/BA1.gif'
import BA2 from '../img/gif/Brestt_Augmentation_Converted/BA2.gif'
import BA3 from '../img/gif/Brestt_Augmentation_Converted/BA3.gif'
import BA4 from '../img/gif/Brestt_Augmentation_Converted/BA4.gif'
import BA5 from '../img/gif/Brestt_Augmentation_Converted/BA5.gif'
import BA6 from '../img/gif/Brestt_Augmentation_Converted/BA6.gif'
import BA7 from '../img/gif/Brestt_Augmentation_Converted/BA7.gif'
import BA8 from '../img/gif/Brestt_Augmentation_Converted/BA8.gif'
import BA9 from '../img/gif/Brestt_Augmentation_Converted/BA9.gif'


export default function BreastAugmentation() {
  return (
    <>
      <div className="text-content">
        Breast Augmentation
      </div>
      <div className="container-gif">
        <div className="gif">
          <img src={BA1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={BA2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={BA3} alt="GIF3" />
        </div>
        <div className="gif">
          <img src={BA4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={BA5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={BA6} alt="GIF6" />
        </div>
        <div className="gif">
          <img src={BA7} alt="GIF7" />
        </div>
        <div className="gif">
          <img src={BA8} alt="GIF8" />
        </div>
        <div className="gif">
          <img src={BA9} alt="GIF9" />
        </div>
      </div>
    </>
  )
}
