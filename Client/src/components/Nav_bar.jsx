import { useState, useEffect } from 'react'
import './styles/Nav_bar.css';

// this component shows props use very well 
const NavBar = (props) => {
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    setLogined(props.logined)
  }, [props.logined])

  //Todo fix this so it updates

  const check_login_status = () => {
    setLogined(props.logined)
  }
  
  return (
  <div className="topnav">
    <div className='leftbutton'>
      <a className="active" href="/">Home</a>
      <a href="/tool">Tool</a>
      <a href="/contact">Contact</a>
    </div>
    <div>
      <p className='username'>Welcome, {props.username}!</p>
    </div>
    <div className='rightbutton'>
    {logined ? (
    <>
      <a href="/logingui">Login</a>
      <a href="/signupgui">Signup</a>
    </>
    ) : null}
      <a className="verticalLine"href="/logout">Logout</a>
    </div>
  </div>
  );
};

export default NavBar;