import React from 'react';

import './Dashboard.css';

function Dashboard(props) {
    return (
        <div> 
            {/* code of Dashboard is here */}
            <div className="Board" id={props.id}>
                <div>{props.icn}</div>
                <h3>{props.Name}</h3>
            </div>
        </div>
    )
}

export default Dashboard;
