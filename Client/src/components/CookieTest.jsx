import React, { useState } from 'react';
import Cookies from 'js-cookie';

function CookieTest() {
  const [cookieValue, setCookieValue] = useState(Cookies.get('user') || '');

  const handleSetCookie = () => {
    Cookies.set('user', 'Test', { expires: 7 });
    setCookieValue('Test');
    console.log("worked")
  };

  const handleGetCookie = () => {
    const user = Cookies.get('user');
    setCookieValue(user);
  };

  const handleRemoveCookie = () => {
    Cookies.remove('user');
    setCookieValue('');
  };

  return (
    <div>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleGetCookie}>Get Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>
      {cookieValue}
    </div>
  );
}

export default CookieTest;

