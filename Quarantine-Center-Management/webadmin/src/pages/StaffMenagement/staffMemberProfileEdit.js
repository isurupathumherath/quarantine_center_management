/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - updateStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const UpdateStaffMember = props => {
    // state
    const [state, setState] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        DOB: '',
        NIC: '',
        address: '',
        type: '',
        id: '',
        accountStatus: "",
        username: '',
        password: '',
        confirmPassword: '',
    });

    //destructure values from state
    const { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus, username, password, confirmPassword } = state;

    console.log(`PROP TEST: ${props.match.params._id}`)

    useEffect(() => {
        axios
            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
            .then(response => {
                console.log(response)
                const { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus } = response.data
                setState({ ...state, firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus })
            })
            .catch(error => alert('Error Loading Update Staff'));
    }, []);

    const showUpdateForm = () => (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>General Details</h3>
                <br />
                <div class="row">
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">First Name</label>
                            <input onChange={handleChange('firstName')} value={firstName} type="text" className="form-control" placeholder="Enter the First Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Middle Name</label>
                            <input onChange={handleChange('middleName')} value={middleName} type="text" className="form-control" placeholder="Enter the Middle Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Last Name</label>
                            <input onChange={handleChange('lastName')} value={lastName} type="text" className="form-control" placeholder="Enter the Last Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Staff Member Type</label>
                            <select id="type" value={type} onChange={handleChange("type")} className="form-control">
                                <option value="" disabled selected>Select a Staff Member Type</option>
                                <option value="Attendant">Attendant</option>
                                <option value="Nurisng">Nurisng</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Mobile Number</label>
                            <input onChange={handleChange('mobileNumber')} value={mobileNumber} type="text" className="form-control" placeholder="Enter the Mobile Number" pattern="[0-9]{9,10}" title="Invalid Mobile Number." required />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Email Address</label>
                            <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="Enter the Email Address" title="Invalid Email Address." required />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Birth Day</label>
                            <input type="date" onChange={handleChange('DOB')} value={DOB} className="form-control" placeholder="Enter the Date of Birth" required />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">NIC Number</label>
                            <input onChange={handleChange("NIC")} value={NIC} type="text" className="form-control" placeholder="Enter the NIC" pattern="[0-9]{12}" title="Invalid NIC Number." required />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Account Status</label>
                            <select id="accountStatus" value={accountStatus} onChange={handleChange("accountStatus")} className="form-control">
                                <option value="" disabled selected>Select a Account Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Active">Active</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="text-muted">Address</label>
                    <textarea onChange={handleChange("address")} value={address} type="text" className="form-control" placeholder="Enter the Address" required />
                </div>
                <div>
                    <button className="btn btn-danger float-md-right">Clear</button>
                </div>
                <div>
                    <button className="btn btn-primary float-md-right">Update General Details</button>
                </div>

            </form>
            <br />
            <br />
            <br />
            <form>
                <h3>Authentication Details</h3>
                <br />
                <div class="row">
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">New Username</label>
                            <input style={{ textAlign: "center" }} onChange={handleChange('username')} value={username} type="text" className="form-control" placeholder="Enter Your New Username" pattern="[A-Za-z0-9]{1,50}" title="Characters can only be A-Z and a-z and must be less than 50 characters." required />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">New Password</label>
                            <input style={{ textAlign: "center" }} onChange={handleChange('password')} value={password} type="text" className="form-control" placeholder="Enter Your New Password" pattern="[A-Za-z0-9]{8,100}+" title="Characters can only be A-Z and a-z" />
                        </div>
                    </div>
                    <div class="col">
                        <div className="form-group">
                            <label className="text-muted">Confirm New Password</label>
                            <input style={{ textAlign: "center" }} onChange={handleChange('confirmPassword')} value={confirmPassword} type="text" className="form-control" placeholder="Enter New Password Confirmation" pattern="[A-Za-z0-9]{8,100}+" title="Characters can only be A-Z and a-z and must be less than 250 characters" required />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btn-danger float-md-right">Clear</button>
                    </div>
                    <div>
                        <button className="btn btn-primary float-md-right">Update General Details</button>
                    </div>
                </div>
                <br />
            </form>
        </div>
    )

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.table({ firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type })
        axios
            .put(`http://localhost:8000/employee/update/${props.match.params.id}`, { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type })
            .then(response => {

                console.log(response)
                const { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type } = response.data

                //empty state
                setState({ ...state, firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type });
                //show success alert
                // alert(`Staff Member ${firstName} is Updated`);
                Swal.fire(
                    `Staff Member ${firstName} is Updated`,
                    'Click Ok to continue',
                    'success'
                )
            })
            .catch(error => {
                console.log(error.Response)
                // alert(error.response.data.error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
            })
    };

    return (

        <div className="container p-5">
            <br />
            <h1 align="center">UPDATE STAFF MEMBER</h1>

            {showUpdateForm()}
            <br /><br /><br />

        </div>
    )
}

export default UpdateStaffMember;