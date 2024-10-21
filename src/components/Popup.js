// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook
// import './css/home.css';

// function Popup() {
//   const history = useHistory(); // Get history object using useHistory hook
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const visitedBefore = localStorage.getItem('visitedBefore');

//     // If the user has not visited before, or if they have visited before but the popup has not been shown
//     if (!visitedBefore || visitedBefore === 'false') {
//       setShowPopup(true);
//       localStorage.setItem('visitedBefore', 'true'); // Set visitedBefore to true to indicate the user has visited before
//     }

//     const unlisten = history.listen((location, action) => {
//       // Listen for route changes
//       if (location.pathname === '/' && action === 'PUSH') {
//         setShowPopup(true); // Show pop-up when navigating to home page
//       }
//     });

//     return () => {
//       unlisten(); // Clean up the listener when the component unmounts
//     };
//   }, [history]);

//   const handleClose = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Welcome to Our Website!</h2>
//             <p>This is the first time you've visited our site or you've reloaded the page. Enjoy your stay!</p>
//             <button onClick={handleClose}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Popup;
