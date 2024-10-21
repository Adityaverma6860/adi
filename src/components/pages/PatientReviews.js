import React from 'react'
// import Banner from '../img/patients-review/banner.jpg'
import Banner from '../img/home/review.jpg'
import ReviewVideo from '../img/home/review.jpg';
import '../css/Pages.css';

import TestMoni from './TestMoni'


export default function PatientReviews() {
  return (
    <>
      <div className="patients-review-container">
        <div className="banner">

          <img src={Banner} alt="Banner" />
          {/* <video className='sliderVid' src={ReviewVideo} autoPlay muted loop style={{ width: '100%', height: '50%' }}></video> */}

          <h2>See What Our Patients Say About Us</h2>

        </div>

        <div className='container mt-5'>
          <div className="short-videos-container top-svc">
            {/* <div className="s-video"> */}
              {/* <iframe height="600" src="https://www.youtube.com/embed/rTyvfVBMHbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe> */}
              {/* <h4>30-40  years female following Large Volume Liposuction Abdomen and Tummy Tuck. </h4> */}

            {/* </div> */}
            <div className="s-video">
              <iframe height="600" src="https://www.youtube.com/embed/t1xrZ3EeZ2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe>
              <h4>50-60 years female following Breast Reduction Surgery. She had a history of  chronic backache,  shoulder grooving, discomfort and rashes due to large size breasts.)</h4>
            </div>

            <div className="s-video">
              <iframe height="600" src="https://www.youtube.com/embed/ah3ypQ20NDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe>

              <h4>30-40 years female with Large Volume Liposuction of Thighs, Abdomen and  Fat Transfer to Buttocks.</h4>
            </div>

            <div className="s-video">
              <iframe height="600" src="https://www.youtube.com/embed/3BrJ-kHUDUc?si=k13_7u5irW3eNHwH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe>
              <h4>40-50 years female with Large Volume Lipo 360, Tummy tuck and Fat Transfer to Buttocks.</h4>
            </div>

            <div className="s-video">
              <iframe height="600" src="https://www.youtube.com/embed/YVKkuzi09Tc?si=XSOWGtAJYBRLAfzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe>
              <h4>40-50 years female following Mommy Makeover ( Lipoabdominoplasty,  Augmentation Mammoplasty )</h4>
            </div>

            <div className="s-video">
              <iframe height="600" src="https://www.youtube.com/embed/a-Dt09oH4Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "fit-content" }}></iframe>

              <h4>30-40 years Male Model Actor following Scar Revision Surgery.</h4>
            </div>
          </div>
        </div>


        <div className='container mt-5'>
          <div className="long-video">

            <div className="l-video">
              <iframe width="520" height="309" src="https://www.youtube.com/embed/3ZIvXtgnCQU" title="Patient Reviews | Shape U Deserve | Dr Ashu Garg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="l-video">
              <iframe width="520" height="309" src="https://www.youtube.com/embed/uIIwj5kSlfk" title="Patient Review | Shape U Deserve | Dr Ashu Garg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="l-video">
              <iframe width="520" height="309" src="https://www.youtube.com/embed/GlK413WwdWU" title="Patient Reviews | Shape U Deserve | Dr Ashu Garg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="l-video">
              <iframe width="520" height="309" src="https://www.youtube.com/embed/OBz3XnBPB4w" title="Patient Review | Shape U Deserve | Dr Ashu Garg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="l-video">
              <iframe width="520" height="309" src="https://www.youtube.com/embed/Z4ZwCDnHnyc" title="Patient Reviews | Shape U Deserve | Dr Ashu Garg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h4>20-30 years female testimonial following Liposuction 360.</h4>
            </div>

            <div className="l-video">
              <iframe width="520" height="309" src="https://www.youtube.com/embed/Q4Y1wcheEOs" title="Patient Review | Shape U Deserve | Dr Ashu Garg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h4>30-40 years female following Liposuction Abdomen. </h4>
            </div>
          </div>
        </div>
      </div>

      <TestMoni />


      {/* <Testimonials/> */}
    </>
  )
}

