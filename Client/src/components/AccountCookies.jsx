import React, { useState } from 'react';
import Cookies from 'js-cookie';

// Styles
import './styles/AccountCookies.css';

function AccountCookies({Username, Password}) {
  const [cookieValue, setCookieValue] = useState(Cookies.get('username') || '');
  const [cookieValue2, setCookieValue2] = useState(Cookies.get('password') || '');

  const handleSetCookie = () => {
    Cookies.set('username', String(Username), { expires: 180 });
    Cookies.set('password', String(Password), { expires: 180 });
    setCookieValue(Username);
    setCookieValue2(Password);
  };

  //Todo Use to find login cookies with new login
  const handleGetCookie = () => {
    const user = Cookies.get('username');
    setCookieValue(user);
    const pass = Cookies.get('password');
    setCookieValue2(pass);
  };

  //Todo Use to logout the user
  const handleRemoveCookie = () => {
    Cookies.remove('username');
    Cookies.remove('password');
    setCookieValue('');
    setCookieValue2('');
  };

  return (
    <div>
      <div className='panel2'>
      <input type="checkbox" onClick={handleSetCookie} onAbort={handleRemoveCookie}/>
      <p className='small-text2'>Remember Me!</p>
      </div>
    </div>
  );
}

export default AccountCookies;

/* For testing
      <button onClick={handleGetCookie}>Get Cookie</button>
      <button onClick={handleSetCookie}>Remove Cookie</button>
      {cookieValue}
      {cookieValue2}
*/