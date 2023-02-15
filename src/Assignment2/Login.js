import React, { useState } from 'react'
import Welcome from './Welcome';
import './Login.css'


function Login() {
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleEmail(e) {
      setEmail(e.target.value);
    }

    function handleClick() {
      setIsLoggedIn(true);
    }
  return !isLoggedIn ? (
    <div className="login-form">
      <form action="" className="form">
        <h1>Log in</h1>
        <div className="label">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <p>
            Need an account? <span>Signup</span>
          </p>
        </div>
        <input type="email" onChange={handleEmail} /> <br />
        <div className="label">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <p>
            <span>Show</span>
          </p>
        </div>
        <input type="password" name="" id="" /> <br />
        <input
          type="submit"
          value="Log In"
          className="login-btn"
          onClick={handleClick}
        />
      </form>
    </div>
  ) : (
    <Welcome email={email} />
  );
}

export default Login