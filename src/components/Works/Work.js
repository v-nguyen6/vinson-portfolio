// Dependencies
import React from 'react';
import Rotate from 'react-reveal/Rotate';
// Components
import Cards1 from '../Card/Cards1';
import Cards2 from '../Card/Cards2';
import Cards3 from '../Card/Cards3';
import Data from '../Card/Data';
// Includes
import image1 from '../../images/front-portfolio.png';
import image2 from '../../images/front-moviedb.png';
import image3 from '../../images/front-capstone.png';

function Work() {
    return (
      <div className="work" id="work">
    
        <div className="work-heading">
          <h1>Work</h1>

          <p>These are some of the technical projects I've been working on...</p>
        </div>

        <div className="b-container">
          <Rotate bottom left>
            <Cards1
            // Use array and prop method to display the cards
            stype={Data[0].stype}
            simage={image1}
            sdescription={Data[0].sdescription}
            />
          </Rotate>

          <Rotate bottom left>
            <Cards2
            // Use array and prop method to display the cards
            stype={Data[1].stype}
            simage={image2}
            sdescription={Data[1].sdescription}
            />
          </Rotate>
            
          <Rotate bottom left>
            <Cards3
            // Use array and prop method to display the cards
            stype={Data[2].stype}
            simage={image3}
            sdescription={Data[2].sdescription}
            />
          </Rotate>
        </div>
        
      </div>
    )
}

export default Work