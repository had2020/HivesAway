// src/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import FlaskAddress from '../components/flaskip';
import ButtonComponent from '../components/ButtonComponent';
import Nav_bar from '../components/Nav_bar';

// styling
import './styles/Home.css';
const Home = () => {
  const flaskurl = FlaskAddress(); // adding global address for flask
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav_bar></Nav_bar>
      <div>
        <h1 className='AppName'>HivesAway</h1>
        <p className='AboutText'>Do you have constant issues with Hives? <br /> </p>
        <p className='AboutText'>Or any other allergy problems? <br /> </p>
        <p className='AboutText'>It's likely due to something you ate! <br /> </p>
        <p className='AboutText'>Try using HivesAway to track your diet.</p>
      </div>
      <div>
        <p> Todo put stats here or somthing</p>
      </div>
      <div className='Panel1'>
        <h1 style={{ textAlign: "center" }}>Sign In to give HivesAway a try!</h1>
      </div>
      <div className='signupbutton'>
        <a href='/login'>Sign Up</a>
      </div>
    </>
  );
}

export default Home;

/* Todo: use navlink to make navbar and box1 button change based on login status and page status */

/* old send data button code TODO: finish impementation in tool
  <ButtonComponent address_var={flaskurl} />
*/

/* old code to send an image TODO: finish impementation in tool
  <div class="todo">
            <h2>Send an Image</h2>
            <Upload_button address_var={flaskurl} />
          </div>
*/

/* old react test button
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>
*/