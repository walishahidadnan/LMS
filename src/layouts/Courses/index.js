import React from 'react';

import "./Courses.css";

function index(props) {
    return (
        <div>
            <div className="Courses-heading">
                <h3>{props.heading}</h3>
                <p>{props.texting}</p>
            </div>
        </div>
    )
}

export default index;
