import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './styles/UserPassForm.css';

// Components
import AccountCookies from './AccountCookies';

// TODO: ENDING BUGS
function UserPassForm({ address_var, request_type }) {
    const [signed_in, setSigned_In] = useState('');
    const [response_string, setResponseString] = useState('');
    const [error_message, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Username, setUsername] = useState(''); // State for username
    //const [Password, setPassword] = useState(''); // State for password

    const handleLogin = (response_string) => {
        //console.log(JSON.stringify(response_string)); //Testing only!
        // check response data
        if (response_string === 'yes user') {
            setIsLoggedIn(true);
            //window.location.href = "/tool";
            setSigned_In(true);
        } else if (response_string === "no user") {
            setIsLoggedIn(false);
            setErrorMessage("💁 User does not exist");
        } else if (response_string === "wrong password") {
            setIsLoggedIn(false);
            setErrorMessage("🙈 Wrong password");
        } else if (response_string === "already user") {
            setIsLoggedIn(false); 
            setErrorMessage("🏷️ Username already exists");
        } else if (response_string === "created user") {
            setIsLoggedIn(true);
            window.location.href = "/tool";
            setSigned_In(true);
        }
    };    

    useEffect(() => {
        handleLogin(response_string);
    }, [response_string]);

    const handleClick = async () => {
        if (!address_var) {
            console.error('Address variable is null or undefined');
            return;
        }
        try {
            const response = await axios.post(`${address_var}/api/submit${request_type}`, {
                username: Username, // Send username
                password: password, // Send password
            });

            setResponseString(response.data); // convert response to string?
            handleLogin();

        } catch (error) {
            console.error('Error sending data:', error);
            if (error.response) {
                console.error('Response:', error.response.data);
            }
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        //onsole.log('Username:', event.target.value); // Log change
    };

    // Password Input
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
      
    const handleChange = (event) => {
    const newValue = event.target.value; 
    setPassword(newValue); 
    //console.log('Current password:', newValue); 
    };
      
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };

    return (
        <div className='box1'>
            <div className="Panel1">
                <p style={{ textAlign: "center" }}>Enter Your Username And Password</p>
                 <p className='small-text'>👤 Username</p>
                  <input
                     type="text"
                     value={Username}
                     onChange={handleUsernameChange}
                 />
                  <p className='small-text'>🔒 Password</p>
                  <div>
                      <input
                         type={showPassword ? 'text' : 'password'}
                         value={password}
                         onChange={handleChange}
                     />
                      <button onClick={togglePasswordVisibility}>
                          {showPassword ? '◎ Hide' : '◉ Show'}
                      </button>
                  </div>
                  <button onClick={handleClick}>{request_type}</button>
                   <AccountCookies Username={Username} Password={password}/>
                   <p className='small-text'>{error_message}</p>
            </div>
        </div>
    );
}

export default UserPassForm;