import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'//Todo change all this later
import './App.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Not_Found from './pages/Not_Found';
import Tool from './pages/Tool';
import Login from './pages/Login';
import Contact from './pages/contact';
import Logingui from './pages/logingui';
import Signupgui from './pages/signupgui';


function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Not_Found" element={<Not_Found />} />
          <Route path="/logingui" element={<Logingui />} />
          <Route path="/signupgui" element={<Signupgui />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
