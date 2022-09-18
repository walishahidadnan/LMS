import React from 'react'

import "./CoursesMain.css";

// import pages
import Courses from '../../layouts/Courses/index.js';

function index() {
    return (
        <div>
             {/* code of Courses */}
             <div className="Courses-head">
                 <h3>Current Courses</h3>
            </div>
                <Courses
                    heading="Artifical Intelligence"
                    texting="Course Code: CS-506 | Course Credits: 4 | Session: Fall Admission 2018-2022 | Degree: BS Computer Science | Group: NA"
                />
                <Courses
                    heading="Computer Networks"
                    texting="Course Code: CS-506 | Course Credits: 4 | Session: Fall Admission 2018-2022 | Degree: BS Computer Science | Group: NA"
                />
                <Courses
                    heading="Machine Learning"
                    texting="Course Code: CS-506 | Course Credits: 4 | Session: Fall Admission 2018-2022 | Degree: BS Computer Science | Group: NA"
                />
                <Courses
                    heading="Visual programming"
                    texting="Course Code: CS-506 | Course Credits: 4 | Session: Fall Admission 2018-2022 | Degree: BS Computer Science | Group: NA"
                />
                <Courses
                    heading="Probability and Statistics"
                    texting="Course Code: CS-506 | Course Credits: 4 | Session: Fall Admission 2018-2022 | Degree: BS Computer Science | Group: NA"
                />
                <Courses
                    heading="Enterpreneurship"
                    texting="Course Code: CS-506 | Course Credits: 4 | Session: Fall Admission 2018-2022 | Degree: BS Computer Science | Group: NA"
                />
        </div>
    )
}

export default index;
