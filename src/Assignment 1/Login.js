import React, { useState } from 'react'
import WelcomePage from './WelcomePage';

function Login() {
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleEmail (e){
        setEmail(e.target.value)
    }

    function handleClick(){
        setIsLoggedIn(true);
    }
  return (
        (!isLoggedIn)?
        <div>
        <label htmlFor="Email">Email</label> <br />
        <input type="email" name="Email" id="Email" onChange={handleEmail}/> <br />
        <label htmlFor="pass">Password</label> <br />
        <input type="password" name="pass" id="pass" /> <br />
        <input type="submit" value="Login"  onClick={handleClick}/>
        </div> : 
        <WelcomePage email={email}/>
  )
}

export default Login