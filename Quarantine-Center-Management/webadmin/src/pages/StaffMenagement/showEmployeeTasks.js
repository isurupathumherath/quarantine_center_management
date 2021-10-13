/*
    Created by - Isuru Pathum Herath
    On - 12/09/2021
    Name - singleStaffMember
    Last Update - 12/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/HRM/staffProfile.css';

const App = props => {

    // state
    const [staffMembers, setStaffMembers] = useState([]);
    const [staffTask, setTasks] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    //Fetch All Salary Details
    const fetchTaskDetails = () => {
        axios.get("http://localhost:8000/task/")
            .then(response => {
                console.log(response)
                setTasks(response.data)

            })
            .catch(error => alert("Error Fetching Tasks"));
    }

    useEffect(() => {
        console.log(props.match.params.id);
        axios
            .get(`http://localhost:8000/task/`)
            .then(response => {
                setTasks(response.data)
            })
            .catch(error => alert('Error Loading Tasks of Staff'));

        axios
            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
            .then(response => {
                setStaffMembers(response.data)
            })
            .catch(error => alert('Error Loading Staff Details'));
    }, []);


    //Filter Staff Salary
    const handleFilter = () => {
        const searchWord = props.match.params.id;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8000/task/")
            .then(response => {
                console.log(response)
                const newFilter = staffTask.filter((response) => {
                    return response.EmployeeID.toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchTaskDetails();
                } else {
                    setTasks(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    //Delete Tasks
    //Delete staff Task by Employee ID
    const deleteTask = (id) => {
        axios
            .delete(`http://localhost:8000/task/remove/${id}`)
            .then(response => {
                alert(response.data.message);
                showAll();
            })
            .catch(error => alert('Error deleting Staff Member'));
    }

    //Show All Again
    const showAll = () => {
        fetchTaskDetails();
    }

    return (
        <div className="container card" >
            <div className="card-body">
                <h1 align="center">Tasks of {staffMembers.firstName + ' ' + staffMembers.lastName}</h1><br />
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{staffMembers.firstName + ' ' + staffMembers.lastName}</h4>
                                            <p className="text-secondary mb-1">{staffMembers.type}</p>
                                            <p className="text-muted font-size-sm">{staffMembers.address}</p>
                                            {/* <button className="btn btn-info">Follow</button> <br /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8" style={{ marginTop: "10px" }}>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Staff ID</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.employeeId}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.firstName + ' ' + staffMembers.middleName + ' ' + staffMembers.lastName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.mobileNumber}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-2 col-lg-12">
                    <div style={{ marginLeft: "650px", marginRight: "30px" }}>
                        <button type="button" class="btn btn-primary" onClick={() => handleFilter()}>Show Staff Member Tasks</button>
                    </div>
                    <br />

                    <div style={{ marginLeft: "10px" }}>
                        <button type="button" class="btn btn-primary" onClick={() => showAll()}>Show All Tasks</button>
                    </div>
                    <input
                        className="form-control"
                        type="hidden"
                        placeholder="Search"
                        value={wordEntered}
                        onChange={handleFilter}
                        visibilityChange="hidden"
                        style={{ width: "100%" }}
                    />
                </div>

                <table responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px', marginRight: '40px' }}>
                    <thead>
                        <tr>
                            <th >#</th>
                            <th >Employee ID</th>
                            <th >Task Name</th>
                            <th >Priority</th>
                            <th >Status</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffTask.map((staffTask, i) => (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>

                                <td>{staffTask.EmployeeID}</td>
                                <td>{staffTask.TaskName}</td>
                                <td>{staffTask.Priority}</td>
                                <td>{staffTask.Status}</td>
                                <td>{staffTask.Description}</td>

                                <td>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() => deleteTask(staffTask._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br /><br />
            </div>
        </div>
    )
}

export default App;