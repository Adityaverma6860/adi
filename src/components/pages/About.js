import React from 'react'
import { Link } from 'react-router-dom';
import '../css/contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import doctor from '../img/home/doctor.png'
import doBanner from '../img/home/doBanner.png'

export default function About() {
  return (
    <>


    <div className="about-container">
        <div className="doctor-detaills">
           <div className="doctor-img">
           <img src={doctor} alt=""  height={500}/>
           </div>
            <h1 style={{textAlign: "center"}}>Meet Dr. Garg</h1><br />
            <p>Dr. Ashu Garg received his medical degree from one of India’s oldest and recognized Medical Schools located in Agra “the City of Taj Mahal” in India. He specializes in Cosmetic surgery and aesthetic procedures. Dr. Garg is a Diplomat of American Board of Cosmetic Surgery</p>
            <p>Dr. Garg pursued a formal residency training in Surgery with specialized experience in Plastic Surgery in the western region of India. Additionally, he honed his great surgical skills while doing extensive oncological surgical procedures at Tata Memorial Cancer Center, Mumbai’s highly reputed and advanced medical center well known throughout the Asian continent.</p>
            <p>After moving to the USA, Dr. Garg did clinical research in Vascular Surgery at the prestigious Massachusetts General Hospital of Harvard University in Boston and published several papers in the Journal of Vascular surgery. Afterwards Dr. Garg did formal surgery training at Chicago and gained additional experience in radiology at University of Oklahoma Health Science Center.</p>
            <p>Dr. Garg did a formal fellowship training in Cosmetic Surgery  in Seattle, WA, where he further developed the art of liposculpture, body contouring, facial cosmetic procedures and complex transgender surgeries.</p>
            <p>Dr. Garg advocates the best cosmetic outcomes for his patients utilizing his expertise in modern liposculpture along with combination of latest innovative cosmetic techniques. His expertise in scar healing and wound management brings best cosmetic outcomes. He is an active member of American Academy of Cosmetic Surgery.</p>
            <p>Dr. Garg’s other academic clinical expertise is in pre- and post-surgical assessment and follow ups with diagnostic imaging. He is also a member of WPATH “World Professional Association for Transgender Health”.</p>
        </div>

       <div className="philosophy-container">
          <div className="philosophy">
            <div className="p-content">
              <h2 className='pages-content-heading'>Our Philosophy</h2>
              <p>Compassionate care and access-ibility are essential to fostering strong patient relationships, and we are committed to being there for our patients every step of the way. We strive to create a safe and comfortable environment where our patients can feel at ease and confident in the care they are receiving. With our unwavering commitment to excellence and a patient-centric approach, we are confident that our practice is the right choice for anyone seeking a caring and trustworthy cosmetic surgeon.</p>
            </div>
            <div className="p-img">
              <img src={doBanner} alt="https://www.shapeudeserve.com/wp-content/uploads/2023/03/6-1024x1024.webp" height={400} />
            </div>
          </div>
       </div>
            

            {/* <div className="client-logo">
              <div className="img-client"><img src="https://www.shapeudeserve.com/wp-content/uploads/2023/04/ABCSLogoJanuary2010_2.jpg" alt=""  height={100} /></div>
              <div className="img-client"><img src="https://www.shapeudeserve.com/wp-content/uploads/2023/04/WPATH-logo_20201217.png" height={50}  alt="https://www.shapeudeserve.com/wp-content/uploads/2023/04/WPATH-logo_20201217.png" /></div>
              <div className="img-client"><img src="https://www.shapeudeserve.com/wp-content/uploads/2023/04/USPATH_logo.png" alt="" height={50}  /></div>
              <div className="img-client"><img src="https://www.shapeudeserve.com/wp-content/uploads/2023/04/AACS-logo-1-1024x1024.jpg" alt=""  height={100} /></div>
            </div> */}


          
            <div className="book-for-counsl">
              <Link to="/contact"><h2 className='pages-content-heading'>Book Your Consultation Now</h2></Link>
              <button>Book Your Free Consultation        <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </div>

            
    </div>
    </>
  )
}
