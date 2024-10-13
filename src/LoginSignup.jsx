import React from 'react';
import './LoginSignup.css';
import { useState } from 'react';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='login-container' >
      <div className='login-header'>
        <div className='login-text'>{action}</div>
        <div className='login-underline'></div>
      </div>
      <div className="login-inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="login-input">
            <img src="/images/person.png" alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="login-input">
          <img src="/images/email.png" alt="" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="login-input">
          <img src="/images/password.png" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="login-forgot-password">
          Lost Password?<span>Click Here!</span>
        </div>
      )}

      <div className="login-submit-container">
        <div
          className={action === "Login" ? "login-submit login-gray" : "login-submit"}
          onClick={() => { setAction("Sign Up"); }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "login-submit login-gray" : "login-submit"}
          onClick={() => { setAction("Login"); }}
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
