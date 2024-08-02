import React, { useState } from 'react';
import Cookies from 'js-cookie';

function CookieTest({Username, Password}) {
  const [cookieValue, setCookieValue] = useState(Cookies.get('user') || '');

  const handleSetCookie = () => {
    Cookies.set('user', {Username, Password}, { expires: 7 });
    setCookieValue('Username');
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
