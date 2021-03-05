// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
// Components
import NavWorks from '../NavBar/NavWorks';
import Footer from '../Footer/Footer';
// Includes
import headimg from '../../images/works-portfolio-2.png';
import portwire1 from '../../images/portfolio-wireframes-1.png';
import portcolor from '../../images/portfolio-color-palette.png';
import portdev from '../../images/portfolio-code.png';

function PortfolioSite() {
  return (
    <div>
      <NavWorks />
      <div className="portfolio" id="header">
        
        <div className="portfolio-header">
          <img src={headimg} alt="Portfolio Header Image"/>
        </div>

        <div className="portfolio-content">
          <Fade right>
            <div className="scope">
              <h2>Scope</h2>
              <p>
                The goal of the portfolio site was to create a clean, simple and user-friendly website that includes unique elements and dynamic animations, while having a consistent layout and style throughout. 
                This project includes most of the skills I have gained so far during my tenure withing the TWD program, that in turn would be showcasing the previous web development projects that I have worked on.
              </p>
            </div>
          </Fade>

          <Fade left>
            <div className="role-stack">
              <div className="my-role">
                <h3>My Role</h3>
                <ul>
                  <li>UI Development</li>
                  <li>UX/ UI Design</li>
                  <li>Content Strategy</li>
                  <li>Information Architecture</li>
                  <li>Coding Development</li>
                </ul>
              </div>
              <div className="work-tech-stack">
                <h3>Tech Stack</h3>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React JavaScript Frameworks</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe XD</li>
                </ul>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="research-planning">
              <h2>Research & Planning Process</h2>
              <p>
                I started off the project by following linear path and steps. I started with a detailed content plan which pushed me to look back at my previous projects as well as research other front-end portfolios. 
                I then created a sitemap and information architecture which allowed me to visually map out what pages I may include and what direction I wanted to take my portfolio site. I then created wireframes with a mobile first approach in mind using Adobe XD. 
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
                My goal in my design approach was to try and build upon functionality that can be completed efficiently and effectively in React JS. In this stage of the process it was important to me that the elements that I wanted to create and include in the layout could be mapped out and or visualized as components.
              </p>
              <h3>Color Palette</h3>
              <img src={portcolor} alt="Portfolio Color Palette"/>
            </div>
          </Fade>

          <Fade right>
            <div className="development">
              <h2>Development</h2>
              <p>
                The development phase of the project was fairly straight forward due to the linear steps that I took before development. Following such a structure made each step easier as I went through my development process. 
                The main takeaway and outline of the development phase was utilizing hooks and props in order to effectively and efficiently call data from another file to be used in templates that I created to be outputted. 
                This method not only made the overall code more efficient, but was able to highlight the usefulness of React and components.
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
                As I had learned and did so much within my time at BCIT, there were so many aspects that I wanted to include within each of my works section. But due to the variations in the development and approach of each project, 
                the challenges that I faced was not being able to include everything that I had did and learned from each project. On the technical side, it was also challenging to see which parts of the code best exemplified my skills and knowledge. 
              </p>
            </div>
          </Fade>
        </div>

        <div className="site-btns">
          <Link className="site-btn-1" to={'/etoile'}>Previous Project</Link>
          <Link className="site-btn-2" to={'/react'}>Next Project</Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default PortfolioSite