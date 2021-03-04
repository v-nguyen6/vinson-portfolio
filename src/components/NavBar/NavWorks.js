// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Includes
import logo from '../../images/logo.png'

function NavWorks() {
    return (
      <nav>
        <NavLink className="logo" to={'/'}>
          <img src={logo} alt="Logo"/>
        </NavLink>

        {/*Allows Hamburger Menu to appear because it is a button*/}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        
        {/*Hamburger Menu Icon*/}
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        
        {/*Nav Bar Links*/}
        <ul className="menu">
          <li>
            <NavLink className="nav-effect-about" to={'/about'}>About</NavLink>
            {/*<a href="#header" className="nav-effect">Home</a>*/}
          </li>
        </ul> 

      </nav>
    )
}

export default NavWorks


