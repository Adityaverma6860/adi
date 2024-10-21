import React from 'react';
import './css/navbar2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Use free-solid-svg-icons for phone icon


export default function StickeyBar() {
  return (
    <>
    <div className="StickeyBar-container">
        <div className="StickeyBar">
        <h4>CALL FOR A FREE CONSULTATION</h4>  <h4><FontAwesomeIcon icon={faPhone} className='phone-icon' /> +1 424-666-1260
</h4>
        </div>
    </div>
    </>
  )
}
