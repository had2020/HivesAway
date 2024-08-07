import React from 'react';

// Styling
import './styles/Login.css';

// Todo add some kind of save login for the same device.
const Login = () => {
  return (
    <div>
      <h1 className='Title'>HivesAway</h1>
      <div className='box-container'>
        <div className='Box1'>
          <a className='link1' href='/logingui'>Login</a>
        </div>
        <div className='Box1'>
        <a className='link1' href='/signupgui'>SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Login;