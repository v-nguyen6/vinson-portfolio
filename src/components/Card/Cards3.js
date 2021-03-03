import React from 'react';

// make sure to add props to the function
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
              <a href="https://github.com/v-nguyen6/twd_capstone_project" className="work-btn-1">View Github</a>
              <a href="#" className="work-btn-1">Learn More</a>
            </div>

        </div>
    )
}

export default Cards3