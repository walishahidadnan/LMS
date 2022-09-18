import React from 'react';

import "./Home.css";

// imports icons
// 
// import components
import Header from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/index";

// import pages
import Routing from '../Navigation';
function Home() {
    return (
        <div>
            {/* header is here */}
            <div>
                <Header />
            </div>

              {/* Sidebar is here */}
            <div className="Main-Div">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="Dashboard">
                      <Routing/>  
                </div>
            </div>
        </div>
    )
}

export default Home;




  

 
