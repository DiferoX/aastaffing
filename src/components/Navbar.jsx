import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({isActive}) => isActive ? "active" : ""} 
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
