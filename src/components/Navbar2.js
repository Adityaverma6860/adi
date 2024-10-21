import React from 'react'
import './css/navbar2.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import logo from './img/header/logo.png';

export default function Navbar2() {
    return (
        <div className="top-nav-container">
            <div className="top-container">
                <div className="left-top-container">
                    <img src={logo} alt="logo" height={100} />
                </div>
                <div className="right-top-container">
                    <p className='info'>WE'VE HELPED MORE THAN 30,000 PEOPLE LOOK THEIR BEST</p>
                    <p className='r-free'>
                        <FontAwesomeIcon icon={faFacebookF} className='top-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='top-icon' />
                        <FontAwesomeIcon icon={faTwitter}  className='top-icon'/>
                        <FontAwesomeIcon icon={faYoutube}  className='top-icon'/>REQUEST YOUR FREE CONSULT</p>
                    <p className='call'>CALL 909-788-2899</p>

                </div>
            </div>
        </div>
    )
}
