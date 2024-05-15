import React from 'react';

import "./sidebar.css";

import { Link } from 'react-router-dom';

// import icons
import { HomeFilled, AliyunOutlined, TransactionOutlined, TagFilled, RightOutlined, ContainerFilled, ReadFilled, CalendarFilled, BookFilled } from '@ant-design/icons';


function Sidebar() {
    return (
        <div>
            <ul>
                <li >
                    <Link to="/Home/dashboard">
                        <HomeFilled className="Icn" />
                        dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/Home/noticeboard">
                        <ContainerFilled className="Icn" />
                        noticeboard
                    </Link>
                </li>

                <li>
                    <Link to="/Home/courses">
                    <BookFilled className="Icn" />
                        courses &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <RightOutlined className="right-Icn" />
                    </Link>
                </li>

                <li>
                    <Link to="/Home/timetable">
                    <CalendarFilled className="Icn" />
                        timetable &nbsp;&nbsp;&nbsp;&nbsp;<RightOutlined className="right-Icn" />
                    </Link>
                </li>
                <li>
                    <Link to="/Home/form">
                    <AliyunOutlined className="Icn" />
                       form &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RightOutlined className="right-Icn" />
                    </Link>
                </li>
                
                <li><a href="#6"> <BookFilled className="Icn" /> examination <RightOutlined className="right-Icn" /> </a> </li>
                <li><a href="#7"> <ReadFilled className="Icn" /> surveys &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <RightOutlined className="right-Icn" /> </a> </li>
                <li><a href="#8"> <TransactionOutlined className="Icn" /> complaints </a></li>
                <li><a href="#9"> <TagFilled className="Icn" /> projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <RightOutlined className="right-Icn" /> </a></li>
            </ul>
        </div>
    )
}

export default Sidebar;
