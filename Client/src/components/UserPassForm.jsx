import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import './styles/UserPassForm.css';

// Components
import AccountCookies from './AccountCookies';

// TODO: ENDING BUGS
function UserPassForm(props) {
    const [response_string, setResponseString] = useState('');
    const [error_message, setErrorMessage] = useState('');
    const [Username, setUsername] = useState(''); // State for username
    //const [Password, setPassword] = useState(''); // State for password

    const submit_login = () => {
        props.onSubmit(Username + ":" + password);
    };

    const save_session = (Current_pass, Current_user) => {
        //console.log("Current session: ", Current_user, Current_pass); debug
        sessionStorage.setItem('Username', Current_user);
        sessionStorage.setItem('Password', Current_pass);
        //console.log(sessionStorage.getItem('Username'), sessionStorage.getItem('Password')); debug
    };

    const handleLogin = (response_string) => {
        //console.log(JSON.stringify(response_string)); //Testing only!
        // check response data
        if (response_string === 'yes user') {
            save_session(password, Username);
            window.location.href = "/tool";
            submit_login();
        } else if (response_string === "no user") {
            setErrorMessage("💁 User does not exist");
        } else if (response_string === "wrong password") {
            setErrorMessage("🙈 Wrong password");
        } else if (response_string === "already user") {
            setErrorMessage("🏷️ Username already exists");
        } else if (response_string === "created user") {
            save_session(password, Username);
            window.location.href = "/tool";
            submit_login();
        }
    };    

    useEffect(() => {
        handleLogin(response_string);
    }, [response_string]);

    const handleClick = async () => {
        if (!props.address_var) {
            console.error('Address variable is null or undefined');
            return;
        }
        try {
            const response = await axios.post(`${props.address_var}/api/submit${props.request_type}`, {
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
                  <button onClick={handleClick}>{props.request_type}</button>
                   <AccountCookies Username={Username} Password={password}/>
                   <p className='small-text'>{error_message}</p>
            </div>
        </div>
    );
}

export default UserPassForm;