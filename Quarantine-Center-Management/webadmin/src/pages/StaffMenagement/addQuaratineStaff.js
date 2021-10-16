/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const App = () => {

    const [staffMembers, setStaffMembers] = useState([])
    const [wordEntered, setWordEntered] = useState("");

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



    const handleSubmit = (employeeId) => {
        // event.preventDefault();
        // console.table({
        //     from,
        //     to,
        // });

        alert(employeeId)
        axios
            .post(`http://localhost:8000/qEmployee/add`, {
                employeeId,
                startedDate,
                endDate,
            })
            .then((response) => {
                console.log(response);
                //show success alert
                // alert(`Employee ${response.data.firstName} is Created`);
                Swal.fire(
                    `Employee ${response.data.employeeId} is Added`,
                    'Click Ok to continue',
                    'success'
                )
                //empty state
                setState({
                    ...state,
                    // startedDate: "",
                    // endDate: "",
                });
            })
            .catch((error) => {
                console.log(error.Response);
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.error}`,
                    // text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
                // alert(error.response.data.error);
            });
    };



    //Fetch All staff Members
    const fetchStaffMembers = () => {
        axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
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
                    return response.NIC.toLowerCase().includes(searchWord.toLowerCase()) ||
                        response.employeeId.toLowerCase().includes(searchWord.toLowerCase());
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
            <div className="card" style={{ width: "1400px" }}>
                <div className="card-body"></div>
                <h1 align="center">Add Quarantined Staff Member</h1>
                <br />

                <form style={{ marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}>
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
                <br />
                <table responsive className="table table-hover" style={{ marginTop: '40px', marginLeft: '20px' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Type</th>
                            <th>From</th>
                            <th>To</th>


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
                                <td />


                                <td>
                                    <a className="" href="#" onClick={() => handleSubmit(staffMembers.employeeId)}>
                                        <i class="fas fa-plus-square">&nbsp; Add</i>
                                    </a>
                                </td>
                                <td />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default App;