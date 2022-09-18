import React from 'react'

import {Switch, Route, Redirect} from "react-router-dom"
import Login from '../Login/index.js';
import SignUp from '../signUp/index.js';
import Home from '../Home/index.js';
function Authentation() {
    return (
        <div>
            <Switch>
                <Route path="/Login" exact component={Login} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/Home" component={Home} />

                <Redirect to="/Login"/>

            </Switch>
        </div>
    )
}

export default Authentation;
