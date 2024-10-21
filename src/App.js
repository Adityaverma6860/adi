import React, { useEffect } from 'react'; // Import React and useEffect
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import StickeyBar from './components/StickeyBar'
import Navbar from './components/Navbar' //Navbar
import Footer from './components/Footer' //Footer
import Home from './components/Home' //Home
import About from './components/pages/About' //About
import Gallery from './components/pages/Gallery' //Gallery
import Contact from './components/pages/Contact' //Contact
import Blogs from './components/Blogs' //Blogs
import MainFaq from './components/pages/MainFaq' //Faq
import PatientReviews from './components/pages/PatientReviews'  //PatientReviews
import FinanceAndPayments from './components/pages/FinanceAndPayments'  //FinanceAndPayments
import Thanku from './components/Thanku'  //FinanceAndPayments


// --------------------->> Procedures Pages <<-------------------------------
import BodyLiftProcedure from './components/pages/BodyLiftProcedure'
import Brazilian_Butt_Lift from './components/pages/Services'
import ArmLiftProcedure from './components/pages/ArmLiftProcedure'
import BuccalFatRemoval from './components/pages/BuccalFatRemoval'
import ThighLiftSurgery from './components/pages/ThighLiftSurgery'
import FaceliftSurgery from './components/pages/FaceliftSurgery'
import DaddyMakeover from './components/pages/DaddyMakeover'
import VaginalRejuvenation from './components/pages/VaginalRejuvenation'
import SkinRejuvenation from './components/pages/SkinRejuvenation'
import Breast_RevisionSurger from './components/pages/Breast _RevisionSurger'
import BreastAgumen from './components/pages/BreastAgumen'
import GynecomastiaSurgery from './components/pages/GynecomastiaSurgery'
import Liposuction from './components/pages/Liposuction'
import BreastLiftProcedure from './components/pages/BreastLiftProcedure'
import TummyTommyPro from './components/pages/TummyTommyPro'
import EyelidLiftSurgery from './components/pages/EyelidLiftSurgery'
import NeckChinLiposuction from './components/pages/NeckChinLiposuction'
import MommyMakeOverPro from './components/pages/MommyMakeOverPro'
import Browliftsurgery from './components/pages/Browliftsurgery'
import BreastReductionSurgery from './components/pages/BreastReductionSurgery'
// --------------------->> Procedures Pages <<-------------------------------

// --------------------->> Polices <<-------------------------------
import PrivacyPolicy from './components/pages/Polices/PrivacyPolicy'
import TermsConditions from './components/pages/Polices/TermsConditions'
import Disclaimer from './components/pages/Polices/Disclaimer'
import CookiePolicy from './components/pages/Polices/CookiePolicy'
// --------------------->> Polices <<-------------------------------


// --------------------->> Gallery Pages <<-------------------------------
import BreastAugmentation from './components/gifPages/BreastAugmentation'
import BreastLift from './components/gifPages/BreastLift'
import Lipo360 from './components/gifPages/Lipo360'
import FaceAndNeck from './components/gifPages/FaceAndNeck'
import BBL from './components/gifPages/BBL'
import Transgender from './components/gifPages/Transgender'
import TummyTuck from './components/gifPages/TummyTuck'
import MommyMakeover from './components/gifPages/MommyMakeover'
// --------------------->> Gallery Pages <<-------------------------------


// --------------------->> Technologies Pages <<-------------------------------
// INVASIVE TECHNOLOGIES
import VaserLipo from './components/pages/InvasiveTechnologies/VaserLipo'
import Aveli from './components/pages/InvasiveTechnologies/Aveli'
import VaserSmooth from './components/pages/InvasiveTechnologies/VaserSmooth'
import Renuvion from './components/pages/InvasiveTechnologies/Renuvion'
import PowerAssisted from './components/pages/InvasiveTechnologies/PowerAssisted'
// NON – INVASIVE TECHNOLOGIES +
import Morpheus8 from './components/pages/InvasiveTechnologies/Morpheus8'
import Potenza from './components/pages/InvasiveTechnologies/Potenza'
// --------------------->> Technologies Pages <<-------------------------------
// Add other imports for pages as needed

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {

  return (

    <Router>
      <>
        {/* <Navbar2 /> */}
        <ScrollToTop />
        <StickeyBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/financeandpayments" element={<FinanceAndPayments />} />
          <Route path="/faq" element={<MainFaq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brazilian-butt-lift" element={<Brazilian_Butt_Lift />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/patient-reviews" element={<PatientReviews />} />
          <Route path="/arm-lift-procedure" element={<ArmLiftProcedure />} />
          <Route path="/body-left-procedure" element={<BodyLiftProcedure />} />
          <Route path="/buccal-fat-removal" element={<BuccalFatRemoval />} />
          <Route path="/thigh-lift-surgery" element={<ThighLiftSurgery />} />
          <Route path="/facelift-surgery" element={<FaceliftSurgery />} />
          <Route path="/daddy-makeover" element={<DaddyMakeover />} />
          <Route path="/vaginal-rejuvenation" element={<VaginalRejuvenation />} />
          <Route path="/thank-you" element={<Thanku />} />
          <Route path="/skin-rejuvenation" element={<SkinRejuvenation />} />
          <Route path="/breast-revision-surgery" element={<Breast_RevisionSurger />} />
          <Route path="/breast-augmentation-surgery" element={<BreastAgumen />} />
          <Route path="/gynecomastia-surgery" element={<GynecomastiaSurgery />} />
          <Route path="/liposuction" element={<Liposuction />} />
          <Route path="/breast-lift-procedure" element={<BreastLiftProcedure />} />
          <Route path="/tummy-tuck-procedure" element={<TummyTommyPro />} />
          <Route path="/eyelid-lift-surgery" element={<EyelidLiftSurgery />} />
          <Route path="/neck-chin-liposuction" element={<NeckChinLiposuction />} />
          <Route path="/mommy-make-over-procedure" element={<MommyMakeOverPro />} />
          <Route path="/brow-lift-surgery" element={<Browliftsurgery />} />
          <Route path="/breast-reduction-surgery" element={<BreastReductionSurgery />} />

          {/* --------------------->> Polices  <<---------------------- */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* --------------------->> Polices  <<---------------------- */}

          <Route path="/bbl" element={<BBL />} />
          <Route path="/breast-augmentation" element={<BreastAugmentation />} />
          <Route path="/breast-lift" element={<BreastLift />} />
          <Route path="/lipo-360" element={<Lipo360 />} />
          <Route path="/face-and-neck" element={<FaceAndNeck />} />
          <Route path="/transgender" element={<Transgender />} />
          <Route path="/tummy-tuck" element={<TummyTuck />} />
          <Route path="/mommy-makeover" element={<MommyMakeover />} />


          <Route path="/vaser-lipo" element={<VaserLipo />} />
          <Route path="/aveli-cellulite-treatment" element={<Aveli />} />
          <Route path="/vaser-smooth" element={<VaserSmooth />} />
          <Route path="/renuvion" element={<Renuvion />} />
          <Route path="/power-assisted-liposuction" element={<PowerAssisted />} />
          <Route path="/morpheus8-technology" element={<Morpheus8 />} />
          <Route path="/potenza-technology" element={<Potenza />} />







        </Routes>
        <Footer />

      </>
    </Router>
  );
}

export default App;
