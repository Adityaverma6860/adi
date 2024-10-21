import React from 'react';
import '../css/testmoni.css'
import UserImage from '../img/home/user.png'

export default function TestMoni() {

    return (
        <div className="container testimon mt-4">
            <h1 className="heading">Customers Reviews</h1>
            <div className="box-container mb-4">
                <div className="box">
                    <p>I was very please with my results i got 2 days after my procedure. I was able to work the next day with tolerable soreness and no pain at all. I was awake and alert the whole time. I am very much happy that i did it. Looking forward to how my body will look once i am fully healed. Thank you Dr. Garg</p>
                    <div className="img-name">
                        <img src={UserImage} alt="" />

                        <span className='namee'>Melody Limbo</span>
                    </div>
                </div>
                <div className="box">
                    <p>Dr. Garg was amazing from my pre-op assessment to my follow-up post op. His bed side manner was impeccable. Dr. Garg gave me my dream body and restored my confidence.</p>
                    <div className="img-name">
                        <img src={UserImage} alt="" />
                        <span className='namee'>Jennae Alleah</span>
                    </div>
                </div>
                <div className="box">
                    <p>I just wanted to thank you all for the outstanding care you gave me. My lipo and bbl experience far exceeded all my expectations, and I could not be more satisfied with my results. You are such a talented and humble doctor and your staff is above average! I’m so happy with my new selfand your vaser liposuction surgery techniques.</p>
                    <div className="img-name">
                        <img src={UserImage} alt="" />
                        <span className='namee'>Lorena Sanchez</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
