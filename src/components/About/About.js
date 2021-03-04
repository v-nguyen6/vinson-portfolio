// Dependencies
import React from 'react';
// Components
import NavAbout from '../NavBar/NavAbout';
import Footer from '../Footer/Footer';
// Includes
import headshot from '../../images/vinson-headshot.jpg';

function About () {
  return (
    <div>
      <NavAbout />
      <div className="about">

        <div className="about-headshot">
          <img src={headshot} alt="About Page Headshot Image"/>
        </div>

        <div className="about-content">
          <h1>Vinson Nguyen</h1>
          <p>
            My training and experience at BCIT’s Technical Web development program, an intensive program combining current web design technologies with challenging assignments, structured projects, and industry experiences, has allowed me to become a well-rounded and detailed oriented front-end programmer
             with fundamentals in HTML, CSS, and JavaScript. My experience with the Interactive Arts and Technology program at Simon Fraser University allowed me to grow and cultivate my background in UX/UI design as well as build a solid foundation in graphic design. This is due to the nature of SIAT as it
              is an interdisciplinary program that covers end-to-end topics in the design process which included courses within design methodologies, product design, user experience design, interface design, and designing/developing for the web. Both programs as well focussed specifically on the implementation 
              of new technologies with emphasis on collaborative cross-disciplinary teamwork, allowing me to have more than enough experience being able to communicate and work in a collaborative setting.
          </p>

          <div className="about-stacks">
            <div className="tech-stack">
              <h2>Tech Stack</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Sass</li>
                <li>PHP</li>
                <li>mySQl</li>
                <li>React </li>
                <li>Wordpress</li>
              </ul>
            </div>
            <div className="design-stack">
              <h2>Design Stack</h2>
              <ul>
                <li>InDesign</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>AdobeXD</li>
                <li>Figma</li>
                <li>InVision</li>
              </ul>
            </div>
          </div>

          <div className="contact-options">
            <ul>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Github</li>
              <li>Email</li>
            </ul>
          </div>
        
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About