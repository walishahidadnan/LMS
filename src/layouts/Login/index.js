import React from 'react'

import { Link } from 'react-router-dom';

import './login.css';

function index() {
    return (
        <div className="form">
            <div className="login-form">
                <h3>LogIn</h3>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email Adress" />
                <input type="password" placeholder="Password" />
                <Link to="/Home">
                    <button type="button">Login</button>
                </Link>
                <p>If you don't have an account <Link to="/signUp">click Here</Link></p>
            </div>
        </div>
    )
}

export default index;
