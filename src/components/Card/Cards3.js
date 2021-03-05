// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

function Cards3(props) {
    return (
        <div className="work-box">
            {/*Image*/}
            <div className="work-box-img">
                <div className="work-type">
                  {props.stype}
                </div>
                <img src={props.simage} alt="work-image"/>
            </div>

            {/*Description*/}
            <div className="work-box-text">
                {props.sdescription}
            </div>

            {/*Buttons*/}
            <div className="work-box-buttons">
              <a href="https://etoile.bcitwebdeveloper.ca/" className="work-btn-3">View Live</a>
              <Link className="work-btn-2" to={'/etoile'}>Learn More</Link>
            </div>

        </div>
    )
}

export default Cards3