import React, { useRef, useState } from 'react';
import '../css/contact.css';
import Contact2 from '../img/patients-review/Contact2.png';
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Contact() {
    const navigate = useNavigate();
    const form = useRef();

    const initialFormState = {
        from_name: '',
        mobile: '',
        email: '',
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
            <div className="topBanner">
                <img src={Contact2} alt="" />
            </div>
            <div className="contact-details">
                <div className="contact-form-container">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <h2 className='contact-heading'>Contact Us</h2>
                            <label htmlFor="name">Your Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder='Your Name'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='Your Email'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Your Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                placeholder='Your Phone'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder='Message'
                            ></textarea>
                        </div>
                        <button type="submit" className='contact-btn'>Submit</button>
                    </form>
                </div>
                <div className="detailss">

                    <div className="detail cl">
                        <div className="contact-logos contact-lg">
                            <FontAwesomeIcon icon={faPhone} className='fa-icon' />
                        </div>
                        <div className="contact-content-right">
                            <p>+1 424-666-1260</p>
                            <p>+1 424-944-2004</p>
                        </div>
                    </div>
                    <div className="detail  em">
                        <div className="contact-logos">
                            <FontAwesomeIcon icon={faEnvelope} className='fa-icon email-lg' />
                        </div>
                        <div className="contact-content-right">
                            <p>Care@shapeudeserve.com</p>
                            <p>DrGarg@shapeudeserve.com</p>
                        </div>
                    </div>
                    <div className="detail lc">
                        <div className="contact-logos">
                            <FontAwesomeIcon icon={faLocationDot} className='fa-icon location-lg' />
                        </div>
                        <div className="contact-content-right" >
                            <p>435 N Bedford Dr Suite,</p>
                            <p> 213 Beverly Hills CA 90210</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr />

            <div className="map-main-container">

                <h2> <FontAwesomeIcon icon={faLocationDot} className='location-icon' />
                    LOCATIONS</h2>
                {/* <hr className='loctions-hr'/> */}
                <div className="google-map-container">
                    <div className="google-map">
                        <h4>BEVERLY HILLS</h4>
                        <p>435 N Bedford Dr Suite #213</p>
                        <p>Beverly Hills, CA 90210,</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44168.63078961035!2d-118.43885699535147!3d34.06728312879785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf7e03aaaab%3A0x2651f1de614651e8!2s435%20N%20Bedford%20Dr%20Suite%20%23%20213%2C%20Beverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sin!4v1714801931426!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>

                    <div className="google-map">
                        <h4>VENICE BEACH</h4>
                        <p>11961 Venice Blvd.</p>
                        <p>Los Angeles, CA 90066</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38274.1861140515!2d-118.4563287352822!3d34.012625025750374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba5b50892ed5%3A0xc550d0d55f2457b1!2s11961%20Venice%20Blvd.%2C%20Los%20Angeles%2C%20CA%2090066%2C%20USA!5e0!3m2!1sen!2sin!4v1714802020034!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>

                    <div className="google-map">
                        <h4>LONG BEACH</h4>
                        <p>350 W 5th St Suite #105</p>
                        <p>San Pedro, CA 90731</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31280.07800043845!2d-118.31514101364974!3d33.74205110772397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd363a8402d4f7%3A0xead2eeb57e304109!2s350%20W%205th%20St%20UNIT%20105%2C%20San%20Pedro%2C%20CA%2090731%2C%20USA!5e0!3m2!1sen!2sin!4v1714802187386!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

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
            </div>


        </>
    );
}
