import React from 'react'
import '../css/Pages.css';
import cgirls from '../img/home/cgirls.png'
import UnitedCredit from '../img/slider/UnitedCredit.png'
import PatientFi from '../img/slider/PatientFi.png'
import img6 from '../img/slider/img6.png'
import DeneFits from '../img/slider/DeneFits.png'
import CareCredit from '../img/slider/CareCredit.jpg'
import Aetna from '../img/slider/Aetna.png'
import Pay from '../img/slider/pay-via-stripe.png'

export default function FinanceAndPayments() {
  return (
    <>

      <div className="financing">
        <div className="f-content"><h2>Easy Financing for you by our Partners</h2></div>
        <div className="f-img"><img src={cgirls} alt="" /></div>
      </div>


      <div className="apply-content-container">

        <div className="apply-content gery-black">
          <div className="a-content">
            <h4>Pay via Stripe</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={Pay} alt="" height={100} /></div>
        </div>

        <div className="apply-content ">
          <div className="a-content">
            <h4>Financing With Patient Fi</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={PatientFi} alt="" /></div>
        </div>

        <div className="apply-content gery-black">
          <div className="a-content">
            <h4>Financing With United Credit</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={UnitedCredit} alt="" /></div>
        </div>

        {/* <div className="apply-content gery-black">
          <div className="a-content">
            <h4>Financing With Aetna</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={Aetna} alt="" /></div>
        </div> */}



        <div className="apply-content">
          <div className="a-content">
            <h4>Financing With Cherry</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={img6} alt="" /></div>
        </div>
        <div className="apply-content gery-black">
          <div className="a-content">
            <h4>Financing With DenFits</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={DeneFits} alt="" /></div>
        </div>

        <div className="apply-content ">
          <div className="a-content">
            <h4>Financing With Care Credit</h4>
            <button type="button" class="btn btn-secondary">Apply Now</button>
          </div>
          <div className="a-logo"><img src={CareCredit} alt="" height={100} /></div>
        </div>
      </div>
    </>
  )
}
