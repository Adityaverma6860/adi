import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './css/footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { faPaperPlane, faPhone, faEnvelope, faVideo } from '@fortawesome/free-solid-svg-icons';

import qr1 from './img/home/qr1.png'
import qr2 from './img/home/qr2.jpg'
import ContactForm from './ContactForm';

export default function Footer() {

  const navigate = useNavigate();
  const form = useRef();

  const initialFormState = {
    from_name: '',
    mobile: '',
    email: '',
    interest: '',
    communication: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormState);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.from_name) tempErrors.from_name = "Name is required";
    if (!formData.mobile) tempErrors.mobile = "Phone number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill out all required fields");
      return;
    }


    emailjs
      .sendForm('service_ov53aer', 'template_ap8b1xs', form.current, 'NfgIsk3KNS_aP6gYQ')
      .then(
        () => {
          setFormData(initialFormState);
          setErrors({});
          navigate('/thank-you');
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
        },
      );
  };
  return (
    <>
      <footer>

        <div className="footer-container">

          <div className="footer-box">
            <h5 className='mb-3'>Learn More About Dr.Garg</h5>
            <div className="qr-img">
              <a href="https://www.cosmeticsurgery.org/member/shapeudeserve" target='_blank'> <img src={qr1} alt="" /></a>
              <a href="https://www.americanboardcosmeticsurgery.org/doctors/ashu-garg-md/" target='_blank'><img src={qr2} alt="" /></a>
            </div>
            <div className="contact">
              <h5 className='mb-3'>Contact Us</h5>
              <p><FontAwesomeIcon icon={faPhone} />  +1 424-666-1260</p>
              <p><FontAwesomeIcon icon={faPhone} /> +1 424-944-2004</p>
              <p><FontAwesomeIcon icon={faPaperPlane} />  care@shapeudeserve.com</p>
              <p><FontAwesomeIcon icon={faEnvelope} />  drgarg@shapeudeserve.com</p>
            </div>
          </div>


          <div className="footer-box">
            <h5 className='mb-3'>Procedures</h5>
            <div className="qr-img">
              <ul>
                <li><Link to="">LIPOSUCTION</Link></li>
                <li><Link to="/brazilian-butt-lift">BBL</Link></li>
                <li><Link to="">TUMMY TUCK</Link></li>
                <li><Link to="">MOMMY MAKEOVER</Link></li>
                <li><Link to="/breast-augmentation-surgery">BREAST AUGMENTATION</Link></li>
                <li><Link to="">BREAST LIFT</Link></li>
                <li><Link to="">BLEPHAROPLASTY</Link></li>
                <li><Link to="/buccal-fat-removal">BUCCAL FAT REMOVAL</Link></li>
                <li><Link to="/facelift-surgery">FACE LIFT</Link></li>
                <li><Link to="">BROW LIFT</Link></li>
                <li><Link to="/body-left-procedure">BODY LIFT</Link></li>
                <li><Link to="/gynecomastia-surgery">GYNECOMASTIA</Link></li>
                <li><Link to="">BREAST REDUCTION</Link></li>
                <li><Link to="/breast-revision-surgery">BREAST REVISION SURGERY</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-box">
            <div className='m-auto'>
              <h5 className='mb-3'>Get a Quote</h5>
              {/* <form ref={form} onSubmit={sendEmail}>
                <div className="name-email">
                  <span>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your name*"
                      value={formData.from_name}
                      onChange={handleChange}
                    />
                    {errors.from_name && <span className="error">{errors.from_name}</span>}
                  </span>
                  <span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Add Email*"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div class="name-email phone-com ">
                  <span className=' phone-com'>
                    <input
                      type="tel"
                      name="mobile"
                      className='phone'
                      placeholder="Your Phone*"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}

                    <select
                      name="communication"
                      className="communication1"
                      value={formData.communication}
                      onChange={handleChange}
                    >
                      <option value="">Select communication</option>
                      <option value="Face Time">Face Time</option>
                      <option value="Google Meet">Google Meet</option>
                      <option value="Zoom">Zoom</option>
                      <option value="Whatsapp">Whatsapp</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>

                  </span>

                </div>
                <div>
                  <input type="text"
                    id="interest"
                    name="interest"
                    placeholder="Interested In"
                    value={formData.interest}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Put your query..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className='submit'>  <FontAwesomeIcon icon={faVideo} />  Ask for Free Video Consultation</button>
              </form> */}
              <ContactForm />

            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="copy-right">
          <div className="copy-right-sec">
            © Copyright 2024 | Shape U Deserve | All rights reserved
            Privacy policies | <Link to="https://www.abroad-media.com/" target='_blank'>Powered by ReachCure for Plastic Sugeon</Link>
          </div>
          <div className="policy">
            <Link to="/privacy-policy"> Cookie Policy </Link> | <Link to="/terms-conditions"> Disclaimer </Link>  | <Link to="/disclaimer"> Privacy Policy </Link> | <Link to="/cookie-policy"> Terms & Conditions </Link>

          </div>
        </div>
      </footer>
    </>
  )
}
