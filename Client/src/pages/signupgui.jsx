import React from 'react';

// components
import UserPassForm from '../components/UserPassForm';
import Flaskip from '../components/flaskip';

// Styling
import './styles/Login.css';

const Signupgui = (props) => {

  // get login data
  const get_login_data = (data) => {
    uplift_login_data(data);
  };

  const uplift_login_data = (data) => {
    props.onUplift(data)
  };

  return (
    <div>
      <h1 className='Title'>HivesAway</h1>
      <h2 className='center-text'>Signup Page</h2>
      <div className='box-container'>
        <UserPassForm address_var={Flaskip()} request_type="Signup" onSubmit={get_login_data}/>
      </div>
    </div>
  );
};

export default Signupgui;