/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';

const App = () => {

    const [staffMembers, setStaffMembers] = useState([])
    const [wordEntered, setWordEntered] = useState("");
    const [count, setCount] = useState([]);

    // state
    const [state, setState] = useState({
        startedDate: '',
        endDate: '',
    });

    //destructure values from state
    const {
        startedDate, endDate
    } = state;

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        };
    }

    //Fetch All staff Members
    const fetchStaffMembers = () => {
        startedDate = startedDate;
        endDate = endDate;
        axios.get(`http://localhost:8000/salary/get-salary-range/${startedDate}/${endDate}`)
            .then(response => {
                console.log(response)
                setStaffMembers(response.data)
                // setCount(response.data.length);
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Filter Staff Member
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8000/qEmployee/showAll")
            .then(response => {
                console.log(response)
                const newFilter = staffMembers.filter((response) => {
                    return response.NIC.toLowerCase().includes(searchWord.toLowerCase())
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    // fetchStaffMembers();
                } else {
                    setStaffMembers(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        // fetchStaffMembers();
    }, [])

    return (
        <div style={{ marginLeft: "50px" }}>
            <div className="card" style={{ width: "1300px" }}>
                <div className="card-body">
                    <h1 align="center">Salary Calculation</h1>
                    <br />
                    <form onSubmit={fetchStaffMembers}>
                        <td>
                            <div className="form-group">
                                <input type="date" className="form-control" onChange={handleChange('startedDate')} value={startedDate} required />
                            </div>
                        </td>
                        <td>
                            <div className="form-group">
                                <input type="date" className="form-control" onChange={handleChange('endDate')} value={endDate} required />
                            </div>
                        </td>
                        <td><input type="submit" value="Submit" /></td>
                    </form>
                </div>
            </div>
        </div >
    )

}

export default App;