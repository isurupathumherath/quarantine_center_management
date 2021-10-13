import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const EventCalendar = (props) => {

    // state
    const [events, setEvents] = useState([])
    const [staffMembers, setStaffMembers] = useState([]);

    console.log(props);

    function getEvents() {
        axios.get(`http://localhost:8000/attendance/get/${props.match.params.id}`).then((res) => {
            const data = res.data.map(e => {
                return {
                    start: new Date(e.date),
                    end: new Date(e.date),
                    title: "IN" + "-" + e.inTime + " : " + "OUT" + "-" + e.outTime,
                }
            })
            setEvents(data);
        }).catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getEvents();

        axios
            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
            .then(response => {
                console.log(response)
                setStaffMembers(response.data)
            })
            .catch(error => alert('Error Loading Staff Member Details'));
    }, [])


    return (<div>
        <div className="">
            <div>
                <h1 align="center">Staff Attendance</h1><span style={{}} /><br />
                <div align="center" className="row">
                    <div className="col">
                        <h4>Name : {staffMembers.firstName + ' ' + staffMembers.middleName + ' ' + staffMembers.lastName}</h4>
                    </div>
                    <div className="col">
                        <h4>Staff ID : {staffMembers.employeeId}</h4>
                    </div>
                </div>
            </div>
            <br />
            <div className="card text-blue bg-warning mb-3" style={{ width: '100%' }}>

                <div class="card border-primary mb-3"
                    style={{
                        width: '100%',
                        height: '100%',
                        // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8upjR43SJw64B4P0AOiGJR9s_4eg8pyrPw&usqp=CAU')`,
                    }}
                >
                    <div class="card-body">

                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 550, fontSize: '14px' }}
                        />
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>

    )
}

export default EventCalendar;
