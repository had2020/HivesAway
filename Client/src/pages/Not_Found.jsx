// src/NotFound.jsx
import React from 'react';

//assets
import Cross_icon from '../assets/Cross_icon.png';

const Not_Found = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={Cross_icon} alt="Hive Icon" />
    </div>
  );
}

export default Not_Found;