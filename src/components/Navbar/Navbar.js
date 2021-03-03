import React from 'react';
import logo from '../../images/logo.png'
function Navbar() {
    return (
      <nav>
        <a href="#" className="logo">
          <img src={logo} alt="Logo"/>
        </a>

        {/*Allows Hamburger Menu to appear because it is a button*/}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        
        {/*Hamburger Menu Icon*/}
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        
        {/*Nav Bar Links*/}
        <ul className="menu">
          <li><a href="#header" className="nav-effect">Home</a></li>
          <li><a href="#" className="nav-effect-about">About</a></li>
          <li><a href="#work" className="nav-effect-work">Work</a></li>
        </ul> 

      </nav>
    )
}

export default Navbar


