import React from 'react';
import './css/demand.css';

export default function Demand() {
  return (
    <>
      <div className="demand-content">
        <div className="mainHeading">
          <h2>
            Image with Content ShowCase
          </h2>
        </div>
        <hr />
        <div className="img-with-content">
          <div className="img" style={{ backgroundImage: 'url(https://www.shapeudeserve.com/wp-content/uploads/2024/02/New-Project-22-1.jpg)' }}>
          </div>
          <div className="text">
            <h2>Brazilian Butt Lift (BBL)</h2>
            <p>Brazilian Butt Lift (BBL) surgery is a popular procedure where beauty meets expertise to sculpt and enhance your natural contours. Dr. Garg, with a wealth of expertise in BBL surgery, stands as your guide in crafting a tailored plan that not only accentuates your contours but also aligns with an affordable cost within your budget. </p>
            <p>Uncover the alternatives to Brazilian Butt Lift located near you, where Dr. Garg's skill and personalized approach converge, revealing the artistic and scientific facets of attaining the curves you've always deserved.</p>
            <button type="button" className="btn btn-dark">Read More</button>
          </div>
        </div>

        <div className="img-with-content">
          <div className="text">
            <h2>Tummy Tuck</h2>
            <p>At Shape U Deserve, we offer a full range of different types of tummy tuck procedures ranging from traditional tummy tuck to the modern Avelar tummy tuck offering a personalized approach to meet your unique needs. We understand tummy tuck cost can be a concern, we ensure affordability without compromising its quality. </p>
            <p>Dr. Garg blends skill and precision to sculpt your abdomen using the latest technologies. Explore the convenient Tummy Tuck options near you to redefine and rejuvenate your body with confidence.</p>
            <button type="button" className="btn btn-dark">Read More</button>
          </div>
          <div className="img-2" style={{ backgroundImage: 'url(https://www.shapeudeserve.com/wp-content/uploads/2024/02/New-Project-23-1.jpg)', backgroundPosition: 'right' }}>
          </div>
        </div>

        <div className="img-with-content">
          <div className="img-3" style={{ backgroundImage: 'url(https://www.shapeudeserve.com/wp-content/uploads/2024/02/eg-2-1.jpg)' }}>
          </div>
          <div className="text">
            <h2>Breast Procedures</h2>
            <p>Boost your self-confidence with our special breast procedures, from Scarless Breast Augmentation to Augmentation Mammoplasty. Dr. Garg pays careful attention to customize each experience for you-whether you want a subtle lift, implants for a fuller look, or a reduction for more comfort.</p>
            <p>Rediscover confidence as we combine artistry and medical precision in simple and complex breast procedures, ensuring a personalized and transformative approach to achieve your aesthetic goals.</p>
            <button type="button" className="btn btn-dark">Read More</button>
          </div>
        </div>

        <div className="img-with-content">
          <div className="text">
            <h2>Mommy Makeover</h2>
            <p>Reclaim your confidence with our Mommy Makeover procedures tailored just for you. From addressing post-pregnancy changes to enhancing your overall appearance, our expert team is dedicated to your transformative journey. Explore affordable Mommy Makeover costs as we seamlessly blend surgical expertise and personalized care.</p>
            <p>Rediscover the best version of yourself through our specialized Mommy Makeover surgeries, combining comfort and confidence in one comprehensive package.</p>
            <button type="button" className="btn btn-dark">Read More</button>
          </div>
          <div className="img-4" style={{ backgroundImage: 'url(https://www.shapeudeserve.com/wp-content/uploads/2024/02/New-Project-24-1.jpg)', backgroundPosition: 'right' }}>
          </div>
        </div>
      </div>
    </>
  );
}
