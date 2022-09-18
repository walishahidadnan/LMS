import React from 'react'

import "./Timetable.css";

function index() {
    return (
        <div>
            {/* code of table is here */}
            <table>
                <tr>
                    <th>#</th>
                    <th>Day/Date</th>
                    <th>Course</th>
                    <th>Time</th>
                    <th>Venue</th>
                </tr>
                <tr>
                    <td >1</td>
                    <td>Monday</td>
                    <td >Artifical Intelligence | CS-56</td>
                    <td >1:00 PM to 3:00 PM</td>
                    <td >Lab 2</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>Tuesday</td>
                    <td >Artifical Intelligence | CS-56</td>
                    <td >1:00 PM to 3:00 PM</td>
                    <td >Lab 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Wednesday</td>
                    <td>Artifical Intelligence | CS-56</td>
                    <td>1:00 PM to 3:00 PM</td>
                    <td>Lab 3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Monday</td>
                    <td>Computer Networking | CS-303</td>
                    <td>11:00 AM to 12:00 PM</td>
                    <td>Room 210</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Tuesday</td>
                    <td>Computer Networking | CS-303</td>
                    <td>11:00 AM to 12:00 PM</td>
                    <td>Room 210</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Wednesday</td>
                    <td>Computer Networking | CS-303</td>
                    <td>11:00 AM to 12:00 PM</td>
                    <td>Room 210</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Monday</td>
                    <td>Machine Learning | CS-045</td>
                    <td>1:00 PM to 3:00 PM</td>
                    <td>Lab 2</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Tuesday</td>
                    <td>Computer Networking | CS-303</td>
                    <td>11:00 AM to 12:00 PM</td>
                    <td>Lab 1</td>
                </tr>
            </table>
        </div>
    )
}

export default index;
