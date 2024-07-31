import React from 'react';
import './styles/Nav_bar.css';

const NavBar = () => {
  /* ToDO : Make text that says logged in when not and signout when out */
  return (
  <div class="topnav">
    <a class="active" href="/">Home</a>
    <a href="/tool">Tool</a>
    <a href="/contact">Contact</a>
    <div className='rightbutton'>
      <a href="/logingui">Login</a>
      <a href="/signupgui">SignUp</a>
    </div>
  </div>
  );
};

export default NavBar;

/* positioning nav bar items
style={{ float: 'right' }} 
*/