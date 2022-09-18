import React from 'react'

import "./Noticeboard.css";
function Noticeboard(props) {
    return (
        <div>
            <div className="box" id={props.id}>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <p className="btn">{props.btn}</p>
                <h6>{props.year}</h6>
                <hr />
                {/* <div>{props.icn}</div> */}
                <p>{props.icn}{props.para4}</p>
            </div>
        </div>
    )
}

export default Noticeboard;
