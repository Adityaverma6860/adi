import React from 'react';
import './css/card.css'; // Rename the CSS import to avoid conflict
import { Link } from 'react-router-dom';
//Import Images
import img1 from './img/home/back.jpg';
import img2 from './img/home/face.jpg';
import img3 from './img/home/breast.jpg';
import img4 from './img/home/lips.jpg';

export default function CardComponent() { // Rename the function name
    return (
        <>
            <div className="containerre">
                <div className="box-container">
                    <div className="box">
                        <img src={img1} alt="" />
                        <h2 className="text1">Body</h2>
                        <div className="shadow">
                            <ul className="content1 lkn-btn">
                                <li><Link to="/tummy-tuck-procedure">Tummy Tuck</Link></li>
                                <li><Link to="/liposuction">Lipsuction</Link></li>
                                <li><Link to="/mommy-make-over-procedure">Mummy Makeover</Link></li>
                                <li><Link to="/brazilian-butt-lift">Brazilian butt lift- BBL</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="box">
                        <img src={img2} alt="" />
                        <h2 className="text1">Face</h2>
                        <div className="shadow">
                            <ul className="content1 lkn-btn">
                                <li><Link to="/eyelid-lift-blepharoplasty">Eyelid Lift- Blepharoplasty</Link></li>
                                <li><Link to="/facelift-surgery">Face Lift</Link></li>
                                <li><Link to="/buccal-fat-removal">Buccal Fat Removal</Link></li>
                                <li><Link to="/neck-chin-liposuction">Neck and Chin Liposuction</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="box box2">
                        <img src={img3} alt="" />
                        <h2 className="text1">Breasts</h2>
                        <div className="shadow">
                            <ul className="content1 lkn-btn">
                                <li><Link to="/breast-augmentation-surgery">Breast Augmentation</Link></li>
                                <li><Link to="/breast-lift-procedure">Breast Lift</Link></li>
                                <li><Link to="/breast-reduction-surgery">Breast Reduction</Link></li>
                                <li><Link to="/breast-revision-surgery">Breast Revision Surgery</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="box box1 box44">
                        <img src={img4} alt="" />
                        <h2 className="text1 text11">Non-Surgical</h2>
                        <div className="shadow">
                            <ul className="content1 lkn-btn">
                                <li><Link to="/skin-rejuvenation">Botox and Fillers</Link></li>
                                <li><Link to="/morpheus8-technology">Morpheus 8</Link></li>
                                <li><Link to="/potenza-technology">Potenza</Link></li>
                                <li><Link to="/skin-rejuvenation">Skin Aesthetic Procedure</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
