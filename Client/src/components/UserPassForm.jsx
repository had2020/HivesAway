import React, { useState } from 'react';
import axios from 'axios';

// Styles
import './styles/UserPassForm.css';

function UserPassForm({ address_var, request_type }) {
    let log_status = false;
    const [Username, setUsername] = useState(''); // State for username
    //const [Password, setPassword] = useState(''); // State for password

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
            console.log(response.data);

            // check response data
            if (response.data == "yes user")
                log_status = true;
                console.log(log_status);
            if (response.data == "no user")
                log_status = false;
            if (response.data == "wrong password")
                log_status = false;
            if (response.data == "user already exists")
                log_status = false;
            if (response.data == "already user")
                log_status = false; 
    
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
            </div>
        </div>
    );
}

export default UserPassForm;