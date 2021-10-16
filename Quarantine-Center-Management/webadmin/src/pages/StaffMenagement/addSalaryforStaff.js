/*
    Created by - Isuru Pathum Herath
    On - 12/09/2021
    Name - addSalaryforStaff
    Last Update - 12/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const App = () => {

    const [staffMembers, setStaffMembers] = useState([]);
    const [staffSalary, setStaffSalary] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [wordEnteredStaff, setWordEnteredStaff] = useState("");

    // state
    const [state, setState] = useState({
        EmployeeID: '', Grade: '', PerDay: '', AdditionalHour: ''
    });

    //destructure values from state
    const { EmployeeID, Grade, PerDay, AdditionalHour } = state;


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
    const fetchSalaryDetails = () => {
        axios.get("http://localhost:8000/salary/all-salary")
            .then(response => {
                console.log(response)
                setStaffSalary(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Delete staff Salary Member by Employee ID
    const deleteStaffSalaryMember = (id) => {
        axios
            .delete(`http://localhost:8000/salary/remove/${id}`)
            .then(response => {
                // alert(response.data.message);
                Swal.fire(
                    `Staff Member ${id} is Deleted`,
                    `${response.data.message}`,
                    'success'
                )
                fetchStaffMembers();
                fetchSalaryDetails();
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
                        response.lastName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.type.toLowerCase().includes(searchWord.toLowerCase());
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
        axios.get("http://localhost:8000/salary/all-salary")
            .then(response => {
                console.log(response)
                const newFilter = staffSalary.filter((response) => {
                    return response.EmployeeID.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.Grade.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.PerDay.toString().toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.AdditionalHour.toString().toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchSalaryDetails();
                } else {
                    setStaffSalary(newFilter);
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
        console.table({ EmployeeID, Grade, PerDay, AdditionalHour })
        axios.post(`http://localhost:8000/salary/add`, { EmployeeID, Grade, PerDay, AdditionalHour })
            .then(response => {
                console.log(response)
                //show success alert
                // alert(`Salary Added for ${response.data.EmployeeID}`);
                Swal.fire(
                    `Staff Member ${response.data.EmployeeID} Salary Added`,
                    'Click Ok to continue',
                    'success'
                )
                //empty state
                setState({ ...state, EmployeeID: '', Grade: '', PerDay: '', AdditionalHour: '' });
                fetchStaffMembers();
                fetchSalaryDetails();
            })
            .catch(error => {
                // console.log(error.Response)
                // alert(error.response.data.error)
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.error}`,
                    // text: `${error.response.data.error}`,
                    footer: 'Enter Valid Data'
                })
            })
    };

    useEffect(() => {
        fetchStaffMembers();
        fetchSalaryDetails();
    }, [])

    return (

        <div>
            <div className="card" style={{ width: "", marginTop: "0px" }}>
                <div className="card-body"></div>
                <h1 align="center">Staff Salary</h1>
                <br />
                <form onSubmit={handleSubmit} style={{ marginTop: '50px', marginLeft: '100px' }}>
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
                                    <label className="text-muted">Task Priority</label>
                                    <select id="Grade" value={Grade} onChange={handleChange("Grade")} className="form-control">
                                        <option value="Attendance Grade A">Attendance Grade A</option>
                                        <option value="Attendance Grade B">Attendance Grade B</option>
                                        <option value="Attendance Grade C">Attendance Grade C</option>
                                        <option value="Nurse Grade A">Nurse Grade A</option>
                                        <option value="Nurse Grade B">Nurse Grade B</option>
                                        <option value="Nurse Grade C">Nurse Grade C</option>
                                        <option value="Doctor Grade">Doctor Grade</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label className="text-muted">Salary Per Day</label>
                                    <input onChange={handleChange('PerDay')} value={PerDay} type="text" className="form-control" placeholder="Salary Per Day (Rs.)" pattern="[0-9]{0-10}" title="Please Enter Valid Salary Rate" required />
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label className="text-muted">Salary per OT hour</label>
                                    <input onChange={handleChange('AdditionalHour')} value={AdditionalHour} type="text" className="form-control" placeholder="Salary Per OT Hour (Rs.)" pattern="[0-9]{0-10}" title="Please Enter Valid Salary Rate" required />
                                </div>

                            </div>
                            <div class="col" style={{ marginTop: '30px', marginLeft: '20px' }}>
                                <div>
                                    <button type="submit" className="btn btn-primary" style={{ width: "100px" }}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <hr style={{ marginLeft: '20px' }} />
                <div class="row">
                    <div class="col">
                        <div><h3 align="center">Salary Details</h3></div>
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
                                    <th >Grade</th>
                                    <th >PerDay</th>
                                    <th >Additional Hour</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffSalary.map((staffSalary, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>

                                        <a href={`/singleProfile/${staffSalary.EmployeeID}`} style={{ textDecoration: 'none' }}>
                                            <td>{staffSalary.EmployeeID}</td>
                                        </a>

                                        <td>{staffSalary.Grade}</td>
                                        <td>{staffSalary.PerDay}</td>
                                        <td>{staffSalary.AdditionalHour}</td>

                                        <td>
                                            {/* <a className="btn btn-warning" href={`/updateStaffMember/${staffMembers.EmployeeID}`}>
                                    <i className="fa fa-check-square"></i>&nbsp;
                                </a> */}
                                            &nbsp;
                                            <a className="btn btn-danger" href="#" onClick={() => deleteStaffSalaryMember(staffSalary.EmployeeID)}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div class="col" style={{ marginTop: '0px', marginLeft: '20px' }}>
                        <div><h3 align="center">Staff Details</h3></div><br />
                        <div className="input-group mb-2 col-lg-12">

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
    )

}

export default App;