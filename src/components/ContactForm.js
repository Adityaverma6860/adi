import React, { useRef, useState } from 'react';
import './css/home.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


function ContactForm() {
  const navigate = useNavigate();
  const form = useRef();

  const initialFormState = {
    from_name: '',
    mobile: '',
    communication: '',
    time: '',
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
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Your name*"
          value={formData.from_name}
          onChange={handleChange}
        />
        {errors.from_name && <span className="error">{errors.from_name}</span>}

        <input
          type="text"
          name="mobile"
          placeholder="Your Phone*"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span className="error">{errors.mobile}</span>}

        <div className="form-div">
          <select
            name="communication"
            className="communication2"
            value={formData.communication}
            onChange={handleChange}
          >
            <option value="">Select communication method</option>
            <option value="Face Time">Face Time</option>
            <option value="Google Meet">Google Meet</option>
            <option value="Zoom">Zoom</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Phone Call">Phone Call</option>
          </select>
          {errors.communication && <span className="error">{errors.communication}</span>}

          <select
            name="time"
            className="communication2"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Best time to call</option>
            {Array.from({ length: 24 }, (_, i) => i).map(hour => (
              <option key={hour} value={`${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour >= 12 ? 'pm' : 'am'}`}>
                {`${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour >= 12 ? 'pm' : 'am'}`}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        <textarea
          name="message"
          placeholder="Put your query..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <input type="submit" value="Submit" />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="toast-container"
        bodyClassName="toast-body"
      />
    </>
  );
}

export default ContactForm;
