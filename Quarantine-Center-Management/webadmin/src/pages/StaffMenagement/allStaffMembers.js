/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect, Table} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const App = () => {

    const[staffMembers, setStaffMembers] = useState([])

    //Fetch All staf Members
    const fetchStaffMembers = () => {
        axios.get("http://localhost:8000/employee/all-employees")
        .then(response => {
            console.log(response)
            setStaffMembers(response.data)
        })
        .catch(error => alert("Error Fetching Staff Members"));
    }

    //Delete staff Member by ID
    const deleteStaffMember = (employeeId) => {
        axios
        .delete(`http://localhost:8000/employee/remove/${employeeId}`)
        .then(response => {
            alert(response.data.message);
            fetchStaffMembers();
        })
        .catch(error => alert('Error deleting Staff Member'));
    }

    useEffect(() => {
        fetchStaffMembers();
    }, [])

    return (
        <div>
            <h1 align="center">Staff Members</h1>
            <br/>
            <table responsive className="table table-hover" style={{marginTop:'40px', marginLeft:'40px'}}>
            <thead>
                <tr>
                    <th >#</th>
                    <th >Employee ID</th>
                    <th >First Name</th>
                    <th >Last Name</th>
                    <th >Employee Type</th>
                    <th >NIC Number</th>
                    <th >Email Address</th>
                    <th >Mobile Number</th>
                    <th >Added At</th>
                </tr>
            </thead>
            <tbody>
            {staffMembers.map((staffMembers, i) => (
                <tr key={i}>
                <th scope="row">{i+1}</th>
                
                <a href={`/#/${staffMembers._id}`} style={{textDecoration:'none'}}>
                    <td>{staffMembers.employeeId}</td>
                </a>
                
                <td>{staffMembers.firstName}</td>
                <td>{staffMembers.lastName}</td>
                <td>{staffMembers.type}</td>
                <td>{staffMembers.NIC}</td>
                <td>{staffMembers.email}</td>
                <td>{staffMembers.mobileNumber}</td>
                <td>{staffMembers.createdAt}</td>
               
                <td>
                  <a className="btn btn-warning" href={`/updateStaffMember/${staffMembers.employeeId}`}>
                    <i className="fas fa-edit"></i>&nbsp;
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => deleteStaffMember(staffMembers.employeeId)}>
                    <i className="far fa-trash-alt"></i>&nbsp;
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
            </table>
        </div>
    )

}

export default App;