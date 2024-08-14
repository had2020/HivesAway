import React from 'react';
import './styles/Nav_bar.css';

const NavBar = (props) => {
  return (
  <div className="topnav">
    <a className="active" href="/">Home</a>
    <a href="/tool">Tool</a>
    <a href="/contact">Contact</a>
    <div className='rightbutton'>
      <p>Hello, {props.username}!</p>
      <a href="/logingui">Login</a>
      <a href="/signupgui">Signup</a>
      <a className="verticalLine"href="/logout">Logout</a>
    </div>
  </div>
  );
};

export default NavBar;

/* positioning nav bar items
style={{ float: 'right' }} 
*/