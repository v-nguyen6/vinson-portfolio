// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
// Components
import NavWorks from '../NavBar/NavWorks';
import Footer from '../Footer/Footer';
// Includes
import headimg from '../../images/works-filmdex.png';
import filmdexmock from '../../images/filmdex-mockup.png';
import portcolor from '../../images/movie-database-color-palette.png';
import portdev from '../../images/filmdex-code.png';

function ReactSite() {
  return (
    <div>
      <NavWorks />
      <div className="portfolio" id="header">

        <div className="portfolio-header">
          <img src={headimg} alt="React Header Image"/>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-btn">
            <a href="https://github.com/v-nguyen6/movie-app-v3" className="work-btn-4">View Github</a>
            <a href="http://vnguyen.bcitwebdeveloper.ca/twd-movie-app/" className="work-btn-4">View Live</a>
          </div>

          <Fade right>
            <div className="scope">
              <h2>Scope</h2>
              <p>
                Filmdex is a movie database app that allows users to search any movie and view it’s relevant information and even add favourite movies to be stored into the local storage. 
                Filmdex was created using React Javascript Frameworks and was created with the collaborative effort of a 2-person team. The Movie Database API was used to gather all the data and information pertaining to the movies such as poster image, movie rating and other relevant movie information. 
              </p>
            </div>
          </Fade>

          <Fade left>
            <div className="role-stack">
              <div className="my-role">
                <h3>My Role</h3>
                <ul>
                  <li>Developer</li>
                  <li>UX/ UI Design</li>
                  <li>Mockup Design</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
              <div className="dev-team">
                <h3>Development Team</h3>
                <ul>
                  <li>Mina Bui</li>
                  <li>Vinson Nguyen</li>
                </ul>
              </div>
              <div className="work-tech-stack">
                <h3>Tech Stack</h3>
                <ul>
                  <li>HTML/CSS</li>
                  <li>React JavaScript Frameworks</li>
                  <li>The Movie Database API</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                </ul>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="research-planning">
              <h2>Research & Planning Process</h2>
              <p>
                High fidelity mockups were produced months before the development phase of the project. Mockups were rendered fully through Photoshop to closely resemble how design work and web development may exist in a professional working environment, 
                in which a web designer may be given a mockup through a Photoshop file and then is expected to follow the guidelines and created grids as closely as possible.  
              </p>
            </div>
          </Fade>

          <Fade left>
            <div className="design-approach">
              <h2>Design Approach</h2>
              <p>
                The Goal was to create a layout which was not only aesthetically pleasing but easy to read and view. We also wanted to incorporate as much details as possible to closely resemble the premade mockups and capture the vibe that it presented. 
              </p>
              <h3>Color Palette</h3>
              <img src={portcolor} alt="Filmdex Color Palette"/>
            </div>
          </Fade>

          <Flip left>
            <div className="portfolio-wireframes">
              <img src={filmdexmock} alt="Portfolio Wireframes - Home Page"/>
            </div>
          </Flip>

          <Fade right>
            <div className="development">
              <h2>Development</h2>
              <p>
                The project was developed using React JS while calling in data from an API from the Movie Database. The development process for the movie app was by far the most interesting as we utilized both functional components as well as class components when building the site. 
                We were looking to challenge ourselves by trying to better our understanding of React by trying to demonstrate the past of React as well as the future. 
              </p>
            </div>
          </Fade>

          <Flip left>
            <div className="dev-code">
            <img src={portdev} alt="Portfolio Development Code"/>
            </div>
          </Flip>
          
          <Fade left>
            <div className="challenges-takeaways">
              <h2>Challenges & Takeaways</h2>
              <p>
                Although it was interesting that we were able to mesh 2 different ways and approaches to React, it overall proved challenging and at times cumbersome as it made for a more complicated structure. 
                Overall this was a great learning process because we were able to develop the ability to understand which concept may be better during a specific part of development. 
              </p>
            </div>
          </Fade>
        </div>

        <div className="site-btns">
          <Link className="site-btn-1" to={'/portfolio'}>Previous Project</Link>
          <Link className="site-btn-2" to={'/etoile'}>Next Project</Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ReactSite