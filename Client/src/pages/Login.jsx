import React from 'react';

// Components
import Nav_bar from '../components/Nav_bar';

// Styling
import './styles/Login.css';

// Todo add some kind of save login for the same device.
const Login = () => {
  return (
    <div>
      <Nav_bar></Nav_bar>
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