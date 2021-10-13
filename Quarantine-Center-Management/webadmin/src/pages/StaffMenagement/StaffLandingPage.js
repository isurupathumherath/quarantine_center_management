/*
    Created by - Isuru Pathum Herath
    On - 12/09/2021
    Name - singleStaffMember
    Last Update - 12/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { getUser, logout } from './staffHelper';
import '../../assets/HRM/staffProfile.css';
const Swal = require('sweetalert2');

const App = (props, { history }) => {

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        };
    }

    const handleSubmit = (employeeId) => {
        event.preventDefault();
        console.table({
            employeeId, date, inTime, outTime,
        });

        axios
            .post(`http://localhost:8000/attendance/add`, {
                employeeId, date, inTime, outTime
            })
            .then((response) => {
                console.log(response);
                //show success alert
                // alert(`Employee ${response.data.firstName} is Created`);
                Swal.fire(
                    `${staffMembers.firstName} is Marked`,
                    'Click Ok to continue',
                    'success'
                )
                //empty state
                setState({
                    ...state,
                    date: '', inTime: '', outTime: '',
                });
            })
            .catch((error) => {
                console.log(error.Response);
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.error}`,
                    // text: `${error.response.data.error}`,
                    footer: 'Enter Valid Data'
                })
                // alert(error.response.data.error);
            });
    };

    // state
    const [staffMembers, setStaffMembers] = useState([]);
    const [staffTask, setTasks] = useState([]);
    const [state, setState] = useState({
        dStatus: "Done",
        uStatus: "Pending",
        date: '',
        inTime: '',
        outTime: '',
    });

    //destructure values from state
    const {
        dStatus,
        uStatus,
        date,
        inTime,
        outTime
    } = state;

    //Fetch All Salary Details
    const fetchTaskDetails = () => {
        axios.get(`http://localhost:8000/task/getByEmpId/${props.match.params.id}`)
            .then(response => {
                console.log(response)
                setTasks(response.data)

            })
            .catch(error => alert("Error Fetching Tasks"));
    }

    //Mark Done
    const taskDone = (id) => {
        console.table({
            dStatus
        });

        axios
            .put(`http://localhost:8000/task/updateDone/${id}`, { dStatus })
            .then((response) => {
                // console.log(response);
                // alert("Updated");
                Swal.fire({
                    title: 'Completed',
                    text: `Task Name ${response.data.TaskName} marked as Completed`,
                    icon: 'success'
                });
                fetchTaskDetails();
            })
            .catch((error) => {
                // console.log(error.Response);
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.error}`,
                    // text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
                // alert(error.response.data.error);
            });
    }


    //Mark Pending
    const taskPending = (id) => {
        console.table({
            dStatus,
            uStatus
        });

        axios
            .put(`http://localhost:8000/task/updatePending/${id}`, { uStatus })
            .then((response) => {
                // console.log(response);
                // alert("Updated");
                Swal.fire({
                    title: 'Pending',
                    text: `Task Name ${response.data.TaskName} marked as Pending`,
                    icon: 'info'
                });
                fetchTaskDetails();
            })
            .catch((error) => {
                // console.log(error.Response);
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.error}`,
                    // text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
                // alert(error.response.data.error);
            });

    }

    //Auto refresh
    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    useEffect(() => {
        window.onload();
        fetchTaskDetails();
        axios
            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
            .then(response => {
                setStaffMembers(response.data)
            })
            .catch(error => alert('Error Loading Staff Member Details'));
    }, []);

    return (

        <div className="container my-4" >
            <div class="card bg-light mb-3">
                <br />
                <h1 align="center">{staffMembers.firstName}'s Profile</h1><br />
                <div className="main-body">
                    {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav> */}

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{staffMembers.firstName + ' ' + staffMembers.lastName}</h4>
                                            {/* <p className="text-secondary mb-1">{staffMembers.type}</p>
                                        <p className="text-muted font-size-sm">{staffMembers.address}</p> */}
                                            {/* <button className="btn btn-info">Follow</button> <br/> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Account Status</h6>
                                        <span className="text-secondary">{staffMembers.accountStatus}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Username</h6>
                                        <span className="text-secondary">{staffMembers.username}</span>
                                    </li>
                                    <br />
                                    <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info" style={{ width: "100%" }} href={`/editStaffProfile/${staffMembers.employeeId}`}>Edit</a>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="col-sm-12">
                                            {getUser() && (
                                                <a href={`/staffLogin/`} >
                                                    <li onClick={() => logout()}
                                                        className="btn btn-danger"
                                                        style={{ cursor: 'pointer', width: "100%" }}

                                                    >
                                                        Logout
                                                    </li>
                                                </a>
                                            )}
                                        </div>
                                    </div>





                                    {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                    <span className="text-secondary">https://bootdey.com</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                    <span className="text-secondary">@bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                    <span className="text-secondary">bootdey</span>
                                </li> */}
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-8">
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
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Birthday</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.DOB}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">NIC</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.NIC}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Added At</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.createdAt}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Update At</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {staffMembers.updatedAt}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card">
                <br />
                <h4 align="center">Mark Your Attendance</h4>
                <form onSubmit={handleSubmit} style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <div class="row">
                        <div class="col">
                            <div className="form-group ">
                                <label className="text-muted">Date</label>
                                <input type="date" onChange={handleChange('date')} value={date} className="form-control" placeholder="Enter the Date of Birth" required />
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-group ">
                                <label className="text-muted">In Time</label>
                                <input type="time" onChange={handleChange('inTime')} value={inTime} className="form-control" placeholder="Enter the Date of Birth" required />
                            </div>
                        </div>
                        <div class="col">
                            <div className="form-group ">
                                <label className="text-muted">Out Time</label>
                                <input type="time" onChange={handleChange('outTime')} value={outTime} className="form-control" placeholder="Enter the Date of Birth" required />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <a className="btn btn-primary btn-lg btn-block" href="#" onClick={() => handleSubmit(staffMembers.employeeId)}>
                            <i class="fas fa-check-circle">&nbsp; Mark My Attendance</i>
                        </a>
                    </div>
                    <br />
                </form>

            </div>

            <div className="card">
                <div className="card-body">
                    <h4 align="center">Your Tasks</h4>
                    <div>
                        <table responsive className="table table-hover">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Task Name</th>
                                    <th >Priority</th>
                                    <th >Status</th>
                                    <th>Description</th>
                                    <th> &nbsp;&nbsp;&nbsp;&nbsp; Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffTask.map((staffTask, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{staffTask.TaskName}</td>
                                        <td>{staffTask.Priority}</td>
                                        <td>{staffTask.Status}</td>
                                        <td>{staffTask.Description}</td>

                                        <td>
                                            &nbsp;
                                            <a className="btn btn-success" href="#" onClick={() => taskDone(staffTask._id)}>
                                                <i class="fas fa-check-circle"></i>&nbsp;
                                            </a>
                                            &nbsp;
                                            <a className="btn btn-warning" href="#" onClick={() => taskPending(staffTask._id)}>
                                                <i class="fas fa-undo-alt"></i>&nbsp;
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br /><br />
        </div >
    )
}

export default App;