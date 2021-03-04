// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// Components
import NavWorks from '../NavBar/NavWorks';
import Footer from '../Footer/Footer';
// Includes
import headimg from '../../images/front-capstone.png';

function EcommerceSite() {
  return (
    <div>
      <NavWorks />
      <div className="ecommerce">

        <div className="ecommerce-header">
          <img src={headimg} alt="Etoile Header Image"/>
        </div>

        <div className="ecommerce-content">

          <Fade right>
            <div className="scope">
              <h2>Scope</h2>
              <p>
                Etoile is an ecommerce site that sells custom designed clothing that allows consumers to have the ability to upload their own design for production. 
                The site was based upon and built using WordPress and Woocommerce. We created basic pages using the backend of WordPress and used PHP with WordPress specific functions to build custom post types. 
                We also used plugins such as Advanced Custom Fields to add further functionality to the site. The Woocommerce aspect of the site was used to create the overall feel of a real ecommerce site which allowed users 
                to add products to cart as well as go through the entire ordering and payment process.  
              </p>
            </div>
          </Fade>
          
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

          <div className="research-planning">
            <h2>Research & Planning Process</h2>
            <p>
              High fidelity mockups were produced months before the development phase of the project. Mockups were rendered fully through Photoshop to closely resemble how design work and web development may exist in a professional working environment, 
              in which a web designer may be given a mockup through a Photoshop file and then is expected to follow the guidelines and created grids as closely as possible.  
            </p>
          </div>

          <div className="design-approach">
            <h2>Design Approach</h2>
            <p>
              The Goal was to create a layout which was not only aesthetically pleasing but easy to read and view. We also wanted to incorporate as much details as possible to closely resemble the premade mockups and capture the vibe that it presented. 
            </p>
            <h3>Color Palette</h3>
          </div>

          <div className="development">
            <h2>Development</h2>
            <p>
              The project was developed using React JS while calling in data from an API from the Movie Database. The development process for the movie app was by far the most interesting as we utilized both functional components as well as class components when building the site. 
              We were looking to challenge ourselves by trying to better our understanding of React by trying to demonstrate the past of React as well as the future. 
            </p>
          </div>
          
          <div className="challenges-takeaways">
            <h2>Challenges & Takeaways</h2>
            <p>
              Although it was interesting that we were able to mesh 2 different ways and approaches to React, it overall proved challenging and at times cumbersome as it made for a more complicated structure. 
              Overall this was a great learning process because we were able to develop the ability to understand which concept may be better during a specific part of development. 
            </p>
          </div>
        </div>

        <div className="site-btns">
          <Link className="site-btn-1" to={'/react'}>Previous Project</Link>
          <Link className="site-btn-1" to={'/portfolio'}>Next Project</Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default EcommerceSite