import React from 'react';

// components
import Nav_bar from '../components/Nav_bar';
import ButtonComponent from '../components/ButtonComponent';

// Styling
import './styles/Login.css';

const Tool = () => {
  return (
    <div>
      <Nav_bar></Nav_bar>
      <h1 className='Title'>HivesAway</h1>
      <h2 className='center-text'>Login Page</h2>
      <div className='box-container'>
        <div className='Box1'>
            <p className='center-text'>Enter your email and password</p>
            <div className='center-text'>
                <ButtonComponent></ButtonComponent>
                <ButtonComponent></ButtonComponent>
            </div>
        </div>
       </div>
    </div>
  );
};

export default Tool;