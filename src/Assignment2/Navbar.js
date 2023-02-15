import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="left">
            <button className='btn'>Tutorials</button>
            <button className='btn'>References</button>
            <button className='btn'>Excersises</button>
            <button className='btn'>Sign Up</button>
        </div>
        <div className="right">
            <button className="pro btn">Pro</button>
            <button className="certified btn">Get Certified</button>
            <button className="create btn">Create Website</button>
            <NavLink to='/login' className="login btn"> Login </NavLink>
        </div>
    </div>
  )
}

export default Navbar