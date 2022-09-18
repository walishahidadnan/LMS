import React from 'react'
import {Link} from 'react-router-dom'
import "./DashboardMain.css";

import { ContainerFilled,FieldTimeOutlined,CalendarFilled, BookFilled, ClockCircleFilled, ReadFilled, UserOutlined, LogoutOutlined } from "@ant-design/icons";

import Dashboard from '../../layouts/Dashboard/index.js';
function index() {
    return (
        <div>
            <div className="row">
                <Link to='/Home/Dashboard'>
                    <Dashboard
                        icn={<ContainerFilled className="icon"/>}
                        Name="Noticeboard"
                        id="card1"
                    />
                </Link>
                <Dashboard
                icn={<CalendarFilled className="icon"/>}
                    Name="Academic Calendar"
                    id="card2"
                />
                <Dashboard
                    icn={<BookFilled className="icon"/>}
                    Name="Active Courses"
                    id="card3"
                />
                <Dashboard
                    icn={<FieldTimeOutlined className="icon"/>}
                    Name="Timetable"
                    id="card4"
                /> 
            </div>
            <div className="row">
                <Dashboard
                    icn={<ClockCircleFilled className="icon"/>}
                    Name="Arrange Classes"
                    id="card5"
                />
                <Dashboard
                    icn={<ReadFilled className="icon"/>}
                    Name="Library Resources"
                    id="card6"
                />
                <Dashboard
                    icn={<UserOutlined className="icon"/>}
                    Name="Profile"
                    id="card2"
                />
                <Dashboard
                    icn={<LogoutOutlined className="icon"/>}
                    Name="Logout"
                    id="card7"
                />
            </div>
        </div>
    )
}

export default index;
