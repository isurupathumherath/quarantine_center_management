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
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const App = () => {

    const [staffMembers, setStaffMembers] = useState([])
    const [wordEntered, setWordEntered] = useState("");
    const [count, setCount] = useState([]);


    //Fetch All staff Members
    const fetchStaffMembers = () => {
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                setStaffMembers(response.data)
                setCount(response.data.length);
            })
            .catch(error => alert("Error Fetching Staff Members"));
    }

    //Delete staff Member by ID
    const deleteStaffMember = (employeeId) => {
        axios
            .delete(`http://localhost:8000/employee/remove/${employeeId}`)
            .then(response => {
                // alert(response.data.message);
                Swal.fire(
                    `Staff Member ${employeeId} is Deleted`,
                    `${response.data.message}`,
                    'success'
                )
                fetchStaffMembers();
            })
            .catch(error => alert('Error deleting Staff Member'));
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
                    return response.NIC.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.employeeId.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.firstName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.middleName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.lastName.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.type.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.email.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.mobileNumber.toString().toLowerCase().includes(searchWord.toLowerCase());
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
        <div style={{}}>
            <div className="card" style={{ width: "" }}>
                <div className="card-body">
                    <h1 align="center">Staff Members</h1>
                    <br />
                    <div>
                        <center>
                            <div
                                className="border border-info"
                                style={{
                                    width: "100%",
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    borderColor: "#00408C",
                                    padding: "20px 20px 20px 20px",
                                    margin: "10px 0px 0px 0px",
                                    align: "center"
                                }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <span style={{ color: "blue" }}><h3>{count}</h3></span>
                                        <span><h3>Number of Staff Members</h3></span>
                                    </div>
                                    {/* <div className="col">
                                        <i
                                            class="fa  fa-hourglass-end"
                                            aria-hidden="true"
                                            style={{
                                                color: "blue",
                                                fontSize: "30px",
                                                marginTop: "10px",
                                            }}
                                        ></i>
                                    </div> */}
                                </div>
                            </div>
                            <form style={{ marginTop: '40px', marginLeft: '20px', marginRight: '40px', width: "100%" }}>
                                <div className="col-lg-3 mt-2 mb-2">
                                    <input
                                        className="form-control"
                                        type="search"
                                        placeholder="Search"
                                        value={wordEntered}
                                        onChange={handleFilter}
                                    />
                                </div>
                            </form>
                        </center>
                    </div>


                    <table id="table" class="table" responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px', width: '95%' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Employee Type</th>
                                <th>NIC Number</th>
                                <th>Email Address</th>
                                <th>Mobile Number</th>
                                <th></th>
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
                                    <td>{staffMembers.NIC}.{toString}</td>
                                    <td>{staffMembers.email}</td>
                                    <td>{staffMembers.mobileNumber}</td>
                                    {/* <td>{staffMembers.createdAt}</td> */}

                                    <td>
                                        <a className="" href={`/updateStaffMember/${staffMembers.employeeId}`}>
                                            <i className="fas fa-edit"></i>&nbsp;
                                        </a>
                                        &nbsp;
                                        <a className="" href="#" onClick={() => deleteStaffMember(staffMembers.employeeId)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;
                                        </a>
                                        &nbsp;
                                        <a href={`/attendance/${staffMembers.employeeId}`} style={{ textDecoration: 'none' }}>
                                            <i class="fas fa-calendar-week"></i>&nbsp;
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <div style={{ marginTop: '', marginLeft: "1030px" }}>
                        <ReactHTMLTableToExcel
                            className='btn btn-outline-success'
                            table='table'
                            filename='Staff Member Excel'
                            sheet='Sheet'
                            buttonText='Download Excel Sheet'
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default App;