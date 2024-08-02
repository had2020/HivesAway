import React, { useState } from 'react';
import axios from 'axios';

// Styles
import './styles/UserPassForm.css';

// Components
import PasswordInput from './PasswordInput';

function UserPassForm({ address_var }) {
    const [Username, setUsername] = useState(''); // State for username
    const [Password, setPassword] = useState(''); // State for password

    const handleClick = async () => {
        if (!address_var) {
            console.error('Address variable is null or undefined');
            return;
        }
        try {
            const response = await axios.post(`${address_var}/api/submit_login`, {
                username: Username, // Send both username and password if needed
                password: Password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            if (error.response) {
                console.error('Response:', error.response.data);
            }
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.log('Username:', event.target.value); // Log username on change
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('Password:', event.target.value); // Log password on change
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
                <PasswordInput
                    value={Password}
                    onChange={handlePasswordChange}
                />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export default UserPassForm;