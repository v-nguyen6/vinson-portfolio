// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Includes
import logo from '../../images/logo.png'

function NavbarAbout() {
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
            {/*<NavLink className="nav-effect-work" to={'/works'}>Works</NavLink>*/}
            <NavLink className="nav-effect-work" to={'/'}>Back</NavLink>
          </li>
        </ul> 
      </nav>
    )
}

export default NavbarAbout


