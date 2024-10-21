import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';



import './css/home.css';
import './css/spaceing.css';
import SliderComponent from './pages/SliderComponent'
import Sliderrr from './img/home/Sliderrr.gif'
import Sliderrr1 from './img/home/homeslider.gif'
// import MobileSlider from './img/home/MobileSlider.gif'


import Slider from './Slider'
import CardComponent from './CardComponent'
import ContactForm from './ContactForm'
// import TestMoni from './pages/TestMoni'
import Board from './pages/Board'

// Imprort Video
import vide2 from './img/home/vide2.mp4';
import vide1 from './img/home/vide1.mp4'
import slider from './img/home/slider.mp4'
import doctorImg from './img/home/doctorImg.jpg'


export default function Home() {
  return (
    <>

      <div className="containerr ">
        <div className="home-top-bar">

          <video className='sliderVid h-50' src={vide2} playsInline autoPlay muted loop style={{ width: '100%', height: '100%' }}></video>


          <div className="top-banner mainPadding ">

            <div className="banner-right">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="schedule">
          <div className="schedule-head">
            <span>Take the first step to a happier, more confident you</span>
          </div>
          <div className="schedule-button ">
            <button className='btn btn-primary'>Schedule your free consultation today!</button>
          </div>
        </div>


        <h2 className='mainHeading achieve'>Achieve the beauty and confidence you desire with our wide range of specialized aesthetic procedures.
        </h2>
        <CardComponent />
        <div className="sliderrr">
          <img className='slider-desktop' src={Sliderrr1} alt="Sliderrr" />
          <img className='slider-mob' src={Sliderrr1} alt="Sliderrr" />
        </div>
        {/* <SliderComponent/> */}
        {/* <div className='vidcontain'>

        <video className='sliderVid slidermargin' src={slider} autoPlay muted loop style={{ width: '100%', height: '100%' }}></video>

        </div> */}
        <br />
        <br />



        <div className="doctor-wrapper  py-4">
          <div className="doctor-detailss">
            <div className="dotor">
              <h2>Top Cosmetic Surgeon Served in Los Angeles,
                Beverly Hills & Orange County, CA</h2>

              <div className="doctor-with-img-deatils">
                <img className='docimg' src={doctorImg} alt="" height="300" />
              </div>
              <p><strong><i>Dr. Garg, a Diplomate American Board of Cosmetic Surgeon in Los Angeles,</i></strong> offers a comprehensive range of cosmetic procedures to help you achieve your aesthetic goals and unleash your inner confidence. Whether you seek dramatic body contouring, subtle facial rejuvenation, or a refreshed appearance without surgery, Shape U Deserve has the solution.
              </p>
              <div className='btn-center'>
                <Link to="/about" className='btn btn-dark'>Read More</Link></div>
              <div className="doctor-client">
                <img src="https://www.shapeudeserve.com/wp-content/uploads/2024/02/phonto1-1.jpg" alt="" />
                <img src="https://www.shapeudeserve.com/wp-content/uploads/2024/02/phonto1.jpg" alt="" />
                <img src="https://www.shapeudeserve.com/wp-content/uploads/2024/02/phonto1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="doctor-into-video">
            <video playsInline loop controls autoPlay muted height="500">
              <source src={vide1} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* <div className="sliderrr py-3">
          <img className='slider-desktop' src={Sliderrr1} alt="Sliderrr" />
          <img className='slider-mob' src={MobileSlider} alt="Sliderrr" />
        </div> */}

        <div className="demand-services">
          {/* <h3 className='demand-head d-services'>In Demand Services</h3> */}
          <div className="demand-content">
            <div className="img-with-content">
              <div className="img" style={{ float: "left", }}></div>
              <div className="text">
                <h3 className='demand-head'>Brazilian Butt Lift (BBL)</h3>
                <p> Brazilian Butt Lift (BBL) surgery is a popular procedure where beauty meets expertise to sculpt and enhance your natural contours. Dr. Garg, with a wealth of expertise in BBL surgery, stands as your guide in crafting a tailored plan that not only accentuates your contours but also aligns with an affordable cost within your budget. Uncover the alternatives to Brazilian Butt Lift located near you, where Dr. Garg's skill and personalized approach converge, revealing the artistic and scientific facets of attaining the curves you've always deserved.</p>
                <div className="btn-center">
                  <Link to="/brazilian-butt-lift" className="btn btn-dark">Read More</Link>
                </div>
              </div>
            </div>


            <div className="img-with-content">
              <div className="text">
                <h3 className='demand-head'>Tummy Tuck</h3>
                <p>At Shape U Deserve, we offer a full range of different types of tummy tuck procedures ranging from traditional tummy tuck to the modern Avelar tummy tuck offering a personalized approach to meet your unique needs. We understand tummy tuck cost can be a concern, we ensure affordability without compromising its quality. Dr. Garg blends skill and precision to sculpt your abdomen using the latest technologies. Explore the convenient Tummy Tuck options near you to redefine and rejuvenate your body with confidence.</p>
                <div className='btn-center'>
                  <Link to="" className="btn btn-dark">Read More</Link>
                </div>

              </div>
              <div className="img-2" style={{ float: "right", }}></div>
            </div>
            <br />

            <div className="img-with-content">
              <div className="img-3" style={{ float: "left", }}></div>
              <div className="text">
                <h3 className='demand-head'>Breast Procedures</h3>
                <p>Boost your self-confidence with our special breast procedures, from Scarless Breast Augmentation to Augmentation Mammoplasty. Dr. Garg pays careful attention to customize each experience for you-whether you want a subtle lift, implants for a fuller look, or a reduction for more comfort. IRediscover confidence as we combine artistry and medical precision in simple and complex breast procedures, ensuring a personalized and transformative approach to achieve your aesthetic goals.</p>

                <div className='btn-center'>
                  <Link to="" className="btn btn-dark">Read More</Link>
                </div>
              </div>
            </div>


            <div className="img-with-content">
              <div className="text">
                <h3 className='demand-head'>Mommy Makeover</h3>
                <p>Reclaim your confidence with our Mommy Makeover procedures tailored just for you. From addressing post-pregnancy changes to enhancing your overall appearance, our expert team is dedicated to your transformative journey. Explore affordable Mommy Makeover costs as we seamlessly blend surgical expertise and personalized care. Rediscover The Best Version Of Yourself Through Our Specialized Mommy Makeover Surgeries, Combining Comfort And Confidence In One Comprehensive Package.
                </p>
                <div className='btn-center'>
                  <Link to="" className="btn btn-dark">Read More</Link>
                </div>

              </div>
              <div className="img-4" style={{ float: "right", }}></div>
            </div>

            <br />


          </div>
        </div>
        {/* media query for thiss hhhhhhhhh */}




        {/* <Demand/> */}  

        <div className="reviews ">
          <h3 className='demand-head cutomer-servce-head'>What our patients say about us</h3>
          <div className="vid-reviews">
            <iframe width="380" height="280" src="https://www.youtube.com/embed/Z4ZwCDnHnyc?si=HEijVZpQpMnqop80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
           
            <iframe width="380" height="280" src="https://www.youtube.com/embed/rTyvfVBMHbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe>



            {/* <iframe width="380" height="280" src="https://www.youtube.com/embed/GlK413WwdWU?si=b2mnvX1fYhIYglpD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <iframe width="380" height="280" src="https://www.youtube.com/embed/OBz3XnBPB4w?si=Ky2uVpmQ0cN2P1qX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="review-content ">
          <div className="review-box">
            <h4 className='fw-bold'>Patient Review</h4>
            <p> <em>was very please with my results i got 2 days after my procedure. I was able to work the next day with tolerable soreness and no pain at all. I was awake and alert the whole time. I am very much happy that i did it. Looking forward to how my body will look once i am fully healed.</em>  Thank you <br /></p><strong className='doc-name'>Melody Limbo
            </strong>
            <div className="star"><FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" /></div>

          </div>
          <div className="review-box">
            <h4 className='fw-bold'>Patient Review</h4>
            <p><em>Dr. Garg (Cosmetic Plastic Surgery Surgeon) was amazing from my pre-op assessment to my follow-up post op. His bed side manner was impeccable. Dr. Garg gave me my dream body and restored my confidence.</em> <br /> </p>  <strong className='doc-name'> Jennae Alleah</strong><div className="star"><FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" /></div>
          </div>
          <div className="review-box">
            <h4 className='fw-bold'>Patient Review</h4>
            <p> <em> just wanted to thank you all for the outstanding care you gave me. My lipo and bbl experience far exceeded all my expectations, and I could not be more satisfied with my results. You are such a talented and humble doctor and your staff is above average! I’m so happy with my new self.</em> <br /> </p> <strong className='doc-name'>Lorena Sanchez

            </strong> <div className="star"><FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" />
              <FontAwesomeIcon icon={faStar} className="yellow-icon" /></div>

          </div>
        </div>



        <div className="location">
          <div className="h3headcoc">
            <h3 style={{ fontSize: "25px" }}>LOCATIONS</h3>
          </div>

          <div className="location-container">

            <div className="address1 address">
              <h5>BEVERLY HILLS</h5>
              <p>435 N Bedford Dr Suite #213</p>
              <p>Beverly Hills, CA 90210,</p>
            </div>

            <div className="address2 address">
              <h5>VENICE BEACH</h5>
              <p>11961 Venice Blvd.</p>
              <p>Los Angeles, CA 90066</p>
            </div>

            <div className="address3 address">
              <h5>LONG BEACH</h5>
              <p>350 W 5th St Suite #105</p>
              <p>San Pedro, CA 90731</p>
            </div>
          </div>
        </div>
      </div>


      <Slider />

      <div className="follow">
        <h2 className='demand-head follow-heading'>Follow Us For Updates</h2>
        <div className="followus-container">
          <a href="https://www.facebook.com/shapeudeserve"><FontAwesomeIcon icon={faFacebook} className='follow-icon faFacebook' /></a>
          <a href="https://www.instagram.com/shapeudeserve/"><FontAwesomeIcon icon={faInstagram} className='follow-icon faInstagram' /></a>
          <a href="https://twitter.com/doctorashugarg"><FontAwesomeIcon icon={faTwitter} className='follow-icon faTwitter' /></a>
          <a href="https://www.youtube.com/@shapeudeserve"><FontAwesomeIcon icon={faYoutube} className='follow-icon faYoutube' /></a>
          <a href="#"><FontAwesomeIcon icon={faTiktok} className='follow-icon faTiktok' /></a>
          <a href="https://www.linkedin.com/in/dr-ashu-garg/"><FontAwesomeIcon icon={faLinkedin} className='follow-icon faLinkedin' /></a>

        </div>
      </div>

    </>
  );
}
