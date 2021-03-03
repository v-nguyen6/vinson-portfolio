import React from 'react';
//import logo from './images/logo.png';

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')


function Navbar() {
    return (
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">Vinson Nguyen</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link active">About</a></li>
            <li className="nav__item"><a href="#" className="nav__link active">Work</a></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
          </label>
        </div>
      </nav>
    )
}

export default Navbar

