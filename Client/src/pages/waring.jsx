import React from 'react';

//assets
import Cross_icon from '../assets/Cross_icon.png';

//TODO add when none is logged in and tool is acessed 
const Waring = (reason) => {
  return (
    <div>
      <h1>I got to stop you their bro!</h1>
      <h2>Please, {reason} </h2>
      <img src={Cross_icon} alt="Hive Icon" />
    </div>
  );
};

export default Waring;