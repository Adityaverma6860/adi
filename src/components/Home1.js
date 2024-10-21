// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// // import Demand from './Demand'



// // import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'

// import './css/home.css';
// import './css/spaceing.css';
// // import Carousel from './Carousel'
// import SliderComponent from './pages/SliderComponent'

// import Doctor from './img/home/doctor-img.jpg'
// import aa from './img/home/aa.jpg'
// import ab from './img/home/ab.jpg'
// import wp from './img/home/wp.png'

// import back from './img/home/back.jpg'
// import face from './img/home/face.jpg'
// import breast from './img/home/breast.jpg'
// import lips from './img/home/lips.jpg'
// // import SliderVideo from './img/home/slider.mp4'

// export default function Home1() {
//   return (
//     <div className="containerr ">
// {/* <video className='sliderVid' src={SliderVideo}  autoPlay loop style={{ width: '100%', height: 'auto' }}></video> */}

// {/*       
//       <div className="top-banner mainPadding ">
//         <div className="banner-left">
//           <div className="message-banner">
//             <h4>Affordable Cosmetic Surgery Solutions in Los Angeles & Beverly Hills, CA</h4>
//             <p>Dr. Ashu Garg- World Renowned Cosmetic Surgeon</p>
//           </div>
//         </div>
//         <div className="banner-right">
//           <form action="#">
//             <label htmlFor="name">Your Name:</label>
//             <input type="text" id="name" name="name" placeholder="Your name.." required />

//             <label htmlFor="email">Your Email:</label>
//             <input type="email" id="email" name="email" placeholder="Your email.." required />

//             <label htmlFor="email">Your Phone:</label>
//             <input type="email" id="email" name="email" placeholder="Your email.." required />

//             <label htmlFor="message">Your message (optional):</label>
//             <textarea id="message" name="message" placeholder="Write something.." required></textarea>

//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//       </div> */}


//       <div className="schedule">
//         <div className="schedule-head">
//           <span>Take the first step to a happier, more confident you</span>
//         </div>
//         <div className="schedule-button ">
//           <button className='btn btn-primary'>Schedule your free consultation today!</button>
//         </div>
//       </div>

//       <div className="card-container">
//         <div className="card1">
//             <img src={back} alt="back"/>
            
//                 <h2 className="text">Body</h2>
//                 <div className="shadow">
//                     <ul className="content">
//                         <li>Tummy Tuck</li>
//                         <li>Lipsuction</li>
//                         <li>Mummy Makeover</li>
//                         <li>Brazilian butt life- BBL</li>
//                     </ul>
//                 </div>
                

           
//         </div>
//         <div className="card2">
//             <img src={face} alt=""/>
//             <h2 className="text">Face</h2>
//             <div className="shadow">
//                 <ul className="content">
//                     <li>Eyelid Lift- Blepharoplasty</li>
//                     <li>Face Lift</li>
//                     <li>Buccal Fat Removal</li>
//                     <li>Neck and Chin Liposuction</li>
//                 </ul>
//             </div>

//         </div>
//         <div className="card3">
//             <img src={breast} alt=""/>
//             <h2 className="text">Breasts</h2>
//             <div className="shadow">
//                 <ul className="content">
//                     <li>Breast Augmentation</li>
//                     <li>Breast Lift</li>
//                     <li>Breast Reduction</li>
//                     <li>Breast Revision Surgery</li>
//                 </ul>
//             </div>
//         </div>
//         <div className="card4">
//             <img src={lips} alt=""/>
//             <h2 className="text">Non-Surgical</h2>
//             <div className="shadow">
//                 <ul className="content">
//                     <li>Botox and Fillers</li>
//                     <li>Morpheus 8</li>
//                     <li>Potenza</li>
//                     <li>Skin Aesthetic ProcedureL</li>
//                 </ul>
//             </div>
//         </div>
//     </div>

//       <SliderComponent/>

//     {/* <Carousel/> */}

//       <div className="doctor-details-videos mainPadding">

//         <div className="doctor-container">

//           <div className="doctaor-details">
//             <h2 >Top Cosmetic Surgeon Served in Los. Angeles,
//               Beverly Hills & Orange County, CA</h2>
//             <p>
//               <img src={Doctor} alt="Dr. Garg" style={{ float: "right", height: "250px" }} />
//               <strong><em>Dr. Garg, a Diplomate American Board of Cosmetic Surgeon in Los Angeles</em>
//               </strong>
//               , offers a comprehensive range of cosmetic procedures to help you achieve your aesthetic goals and unleash your inner c
//             </p>
//             <button type="button" class="btn btn-dark">Raed More</button>
//             <Swiper
//               slidesPerView={2}
//               centeredSlides={true}
//               spaceBetween={30}
//               grabCursor={true}
//               pagination={{
//                 clickable: true,
//                 autoPlay: true,
//               }}
//               modules={[Pagination]}
//               className="mySwiper"
//             >
//               <SwiperSlide><img src={aa} alt="" /></SwiperSlide>
//               <SwiperSlide><img src={ab} alt="" /></SwiperSlide>
//               <SwiperSlide><img src={wp} alt="" /></SwiperSlide>

//             </Swiper>
//           </div>
//           <video src="https://www.shapeudeserve.com/wp-content/uploads/2024/03/BBL-extended101-1-1.mp4" controls  loop height={500}></video>
//         </div>

//       </div>



//       <div className="demand-services">
//         <h3 className='demand-head'>In Demand Services</h3>
//         <div class="demand-content">


//           <div class="img-with-content">
//             <div class="img" style={{ float: "left", }}></div>
//             <div class="text">
//               <h3 className='demand-head'>Brazilian Butt Lift (BBL)</h3>
//               <p> Brazilian Butt Lift (BBL) surgery is a popular procedure where beauty meets expertise to sculpt and enhance your natural contours. Dr. Garg, with a wealth of expertise in BBL surgery, stands as your guide in crafting a tailored plan that not only accentuates your contours but also aligns with an affordable cost within your budget. <br />
//               Uncover the alternatives to Brazilian Butt Lift located near you, where Dr. Garg's skill and personalized approach converge, revealing the artistic and scientific facets of attaining the curves you've always deserved.</p>
//               <button type="button" class="btn btn-dark">Raed More</button>
//             </div>
//           </div>


//           <div class="img-with-content">
//             <div class="text">
//               <h3 className='demand-head'>Tummy Tuck</h3>
//                 <p>At Shape U Deserve, we offer a full range of different types of tummy tuck procedures ranging from traditional tummy tuck to the modern Avelar tummy tuck offering a personalized approach to meet your unique needs. We understand tummy tuck cost can be a concern, we ensure affordability without compromising its quality.<br />Dr. Garg blends skill and precision to sculpt your abdomen using the latest technologies. Explore the convenient Tummy Tuck options near you to redefine and rejuvenate your body with confidence.</p>
//               <button type="button" class="btn btn-dark">Raed More</button>
//             </div>
//             <div class="img-2" style={{ float: "right", }}></div>
//           </div>
//           <br />

//           <div class="img-with-content">
//             <div class="img-3" style={{ float: "left", }}></div>
//             <div class="text">
//             <h3 className='demand-head'>Breat Procedures</h3>
//                 <p>Boost your self-confidence with our special breast procedures, from Scarless Breast Augmentation to Augmentation Mammoplasty. Dr. Garg pays careful attention to customize each experience for you-whether you want a subtle lift, implants for a fuller look, or a reduction for more comfort.  <br />IRediscover confidence as we combine artistry and medical precision in simple and complex breast procedures, ensuring a personalized and transformative approach to achieve your aesthetic goals.</p>
//               <button type="button" class="btn btn-dark">Raed More</button>
//             </div>
//           </div>


//           <div class="img-with-content">
//             <div class="text">
//               <h3 className='demand-head'>Tummy Tuck</h3>
//                 <p>At Shape U Deserve, we offer a full range of different types of tummy tuck procedures ranging from traditional tummy tuck to the modern Avelar tummy tuck offering a personalized approach to meet your unique needs. We understand tummy tuck cost can be a concern, we ensure affordability without compromising its quality.<br />Dr. Garg blends skill and precision to sculpt your abdomen using the latest technologies. Explore the convenient Tummy Tuck options near you to redefine and rejuvenate your body with confidence. </p>
//               <button type="button" class="btn btn-dark">Raed More</button>
//             </div>
//             <div class="img-2" style={{ float: "right", }}></div>
//           </div>

//           <br />


//         </div>
//       </div> 


//       {/* <Demand/> */}

//       <div className="reviews ">
//         <h3 className='demand-head cutomer-servce-head'>Customers Reviews</h3>
//         <div className="vid-reviews">
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/Z4ZwCDnHnyc?si=HEijVZpQpMnqop80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/GlK413WwdWU?si=b2mnvX1fYhIYglpD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/OBz3XnBPB4w?si=Ky2uVpmQ0cN2P1qX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         </div>
//       </div>

//         <div className="review-content ">
//               <div className="review-box">
//                 <p>   <em>was very please with my results i got 2 days after my procedure. I was able to work the next day with tolerable soreness and no pain at all. I was awake and alert the whole time. I am very much happy that i did it. Looking forward to how my body will look once i am fully healed.</em>  Thank you <br /></p><strong className='doc-name'>Dr. Garg Melody Limbo</strong>
//                 <div className="star"><FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" /></div>

//               </div>
//               <div className="review-box">
//                         <p><em>Dr. Garg (Cosmetic Plastic Surgery Surgeon) was amazing from my pre-op assessment to my follow-up post op. His bed side manner was impeccable. Dr. Garg gave me my dream body and restored my confidence.</em> <br /> </p>  <strong className='doc-name'> Jennae Alleah</strong><div className="star"><FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" /></div>
               
//               </div>
//               <div className="review-box">
//                 <p> <em> just wanted to thank you all for the outstanding care you gave me. My lipo and bbl experience far exceeded all my expectations, and I could not be more satisfied with my results. You are such a talented and humble doctor and your staff is above average! I’m so happy with my new self.</em> <br /> </p> <strong className='doc-name'>Dr. Garg Melody Limbo</strong> <div className="star"><FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" />
//                 <FontAwesomeIcon icon={faStar} className="yellow-icon" /></div>
              
//               </div>
//         </div>



//         <div className="location">
//           <div className="h3headcoc">
//             <h3>Location Served</h3>
//           </div>
          
//           <div className="location-container">

//             <div className="address1 address">
//               <h6>Address: 1</h6>
//               <h5>BEVERLY HILLS</h5> 
//               <p>435 N Bedford Dr Suite, 213 Beverly Hills CA 90210</p>
//             </div>
            
//             <div className="address2 address">
//               <h6>Address: 2</h6>
//               <h5>SAN PEDRO</h5> 
//               <p>350 W 5th St San Pedro CA 90731</p>
//             </div>

//             <div className="address3 address">
//               <h6>Address: 3</h6>
//               <h5>GLENDALE</h5> 
//               <p>Brand Surgical Institure 716 W Broadway Glendale CA 91204</p>
//             </div>
//           </div>
//         </div>


//     <div className="client">

//     <div className="insurance-accepted">
//         <Swiper
//               slidesPerView={2}
//               centeredSlides={true}
//               spaceBetween={30}
//               grabCursor={true}
//               pagination={{
//                 clickable: true,
//                 autoPlay: true,
//               }}
//               modules={[Pagination]}
//               className="mySwiper"
//             >
//               <SwiperSlide><img src={aa} alt="" /></SwiperSlide>
//               <SwiperSlide><img src={ab} alt="" /></SwiperSlide>
//               <SwiperSlide><img src={wp} alt="" /></SwiperSlide>

//             </Swiper>
//         </div>

//         {/* <div className="insurance-accepted">
//         <Swiper
//               slidesPerView={2}
//               centeredSlides={true}
//               spaceBetween={30}
//               grabCursor={true}
//               pagination={{
//                 clickable: true,
//                 autoPlay: true,
//               }}
//               modules={[Pagination]}
//               className="mySwiper"
//             >
//               <SwiperSlide><img src={aa} alt="" /></SwiperSlide>
//               <SwiperSlide><img src={ab} alt="" /></SwiperSlide>
//               <SwiperSlide><img src={wp} alt="" /></SwiperSlide>

//             </Swiper>
//         </div> */}
//     </div>
//     </div>


//   );
// }
