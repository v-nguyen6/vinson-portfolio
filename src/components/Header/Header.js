import React from 'react';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
      <div className="main"> 
        <Navbar />

        <div className="name">
          <p>Looking For A Designer</p>

          <h1>I'm <span>Vinson</span> Nguyen</h1>

          <p className="details">
          I'm a Technical Web Dev Student at BCIT with a background in graphic design and UX/UI. 
          Currently working in the finance industry with a whole lot of passion for consumer tech, dogs, watching movies and finding new food places around Vancouver. 
          As I am enrolled in the Technical Web Design Program in BCIT, I plan to cultivate my coding skills and develop my creativity on the Front-End of Web Development.
          </p>

          <div className="header-btns">
            <a href="#" className="btn-1">Hire Me!</a>
            <a href="#" className="btn-2">Download Resume</a>
          </div>

        </div>
        <div className="arrow"></div>
      </div>
    )
}

export default Header