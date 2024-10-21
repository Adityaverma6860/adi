import React, { useState } from 'react';
import './css/navbar.css';
import logo from './img/header/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showHtmlCssSubMenu, setShowHtmlCssSubMenu] = useState(false);
  const [showMoreSubMenu, setShowMoreSubMenu] = useState(false);
  const [showJsSubMenu, setShowJsSubMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleClick = () => {
    setShowMenu(false);
  };

  const toggleSidebar = () => {
    setShowMenu(!showMenu);
  };

  const toggleHtmlCssSubMenu = () => {
    setShowHtmlCssSubMenu(!showHtmlCssSubMenu);
  };

  const toggleJsSubMenu = () => {
    setShowJsSubMenu(!showJsSubMenu);
  };

  const handle2Click = () => {
    setShowModal(true);
  };

  const handleYes = () => {
    setShowModal(false);
    setShowMenu(false); // Close the hamburger menu
    navigate('/gallery'); // Use navigate instead of history.push
  };

  const handleNo = () => {
    setShowModal(false);
    setShowMenu(false); // Close the hamburger menu
    navigate('/'); // Redirect to the home page
  };

  // Function to handle clicking on a submenu link
  const handleSubmenuClick = () => {
    setShowMenu(false); // Close the hamburger menu
  };

  const toggleMoreSubMenu = () => {
    setShowMoreSubMenu(!showMoreSubMenu);
  };



  return (
    <nav className='mainNavbar'>
      <div className={`navbar ${showInput ? 'showInput' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="shapeudeserve" height={60} />
          </Link>
        </div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {showMenu ? <FontAwesomeIcon icon={faTimes} className='hambrger-menu' /> : <FontAwesomeIcon icon={faBars} className='hambrger-menu' />}
        </div>
        <div className="nav-links" style={{ left: showMenu ? '0' : '-100%' }}>
          <ul className="links">
            <li onClick={handleClick}><Link to="/">Home</Link></li>
            <li>
              <Link to="/about" onClick={toggleJsSubMenu}>
                About Us <FontAwesomeIcon icon={faChevronDown} className='chrvon' />
              </Link>
              <i className={`bx bxs-chevron-down js-arrow arrow ${showJsSubMenu ? 'show3' : ''}`} onClick={toggleJsSubMenu}></i>
              <ul className={`js-sub-menu sub-menu ${showJsSubMenu ? 'show3' : ''}`}>
                <li onClick={handleSubmenuClick}><Link to="/about">ABOUT </Link></li>
                <li onClick={handleSubmenuClick}><Link to="/financeandpayments">FINANCE & PAYMENT</Link></li>
                <li className="more">
                  <span><Link to="#" onClick={toggleMoreSubMenu}>POLICIES <FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link></span>
                  <i className={`bx bxs-chevron-right arrow more-arrow ${showMoreSubMenu ? 'show2' : ''}`} onClick={toggleMoreSubMenu}></i>
                  <ul className={`more-sub-menu sub-menu ${showMoreSubMenu ? 'show2' : ''}`}>
                    <li onClick={handleSubmenuClick}><Link to="/terms-conditions">TERMS AND CONDITIONS </Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/disclaimer">DISCLAIMER</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/cookie-policy">COOKIE POLICY</Link></li>
                  </ul>
                </li>
              </ul>
            </li>


            <li>
              <Link to="#" onClick={toggleHtmlCssSubMenu}>
                Procedures <FontAwesomeIcon icon={faChevronDown} className='chrvon' />
              </Link>
              <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showHtmlCssSubMenu ? 'show1' : ''}`} onClick={toggleHtmlCssSubMenu}></i>
              <ul className={`htmlCss-sub-menu sub-menu ${showHtmlCssSubMenu ? 'show1' : ''}`}>

                <li className="more">
                  <span><Link to="#" onClick={toggleMoreSubMenu}>BODY CONTOURING <FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link></span>
                  <i className={`bx bxs-chevron-right arrow more-arrow ${showMoreSubMenu ? 'show2' : ''}`} onClick={toggleMoreSubMenu}></i>
                  <ul className={`more-sub-menu sub-menu ${showMoreSubMenu ? 'show2' : ''}`}>
                    <li onClick={handleSubmenuClick}><Link to="/liposuction">LIPOSUCTION</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/brazilian-butt-lift">BRAZILLIAN BUTT LIFT (BBL)</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/tummy-tuck-procedure">TUMMY TUCK</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/mommy-make-over-procedure">MOMMY MAKEOVER</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/body-left-procedure">BODY LIFT PROCEDURE</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/arm-lift-procedure">ARM LIFT PROCEDURE</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/thigh-lift-surgery">THIGH LIFT SURGERY</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/daddy-makeover">DADDY MAKEOVER</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/vaginal-rejuvenation">VAGINAL REJUVENATION </Link></li>

                  </ul>
                </li>

                <li className="more">
                  <span><Link to="#" onClick={toggleMoreSubMenu}>BREAST PROCEDURE <FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link></span>
                  <i className={`bx bxs-chevron-right arrow more-arrow ${showMoreSubMenu ? 'show2' : ''}`} onClick={toggleMoreSubMenu}></i>
                  <ul className={`more-sub-menu sub-menu ${showMoreSubMenu ? 'show2' : ''}`}>
                    <li onClick={handleSubmenuClick}><Link to="/breast-augmentation-surgery">BREAST AUGMENTATION</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/breast-lift-procedure">BREAST LIFT</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/breast-reduction-surgery">BREAST REDUCTION</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/breast-revision-surgery">BREAST REVISION SURGERY</Link></li>
                  </ul>
                </li>

                <li className="more">
                  <span><Link to="#" onClick={toggleMoreSubMenu}>FACE PROCEDURES<FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link></span>
                  <i className={`bx bxs-chevron-right arrow more-arrow ${showMoreSubMenu ? 'show2' : ''}`} onClick={toggleMoreSubMenu}></i>
                  <ul className={`more-sub-menu sub-menu ${showMoreSubMenu ? 'show2' : ''}`}>
                    <li onClick={handleSubmenuClick}><Link to="/buccal-fat-removal">BUCCAL FAT REMOVAL</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/facelift-surgery">FACELIFT SUREGERY</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/brow-lift-surgery">BROW LIFT </Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/eyelid-lift-surgery"> EYELID LIFT BLEPHAROPLADTY</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/neck-chin-liposuction">NECK AND CHIN LIPOSUCTION </Link></li>
                  </ul>
                </li>
                <li onClick={handleSubmenuClick}><Link to="/skin-rejuvenation">SKIN REJUVENATION</Link></li>
                <li onClick={handleSubmenuClick}><Link to="/gynecomastia-surgery">GYNECOMASTIA SURGERY</Link></li>



              </ul>
            </li>

            <li>
              <Link to="#" onClick={toggleJsSubMenu}>Technologies <FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link>
              <i className={`bx bxs-chevron-down js-arrow arrow ${showJsSubMenu ? 'show3' : ''}`} onClick={toggleJsSubMenu}></i>
              <ul className={`js-sub-menu sub-menu ${showJsSubMenu ? 'show3' : ''}`}>
                <li className="more">
                  <span><Link to="#" onClick={toggleMoreSubMenu}>INVASIVE TECHNOLOGIES <FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link></span>
                  <i className={`bx bxs-chevron-right arrow more-arrow ${showMoreSubMenu ? 'show2' : ''}`} onClick={toggleMoreSubMenu}></i>
                  <ul className={`more-sub-menu sub-menu ${showMoreSubMenu ? 'show2' : ''}`}>
                    <li onClick={handleSubmenuClick}><Link to="/vaser-lipo">VASER LIPO </Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/aveli-cellulite-treatment">AVELI</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/vaser-smooth"> SMOOTH</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/renuvion">RENUVION</Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/power-assisted-liposuction">POWER ASSISTED</Link></li>
                  </ul>
                </li>

                <li className="more">
                  <span><Link to="#" onClick={toggleMoreSubMenu}>NON – INVASIVE TECHNOLOGIES  <FontAwesomeIcon icon={faChevronDown} className='chrvon' /></Link></span>
                  <i className={`bx bxs-chevron-right arrow more-arrow ${showMoreSubMenu ? 'show2' : ''}`} onClick={toggleMoreSubMenu}></i>
                  <ul className={`more-sub-menu sub-menu ${showMoreSubMenu ? 'show2' : ''}`}>
                    <li onClick={handleSubmenuClick}><Link to="/morpheus8-technology">MORPHEUS8 </Link></li>
                    <li onClick={handleSubmenuClick}><Link to="/potenza-technology">POTENZA</Link></li>
                  </ul>
                </li>

              </ul>
            </li>


            <li onClick={handle2Click}><Link to="/gallery">Gallery</Link></li>

            <li onClick={handleClick}><Link to="/patient-reviews">Patient Reviews</Link></li>
            <li onClick={handleClick}><Link to="/blogs">Blogs</Link></li>
            <li onClick={handleClick}><Link to="/faq">FAQs</Link></li>
            <li onClick={handleClick} className='contact-nav'><Link to="/contact" > <button className='btn'>Contact Us</button> </Link></li>
          </ul>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you aged 18 years or older </h2>

            <div className="modal-buttons">
              <button className='yess' onClick={handleYes}>Yes</button>
              <button className='noo' onClick={handleNo}>No</button>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
