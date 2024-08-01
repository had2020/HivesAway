import React, { useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests

// Styles
import './styles/UserPassForm.css';

// components
import PasswordInput from './PasswordInput';

function UserPassForm({ address_var, request_type }) {
    const [Username, setUsername] = useState('');  // State username for data
    const [Password, setPassword] = useState('');  // State password for data

    const handleClick = async () => {
        if (!address_var) {
            console.error('Address variable is null or undefined');
            return;
        }
        try {
            const response = await axios.post(`${address_var}/api/data`, {
                data: Username,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            console.log(`${address_var}/api/data`);
            if (error.response) {
                console.error('Response:', error.response.data);
            }
        }
    };

    const handleChange = (event) => {
        setUsername(event.target.value1);
        setPassword(event.target.value2);
    };

    return (
        <div className='box1'>
            <div className="Panel1">
                <p style={{ textAlign: "center" }}>Enter Your Username And Password</p>
                <p className='small-text'>👤 Username</p>
                <input type="username" value1={Username} onChange={handleChange} />
                <p className='small-text'>🔒 Password</p>
                <input type="password" value2={Password} onChange={handleChange} />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export default UserPassForm;
