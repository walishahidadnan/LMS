import React from 'react';

import { Switch, Route, Redirect } from "react-router-dom";

// import pages
import DashboardMain from '../DashboardMain/index.js';
import NoticeboardMain from '../NoticeboardMain/index.js';
import CoursesMain from '../CoursesMain/index.js';
import TimetableMain from '../TimetableMain/index.js';
import FormInput from '../FormInput/index.js';

function Routing() {
    return (
        <div>
            <Switch>
                <Route exact path="/Home/Dashboard" component={DashboardMain} />
                <Route path="/Home/Noticeboard" component={NoticeboardMain} />
                <Route path="/Home/Courses" component={CoursesMain} />
                <Route path="/Home/Timetable" component={TimetableMain} />
                <Route path="/Home/Form" component={FormInput} />

                <Redirect to="/Home/Dashboard"/>
            </Switch>
        </div>
    )
}

export default Routing;
