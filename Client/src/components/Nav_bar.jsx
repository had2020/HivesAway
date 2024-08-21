import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import './styles/Nav_bar.css';

// this component shows props use very well 
const NavBar = forwardRef((props, ref) => {

  const [logined, setLogined] = useState(false);
  
  useImperativeHandle(ref, () => ({
    childMethod() {
      setLogined(props.logined);
      console.log("Nav Bar updated!");
      console.log("User: ", props.username);
    },
  }));

  useEffect(() => {
    setLogined(props.logined)
  }, [props.logined])
  
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
    {!logined ? (
    <>
      <a href="/logingui">Login</a>
      <a href="/signupgui">Signup</a>
    </>
    ) : null}
      <a className="verticalLine"href="/logout">Logout</a>
    </div>
  </div>
  );
});

export default NavBar;