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
  const [account, setAccount] = useState('');

  // save current account
  const save_current_account = (data) => {
    setAccount(data);
    sessionStorage.setItem("account", account);
  }

  const grab_account = () => {
    account = setAccount(sessionStorage.getItem("account"));
    //handleGetCookie();
  }

  const handleGetCookie = () => {
    const user = Cookies.get('username');
    setCookieValue(user);
    const pass = Cookies.get('password');
    setCookieValue2(pass);
  };

  return (
    <>
      <h1>Current Account {account}</h1>
      <button onClick={grab_account}>Grab Account</button>
      <Nav_bar />
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
