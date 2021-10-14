/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect, setState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {

    const [staffMembers, setStaffMembers] = useState([])
    const [wordEntered, setWordEntered] = useState("");

    //Fetch All staff Members
    const fetchStaffMembers = () => {
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                // console.log(response)
                setStaffMembers(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Filter Staff Member
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                const newFilter = staffMembers.filter((response) => {
                    return response.firstName.toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchStaffMembers();
                } else {
                    setStaffMembers(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchStaffMembers();
    }, [])

    return (
        <div>

        </div>
    )

}

export default App;