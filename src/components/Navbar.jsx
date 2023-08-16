import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../src/assets/logo.jpeg'
import '../styles/NavBar.css'
// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'


const NavBar = () => {

  // const [infoRoute, setInfoRoute] = useState([])


  // const infoStation = (data) => {
  //   setInfoRoute(data.routes)
  // }

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={Logo} alt="Logo" width="100" className="logoImg d-inline-block align-text-center m-3" />
          <div>
            <h2>AA STAFFING</h2>
            <h6>Abogados Americanos</h6>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/'
              >
                Home
              </NavLink>
              {/* <a className="navLink navLinkBtns" href="#">Home</a> */}
            </li>
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/practice-area'
              >
                Practice Areas
              </NavLink>
            </li>
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/people'
              >
                People
              </NavLink>
            </li>
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/case-studies'
              >
                Case Studies
              </NavLink>
            </li>
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/news'
              >
                News
              </NavLink>
            </li>
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/contact'
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item navItemBtns">
              <NavLink
                className={({isActive}) => isActive ? "navLinkBtns active" : "navLinkBtns"} 
                to='/about'
              >
                About
              </NavLink>
            </li>
          
            {/* <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
                Finch Station List
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {
                  // Render the stops list
                  stops.map((stop) => {
                    return (
                      <StopBtn
                        key={uuidv4()}
                        stop={stop}
                        infoStation={infoStation}
                      />
                    );
                  })
                }
              </ul>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar