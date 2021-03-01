import React from 'react';
import Cards from '../Card/Cards';
import Data from '../Card/Data';
//import image1 from './Card/s1.png';
//import image2 from './Card/s2.png';
//import image3 from './Card/s3.png';

function Services() {
    return (
      <div className="service">
        <div className="service-heading">
          <h1>Services</h1>

          <p>These are the Services and Skills that I can provide to you.</p>
        </div>

        <div className="b-container">
          
          <Cards
          // Use array and prop method to display the cards
          stype={Data[0].stype}
          simage={Data[0].simage}
          sdescription={Data[0].sdescription}
          />
          <Cards
          // Use array and prop method to display the cards
          stype={Data[1].stype}
          simage={Data[1].simage}
          sdescription={Data[1].sdescription}
          />
          <Cards
          // Use array and prop method to display the cards
          stype={Data[2].stype}
          simage={Data[2].simage}
          sdescription={Data[2].sdescription}
          />

        </div>
            
      </div>
    )
}

export default Services