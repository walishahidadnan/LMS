import React from 'react'

import "./TimetableMain.css";

// import Pages
import Timetable from "../../layouts/Timetable/index.js";

function index() {
    return (
        <div>
             {/* code of Time-table */}
             <div className="Timetable-head">
                <h3>Timetable</h3>
                <p>List of classes</p>
            </div>
            <Timetable />
        </div>
    )
}

export default index;
