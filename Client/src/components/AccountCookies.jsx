import React, { useState } from 'react';
import Cookies from 'js-cookie';

function CookieTest({Username, Password, log_status}) {
  const [cookieValue, setCookieValue] = useState(Cookies.get('username') || '');
  const [cookieValue2, setCookieValue2] = useState(Cookies.get('password') || '');

  const handleSetCookie = () => {
    Cookies.set('username', 'username', { expires: 180 });
    Cookies.set('password', 'password', { expires: 180 });
    setCookieValue(Username);
    setCookieValue2(Password);
  };

  const handleGetCookie = () => {
    const user = Cookies.get('username');
    setCookieValue(user);
  };

  const handleRemoveCookie = () => {
    Cookies.remove('username');
    setCookieValue('');
  };

  // Set cookie only if log_status is true
  if (log_status == true) {
    handleSetCookie();
    console.log("Cookie set");
  }

  return (
    <div>
      {cookieValue}
      {cookieValue2}
    </div>
  );
}

export default CookieTest;
