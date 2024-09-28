import React from 'react';
import { Link } from 'react-router-dom';
import './css/landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="burger-container">
        <img src="/images/burger.png" className="burger-image" alt="Burger" />
      </div>
      <div className="text-content">
        <h1 id="heading1">Your ultimate destination for mouth-watering burgers</h1>
        <p id="p1">We serve delicious, freshly made burgers that will tantalize your taste buds. Whether you’re craving a classic cheeseburger or something more adventurous, we’ve got you covered.</p>
        <Link to="/menu">
          <button className="order-now-button">Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
// src/components/landingpage.js

// import React, { useEffect, useState } from 'react';
// import axios from '../api/axios';

// function LandingPage() {
//   const [data, setData] = useState(null);

//   useEffect(() => {

//     axios.get('/user')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Landing Page</h1>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }

// export default LandingPage;

