import React, { useEffect } from 'react'
import '../css/testmoni.css';
import { Link } from "react-router-dom";
import AOS from "aos";


export default function Board() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="board-container" data-aos="zoom-in">
        <div className="board">
          <h4>Dr. Garg is a Diplomat of American Board of Cosmetic Surgery</h4>
          <Link to="https://www.americanboardcosmeticsurgery.org/doctors/ashu-garg-md/" target='_blank'><button className='btn '>View More</button></Link>
        </div>
      </div>
    </>
  )
}
