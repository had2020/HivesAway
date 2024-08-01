import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
      />
      <button onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordInput;