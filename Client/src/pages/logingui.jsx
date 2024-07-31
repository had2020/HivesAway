import React from 'react';

// components
import Nav_bar from '../components/Nav_bar';
import UserPassForm from '../components/UserPassForm';
import Flaskip from '../components/flaskip';

// Styling
import './styles/Login.css';

const Tool = () => {
  return (
    <div>
      <Nav_bar></Nav_bar>
      <h1 className='Title'>HivesAway</h1>
      <h2 className='center-text'>Login Page</h2>
      <div className='box-container'>
        <UserPassForm address_var={Flaskip()} request_type="login"/>
      </div>
    </div>
  );
};

export default Tool;