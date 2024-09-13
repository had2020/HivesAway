import { useState, useEffect, useRef } from 'react'
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
import Logout from './pages/logout';

// components
import Nav_bar from './components/Nav_bar';
import Waring from './pages/waring';

function App() {
  // session state
  let sessionUser = '';
  let sessionPass = '';
  const [sessionUser1, setSessionUser1] = useState('');
  const [sessionPass1, setSessionPass1] = useState('');

  // account state
  let [account, setAccount] = useState('');
  let let_account = '';
  const [logined, setLogined] = useState(false);
  const [currentpass, setCurrentPass] = useState('');
  const [currentuser, setCurrentUser] = useState('');
  let logined_status = false;

  // cookies
  const [cookieValue, setCookieValue] = useState('');
  const [cookieValue2, setCookieValue2] = useState('');
  let cookieUser = null
  let cookiePass = null

  // save current account
  const save_current_account = (data) => {
    setAccount(data);
    sessionStorage.setItem("account", let_account);
  }

  const grab_account = () => {
    //console.log("grab account")
    account = setAccount(sessionStorage.getItem("account"));
    //console.log("current account: ",let_account);
    handleGetCookie();
    grab_current_session_account();
  }

  const grab_current_session_account = () => {
    sessionUser = sessionStorage.getItem("Username");
    sessionPass = sessionStorage.getItem("Password");
    //console.log("Current session: ", sessionUser, sessionPass);
    setSessionUser1(sessionUser);
    setSessionPass1(sessionPass);
  }

  const handleGetCookie = () => {
    const user = Cookies.get('username');
    setCookieValue(user);
    const pass = Cookies.get('password');
    setCookieValue2(pass);
    //console.log("Current cookie: ", user, pass);
    cookieUser = user
    cookiePass = pass
  };

  const vaildate_user = () => {
    //console.log("session account:", sessionUser, sessionPass);
    //console.log("cookie account:", cookieUser, cookiePass);
    if (typeof cookieUser === 'string') {
      setCurrentUser(cookieUser)
      setCurrentPass(cookiePass)
      setLogined(true);
      logined_status = true
    }
    else if (typeof sessionUser === 'string') {
      setCurrentUser(sessionUser)
      setCurrentPass(sessionPass)
      setLogined(true);
      logined_status = true
    }
  }

  useEffect(() => {
    grab_account();
    vaildate_user();
  }, []);

  const OnLogOut = () => {
    console.log("logout function updated: ", logined);
    setLogined(false);
    callChildMethod();
  }

  const OnToolPageFUNC = () => {
    grab_account();
    vaildate_user();
    console.log("tool function updated: ", logined_status);
  }

  const childRef = useRef();

  const callChildMethod = () => {
    childRef.current.childMethod();
  }

  return (
    <>
      <Nav_bar logined={logined} username={currentuser} ref={childRef}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home logined={logined}/>} />
          <Route path="/tool" element={<Tool logined_status={logined} onToolPage={OnToolPageFUNC} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logingui" element={<Logingui onUplift={save_current_account}/>} />
          <Route path="/signupgui" element={<Signupgui onUplift={save_current_account}/>} />
          <Route path="/logout" element={<Logout OnLogOut={OnLogOut}/>} />
          <Route path="/waring" element={<Waring />} />
          <Route path="*" element={<Not_Found />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
