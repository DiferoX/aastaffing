import React from 'react'
import './Navbar.css'
import logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          Bootstrap
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({isActive}) => isActive ? "active" : ""} 
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({isActive}) => isActive ? "active" : ""} 
                to='/about'
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


{/* <nav className='navigation navbar navbar-expand-lg navbar-light'>
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
          <NavLink
            className={({isActive}) => isActive ? "active" : ""} 
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav> */}
