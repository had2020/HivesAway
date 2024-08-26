import React from 'react';

//assets
import Cross_icon from '../assets/Cross_icon.png';

//styling
import './styles/waring.css';

const Waring = () => {
  return (
    <div className='container'>
      <h1 className='title'>I got to stop you their bro!</h1>
      <h2>Please, login or signup, to use the tool. </h2>
      <p>We need your account in order to store your data.</p>
      <a href='/login'>Login or Signup</a>
      <img src={Cross_icon} alt="Hive Icon" />
    </div>
  );
};

export default Waring;