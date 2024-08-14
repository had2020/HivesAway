import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'//Todo change all this later
import './App.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

// pages
import Home from './pages/Home';
import Not_Found from './pages/Not_Found';
import Tool from './pages/Tool';
import Login from './pages/Login';
import Contact from './pages/contact';
import Logingui from './pages/logingui';
import Signupgui from './pages/signupgui';

// components
import Nav_bar from './components/Nav_bar';

function App() {
  // session state
  let sessionUser = '';
  let sessionPass = '';
  const [sessionUser1, setSessionUser1] = useState('');
  const [sessionPass1, setSessionPass1] = useState('');

  // account state
  let [account, setAccount] = useState('');
  let let_account = '';

  // cookies
  const [cookieValue, setCookieValue] = useState('');
  const [cookieValue2, setCookieValue2] = useState('');

  // save current account
  const save_current_account = (data) => {
    setAccount(data);
    sessionStorage.setItem("account", let_account);
  }

  const grab_account = () => {
    console.log("grab account")
    account = setAccount(sessionStorage.getItem("account"));
    console.log("current account: ",let_account);
    handleGetCookie();
    grab_current_session_account();
  }

  const grab_current_session_account = () => {
    sessionUser = sessionStorage.getItem("Username");
    sessionPass = sessionStorage.getItem("Password");
    console.log("Current session: ", sessionUser, sessionPass);
    setSessionUser1(sessionUser);
    setSessionPass1(sessionPass);
  }

  const handleGetCookie = () => {
    const user = Cookies.get('username');
    setCookieValue(user);
    const pass = Cookies.get('password');
    setCookieValue2(pass);
    console.log("Current cookie: ", user, pass);
  };

  // Runtime code
  useEffect(() => {
    grab_account();
  }, []);

  //debug return code for cookie and session tests
  //return <h1>Current Account: cookie: {cookieValue} {cookieValue2} current session: {sessionUser} {sessionPass}</h1>
  //<button onClick={grab_account}>Grab Account</button>


  //TODO ADD CURRENT COOKIE FOR LOGIN
  return (
    <>
      <Nav_bar username={sessionUser1} password={sessionPass1}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Not_Found" element={<Not_Found />} />
          <Route path="/logingui" element={<Logingui onUplift={save_current_account}/>} />
          <Route path="/signupgui" element={<Signupgui onUplift={save_current_account}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
