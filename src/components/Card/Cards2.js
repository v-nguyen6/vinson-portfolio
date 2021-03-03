// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

function Cards2(props) {
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
              <a href="https://github.com/v-nguyen6/movie-app-v3" className="work-btn-3">View Live</a>
              <Link className="work-btn-2" to={'/works/react'}>Learn More</Link>
            </div>

        </div>
    )
}

export default Cards2