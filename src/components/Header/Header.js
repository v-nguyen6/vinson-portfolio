import React from 'react';
import Navbar from '../Navbar/Navbar';
import Bounce from 'react-reveal/Bounce';

function Header() {
    return (
      <div> 
        <Navbar />
        <div className="main" id="header">
          <div className="header-left">
            <div className="header-name1">
              <h1>Vinson</h1>
            </div>
            <div className="header-name2">
              <h1>Nguyen.</h1>
            </div>

            {/*Name Underline*/}
            <div className="header-name-underline"></div>

            <div className="header-btns">
              <a href="#" className="btn-1">My Story</a>
              {/*Make a media query to only show in desktop mode*/}
              <a href="#" className="btn-2">Download Resume</a>
            </div>
          </div>

          <div className="header-right">
            <div className="header-role">
              <h3>Graphic Designer and Front-End Developer, based in Vancouver.</h3>
            </div>

            <div className="header-description">
              <p>
                I'm a Technical Web Dev Student at BCIT with a background in graphic design and UX/UI. 
                Currently working in the finance industry with a whole lot of passion for consumer tech, dogs, watching movies and finding new food places around Vancouver.
              </p>
            </div>
          </div>
        </div>

        {/*About Page button*/}
        <Bounce top>
          <div className="arrow"></div>
        </Bounce>
      </div>
    )
}

export default Header
