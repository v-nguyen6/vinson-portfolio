// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
// Components
import NavWorks from '../NavBar/NavWorks';
import Footer from '../Footer/Footer';
// Includes
import headimg from '../../images/works-etoile.png';
import portwire1 from '../../images/etoile-wireframes.png';
import portcolor from '../../images/etoile-color-palette.png';
//import portdev from '../../images/portfolio-code.png';

function EcommerceSite(props) {
  return (
    <div>
      <NavWorks />
      <div className="portfolio" id="header">

        <div className="portfolio-header">
          <img src={headimg} alt="Etoile Header Image"/>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-btn">
            <a href="https://github.com/htpwebdesign/etoile" className="work-btn-3">View Github</a>
          </div>

          <Fade right>
            <div className="scope">
              <h2>Scope</h2>
              <p>
                Etoile is an ecommerce site that sells custom designed clothing that allows consumers to have the ability to upload their own design for production. 
                The site was based upon and built using WordPress and Woocommerce. We created basic pages using the backend of WordPress and used PHP with WordPress specific functions to build custom post types. 
                We also used plugins such as Advanced Custom Fields to add further functionality to the site. The Woocommerce aspect of the site was used to create the overall feel of a real ecommerce site which allowed users 
                to add products to cart as well as go through the entire ordering and payment process.  
              </p>
              {props.scope}
            </div>
          </Fade>
          
          <Fade left>
            <div className="role-stack">
              <div className="my-role">
                <h3>My Role</h3>
                <ul>
                  <li>Graphic Design in Development Process</li>
                  <li>Information Architecture</li>
                  <li>Development</li>
                  <li>Content and Assets Management</li>
                </ul>
              </div>
              <div className="dev-team">
                <h3>Development Team</h3>
                <ul>
                  <li>Janice Lin</li>
                  <li>Mina Bui</li>
                  <li>Vinson Nguyen</li>
                </ul>
              </div>
              <div className="work-tech-stack">
                <h3>Tech Stack</h3>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>SASS</li>
                  <li>Figma</li>
                  <li>Github</li>
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
                The planning process was done linearly which helped in the efficiency and effectiveness while working in a team based collaborative setting. We started off by creating a detailed content plan followed by a site map and information architecture. Since the site would be developed using WordPress and Woocommerce, it was of utmost important to be able to identify where each page would utilise what PHP file. 
              </p>
            </div>
          </Fade>

          <Flip left>
            <div className="portfolio-wireframes">
              <img src={portwire1} alt="Portfolio Wireframes - Home Page"/>
            </div>
          </Flip>

          <Fade left>
            <div className="design-approach">
              <h2>Design Approach</h2>
              <p>
                The main goal of Etoile was to create a brand that represented all the elements that each team member loved from a clothing brand and or store and melded it into one. This direction made Etoile focus on becoming a brand that was high-end yet casual with a hint of trendy street wear inspiration. This lead to us to designing a site that focussed on showcasing the products while maintaining a simple yet elegant and minimal layout. 
              </p>
              <h3>Color Palette</h3>
              <img src={portcolor} alt="Portfolio Color Palette"/>
            </div>
          </Fade>

          <Fade right>
            <div className="development">
              <h2>Development</h2>
              <p>
                During the development of the site, it was important that the main structure of the website be done and completed first. We created an underscores theme, downloaded the proper plugins and moved onto to creating custom post types, taxonomies, and Advanced Custom Fields. Following the linear structure a base and functional site without styling was created first in order to make sure the functionality of the site was adequate before moving into the stylizing phase.
              </p>
            </div>
          </Fade>

          <Fade right>
            <div className="challenges-takeaways">
              <h2>Challenges & Takeaways</h2>
              <p>
                COMING SOON.
              </p>
            </div>
          </Fade>
        </div>

        <div className="site-btns">
          <Link className="site-btn-1" to={'/react'}>Previous Project</Link>
          <Link className="site-btn-2" to={'/portfolio'}>Next Project</Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default EcommerceSite