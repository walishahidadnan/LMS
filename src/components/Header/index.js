import React from 'react'

import "./header.css";

// import images
import logo from "../../assets/images/logo.png";
import img from "../../assets/images/copy.jpg";


function Header() {
    return (
        <div>
            {/* code of Navbar is here */}
            <div className="main">
                <div className="head">
                    <img src={logo} alt="img" style={{width:`280px`}} />
                </div>
                <div className="head-1">
                    <h2>learning management system (LMS)<sub>spring 2021</sub></h2>
                </div>
                <div className="head-2">
                    <img src={img} alt="" style={{width:`50px`, height:`50px`, borderRadius:`50%`}}/>
                </div>
            </div>
        </div>
    )
}

export default Header;
