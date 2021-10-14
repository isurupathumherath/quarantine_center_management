/*
    Created by - Isuru Pathum Herath
    On - 25/09/2021
    Name - addTaskStaffMember
    Last Update - 25/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const App = () => {

    const [staffMembers, setStaffMembers] = useState([]);
    const [staffTask, setStaffTask] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [wordEnteredStaff, setWordEnteredStaff] = useState("");

    // state
    const [state, setState] = useState({
        EmployeeID: '', TaskName: '', Priority: '', Description: '', Status: '',
    });

    //destructure values from state
    const { EmployeeID, TaskName, Status, Priority, Description } = state;


    //Fetch All staff Members
    const fetchStaffMembers = () => {
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                setStaffMembers(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Fetch All Salary Details
    const fetchTaskDetails = () => {
        axios.get("http://localhost:8000/task/")
            .then(response => {
                console.log(response)
                setStaffTask(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Delete staff Task by Employee ID
    const deleteTask = (id) => {
        axios
            .delete(`http://localhost:8000/task/remove/${id}`)
            .then(response => {
                // alert(response.data.message);
                Swal.fire(
                    `Staff Member ${response.data.EmployeeID} Salary Deleted`,
                    `${response.data.message}`,
                    'success'
                )
                fetchStaffMembers();
                fetchTaskDetails();
            })
            .catch(error => alert('Error deleting Staff Member'));
    }

    //Filter Staff Member
    const handleFilterStaff = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord);
        setWordEnteredStaff(searchWord);
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                const newFilter = staffMembers.filter((response) => {
                    return response.employeeId.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.firstName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.lastName.toLowerCase().includes(searchWord.toLowerCase());
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

    //Filter Staff Salary
    const handleFilter = (key) => {
        const searchWord = key.target.value;
        console.log(searchWord);
        setWordEntered(searchWord);
        axios.get("http://localhost:8000/task/")
            .then(response => {
                console.log(response)
                const newFilter = staffTask.filter((response) => {
                    return response.EmployeeID.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.TaskName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.Status.toLowerCase().includes(searchWord.toLowerCase())
                        ;
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchTaskDetails();
                } else {
                    setStaffTask(newFilter);
                }
            })
            .catch(error => console.log(error));
    };

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        }
    }

    //Submit Form Data
    const handleSubmit = event => {
        event.preventDefault()
        console.table({ EmployeeID, TaskName, Priority, Description, Status })
        axios.post(`http://localhost:8000/task/add`, { EmployeeID, TaskName, Priority, Description, Status })
            .then(response => {
                console.log(response)
                //show success alert
                // alert(`Salary Added for ${response.data.EmployeeID}`);
                Swal.fire(
                    `Staff Member ${response.data.EmployeeID} Salary Added`,
                    'Click OK to continue!',
                    'success'
                )
                //empty state
                setState({ ...state, EmployeeID: '', TaskName: '', Priority: '', Description: '', Status: '' });
                fetchStaffMembers();
                fetchTaskDetails();
            })
            .catch(error => {
                console.log(error.Response)
                alert(error.response.data.error)
            })
    };

    useEffect(() => {
        fetchStaffMembers();
        fetchTaskDetails();
    }, [])

    return (

        <div className="container-fluid">
            <div className="card">
                <div className="card-body">
                    <h1 align="center" style={{ marginTop: "20px" }}>Staff Member Task</h1>
                    <br />
                    {/* <center>
                        <div>
                            <img src="https://lh3.googleusercontent.com/proxy/mbw5zqLZauuEyK55SvAMFy9ocmfkXLNM85DFJgQEncskkB3ZqQCQFOl3Idpr987etcvE-961ETSbkVgCGTh2CqVXtymyaF4yLL5RXDFkbVLleIhGlIPgnEt7YSSvC17C5kOlTrTR8Q" style={{ height: 400, width: 400 }} class="img-fluid" alt="Doccure Login" />
                        </div>
                    </center> */}
                    <form onSubmit={handleSubmit} style={{ marginTop: '50px', marginLeft: '20px' }}>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Employee ID</label>
                                        <input onChange={handleChange('EmployeeID')} value={EmployeeID} type="text" className="form-control" placeholder="Enter the Employee ID" pattern="[0-9]{5}" title="Please Enter Valid Employee ID" required />
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Task Name</label>
                                        <input onChange={handleChange('TaskName')} value={TaskName} type="text" className="form-control" placeholder="Enter Task Name" required />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Task Priority</label>
                                        <select id="Priority" value={Priority} onChange={handleChange("Priority")} className="form-control">
                                            <option value="" disabled selected hidden>Select a Priority</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Status</label>
                                        <select id="Status" value={Status} onChange={handleChange("Status")} className="form-control">
                                            <option value="" disabled selected hidden>Select a Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Description</label>
                                        <textarea onChange={handleChange('Description')} value={Description} type="text" className="form-control" placeholder="Enter Description" required />
                                    </div>
                                </div>
                                <div class="col" style={{ marginTop: '30px', marginLeft: '20px' }}>
                                    <div>
                                        <button className="btn btn-primary btn-lg btn-block" style={{ width: "100px" }}>Add</button>
                                    </div>
                                </div>

                            </div>
                            <div class="row">



                            </div>
                        </div>
                    </form>

                    <hr style={{ marginLeft: '0px' }} />
                    <div class="row">
                        <div class="col">
                            <h3 align="center">Task Details</h3>
                            <form style={{ marginTop: '40px' }}>

                                <div className="input-group mb-2 col-lg-12">

                                    <input
                                        className="form-control"
                                        type="search"
                                        placeholder="Search"
                                        value={wordEntered}
                                        onChange={handleFilter}
                                        style={{ width: "100%" }}
                                    />

                                </div>
                            </form>
                            <table responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px', marginRight: '40px' }}>
                                <thead>
                                    <tr>
                                        <th >#</th>
                                        <th >Employee ID</th>
                                        <th >Task Name</th>
                                        <th >Priority</th>
                                        <th >Status</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {staffTask.map((staffTask, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            {console.log(staffTask.EmployeeID)}

                                            <a href={`/singleProfile/${staffTask.EmployeeID}`} style={{ textDecoration: 'none' }}>
                                                <td>{staffTask.EmployeeID}</td>
                                            </a>

                                            <td>
                                                <a className="" href={`/showEmployeeTask/${staffTask.EmployeeID}`}>
                                                    {staffTask.TaskName}
                                                </a>
                                            </td>

                                            <td>{staffTask.Priority}</td>
                                            <td>{staffTask.Status}</td>
                                            <td>{staffTask.Description}</td>
                                            <td>
                                                <a className="btn btn-danger" href="#" onClick={() => deleteTask(staffTask._id)}>
                                                    <i className="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div class="col">
                            <h3 align="center">Employee Details</h3>
                            <br />
                            <div className="input-group mb-2 col-lg-12" style={{ marginTop: '8px' }}>

                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    value={wordEnteredStaff}
                                    onChange={handleFilterStaff}
                                    width="100%" />

                            </div>

                            <table responsive className="table table-hover" style={{ marginTop: '40px' }}>
                                <thead>
                                    <tr>
                                        <th >#</th>
                                        <th >Employee ID</th>
                                        <th >First Name</th>
                                        <th >Last Name</th>
                                        <th >Employee Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staffMembers.map((staffMembers, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>

                                            <a href={`/singleProfile/${staffMembers.employeeId}`} style={{ textDecoration: 'none' }}>
                                                <td>{staffMembers.employeeId}</td>
                                            </a>

                                            <td>{staffMembers.firstName}</td>
                                            <td>{staffMembers.lastName}</td>
                                            <td>{staffMembers.type}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )

}

export default App;