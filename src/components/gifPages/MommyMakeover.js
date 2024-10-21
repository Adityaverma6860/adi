import React from 'react'
import '../css/gifControls.css' //Import CSS

import MM1 from '../img/gif/Mommy_Makeover_Converted/MM1.gif'
import MM2 from '../img/gif/Mommy_Makeover_Converted/MM2.gif'
import MM3 from '../img/gif/Mommy_Makeover_Converted/MM3.gif'
import MM4 from '../img/gif/Mommy_Makeover_Converted/MM4.gif'
import MM5 from '../img/gif/Mommy_Makeover_Converted/MM5.gif'
import MM6 from '../img/gif/Mommy_Makeover_Converted/MM6.gif'
import MM7 from '../img/gif/Mommy_Makeover_Converted/MM7.gif'
import MM8 from '../img/gif/Mommy_Makeover_Converted/MM8.gif'
import MM9 from '../img/gif/Mommy_Makeover_Converted/MM9.gif'

export default function MommyMakeover() {
  return (
    <>
      <div className="text-content">
        Mommy Makeover</div>
      <div className="container-gif">
        <div className="gif">
          <img src={MM1} alt="GIF1" />
        </div>
        <div className="gif">
          <img src={MM2} alt="GIF2" />
        </div>
        <div className="gif">
          <img src={MM7} alt="GIF7" />
        </div>
        <div className="gif">
          <img src={MM4} alt="GIF4" />
        </div>
        <div className="gif">
          <img src={MM5} alt="GIF5" />
        </div>
        <div className="gif">
          <img src={MM6} alt="GIF6" />
        </div>
        <div className="gif">
          <img src={MM3} alt="GIF3" />
        </div>

        <div className="gif">
          <img src={MM8} alt="GIF8" />
        </div>

        <div className="gif">
          <img src={MM9} alt="GIF9" />
        </div>
      </div>
    </>
  )
}
