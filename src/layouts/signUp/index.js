import React from 'react'
import {Link} from 'react-router-dom'
import './signup.css';

function index() {
    return (
        <div className="form">
            <div className="signup-form">
                <h3>SignUp</h3>
                <p>Please fill in this form to create an account</p>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email Adress" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Conform Password" />
                <Link to='/Login'><button type="button">SignUp</button></Link>
            </div>
        </div>
    )
}

export default index;
