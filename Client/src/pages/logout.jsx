import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Styles
import './styles/logout.css';

const Logout = ({ OnLogOut }) => {
  const [loggged_out, setLogggedOut] = useState(false);

  const handleRemoveCookie = (props) => {
    Cookies.remove('username');
    Cookies.remove('password');
  };

  const Logout = () => {
    sessionStorage.clear();
    handleRemoveCookie();
    setLogggedOut(true);
    OnLogOut(); // data could also be passed with this method
    console.log("YOU ARE LOGGED OUT");
  };

  return (
    <div className='container'>
      <div className='box1'>
        {loggged_out ? (
        <>
          <h1 className='big-text'>👋 You have been logged out</h1>
        </>
        ) : null}
          <button className='box1 button' onClick={Logout}>Logout</button>
          <a href='/'>Back To Home</a>
      </div>
    </div>
  );
}

export default Logout;