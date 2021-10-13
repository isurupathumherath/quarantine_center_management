import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {

    const [events, setEvents] = useState([])
    const [wordEntered, setWordEntered] = useState("");

    function getEvents() {
        axios.get("http://localhost:8000/attendance/").then((res) => {
            const data = res.data.map(e => {
                return {
                    start: new Date(e.date),
                    end: new Date(e.date),
                    title: e.employeeId + "-" + e.inTime,
                }
            })
            setEvents(data);
        }).catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        getEvents();
    }, [])


    return <div>
        <div><br />
            <br />
            <div>
                <h2 align="center" /><span style={{ marginLeft: '200px' }} />
            </div>
            <br />
            <div style={{ width: '75%', marginLeft: '20%' }}>

                <div className="container border"
                    style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "30px",
                        width: '100%',
                        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8upjR43SJw64B4P0AOiGJR9s_4eg8pyrPw&usqp=CAU')`,
                    }}
                >

                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 550, fontSize: '14px' }}
                    />
                </div>
                <br />
            </div>
        </div>
    </div>
}

export const EventCalendar = () => {
    return <MyCalendar />
}

export default EventCalendar;
