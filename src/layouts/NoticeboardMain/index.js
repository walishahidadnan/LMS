import React from 'react'

import "./NoticeboardMain.css";
// import Icon
import {UserOutlined} from "@ant-design/icons";
// import page
import Noticeboard from "../../layouts/Noticeboard/index.js"

function index() {
    return (
        <div className="row">
             {/* code of Noticeboard */}
             <div className="Noticeboard-head">
                    <h3>Noticeboard</h3>
                    <p>Latest Notices</p>
            </div>
                <Noticeboard
                    para1="Addition of New Features to LMS,"
                    para2="Dear Faculty members and Students,"
                    para3="We have added very some interseting new features..."
                    btn="Read More >"
                    year="Added: 1 year Ago"
                    icn={<UserOutlined className="icon"/>}
                    para4=" Dr. Aftab Ahmad Khan"
                    id="card-1"
                />
                <Noticeboard
                    para1="Addition of New Features to LMS,"
                    para2="Dear Faculty members and Students,"
                    para3="We have added very some interseting new features..."
                    btn="Read More >"
                    year="Added: 1 year Ago"
                    icn={<UserOutlined className="icon"/>}
                    para4=" Dr. Aftab Ahmad Khan"
                    id="card-2"
                />
                <Noticeboard
                    para1="Addition of New Features to LMS,"
                    para2="Dear Faculty members and Students,"
                    para3="We have added very some interseting new features..."
                    btn="Read More >"
                    year="Added: 1 year Ago"
                    icn={<UserOutlined className="icon"/>}
                    para4=" Dr. Aftab Ahmad Khan"
                    id="card-3"
                />
        </div>
    )
}

export default index;
