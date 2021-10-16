/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - updateStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { authenticate, getUser } from './staffHelper'
import moment from 'moment';

const UpdateStaffMember = props => {
    // state
    const [staffMembers, setStaffMembers] = useState([]);
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
        profileURL: '',
        uname: '',
        pswd: '',
    });

    const employeeID = getUser();

    //destructure values from state
    const { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus, username, password, confirmPassword, profileURL, uname, pswd } = state;

    console.log(`PROP TEST: ${props.match.params._id}`)

    useEffect(() => {
        axios
            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
            .then(response => {
                console.log(response);
                setStaffMembers(response.data);
                const { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus, profileURL } = response.data
                setState({ ...state, firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus, profileURL })
            })
            .catch(error => alert('Error Loading Update Staff'));
    }, []);

    const showUpdateForm = () => (
        <div className="card container">
            <div className="card-body" >
                <form onSubmit={handleSubmit}>
                    <br />
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
                        <button className="btn btn-primary btn-lg btn-block">Update General Details</button>
                    </div>


                </form>
                <br />
                <br />
                <br />
                <form onSubmit={handleAuth}>
                    <h3>Authentication Details</h3>
                    <br />
                    <div class="row">
                        {/* <div class="col">
                            <div className="form-group">
                                <label className="text-muted">New Username</label>
                                <input style={{ textAlign: "center" }} onChange={handleChange('username')} value={username} type="text" className="form-control" placeholder="Enter Your New Username" pattern="[A-Za-z0-9]{1,50}" title="Characters can only be A-Z and a-z and must be less than 50 characters." required />
                            </div>
                        </div> */}
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
                            <button className="btn btn-primary btn-lg btn-block">Update General Details</button>
                        </div>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.table({ firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, profileURL })
        axios
            .put(`http://localhost:8000/employee/update/${props.match.params.id}`, { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, profileURL })
            .then(response => {

                console.log(response)
                const { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, profileURL } = response.data

                //empty state
                setState({ ...state, firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, profileURL });
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

    const handleAuth = event => {
        event.preventDefault()
        console.table({ username, password })
        if (password == confirmPassword) {
            axios
                .put(`http://localhost:8000/employee/staffAuth/${props.match.params.id}`, { password })
                .then(response => {

                    console.log(response)
                    if (response.data == '') {
                        Swal.fire({
                            title: 'Change Failed!',
                            text: 'Username is already in use!',
                            icon: 'error',
                            confirmButtonText: 'Try again'
                        });
                    }
                    else {
                        //show success alert
                        // alert(`Employee ${response.data.firstName} is Created`);
                        Swal.fire(
                            `New Username & Password Added`,
                            'Click Ok to continue',
                            'success'
                        )

                        axios
                            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
                            .then(response => {
                                // console.log(response)
                                setStaffMembers(response.data)
                            })
                            .catch(error => alert('Error Loading Staff Member Details'));

                        //Send Activated Message via an Email

                        const sendEmail = response.data.email;
                        const username = response.data.username;

                        async function main() {
                            var transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                    user: process.env.MAIL_SERVER_USERNAME,
                                    pass: process.env.MAIL_SERVER_PASSWORD
                                }
                            });

                            var mailOptions = {
                                from: 'quarantine@out.com',
                                to: `${sendEmail}`,
                                subject: 'Your Account Activated',
                                text: `
                            Hi
                        
                            Your account under username - ${username} has been changed password If it is not you please contact administrator.
   
                            This is an auto generated email. If you have any issue with login to the system feel free to contact the support center 0761714844
                            
                            Thank You`
                            };

                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                        }

                        //empty state
                        setState({
                            ...state,
                            username: "",
                            password: "",
                            confirmPassword: "",

                        });

                    }
                    const { username, password } = response.data

                    //empty state
                    setState({ ...state, username, password });
                    //show success alert
                    // alert(`Staff Member ${firstName} is Updated`);
                    Swal.fire(
                        `Staff Member ${firstName} is Authentication Details Updated`,
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
        } else {
            Swal.fire({
                icon: 'error',
                title: `Passwords are not matched`,
                // text: `${error.response.data.error}`,
                footer: 'Please try again'
            })
        }

    };

    return (

        <div className="card bg-light mb-3" style={{ marginLeft: "-150px", marginTop: "-100px" }}>
            <br />
            <div className="card-body"></div>
            <div className="container">
                <br />
                <h1 align="center">UPDATE STAFF MEMBER</h1>

                {showUpdateForm()}
                <div>
                    <a className="btn btn-danger btn-lg btn-block" href={`/staffLandingPage/${employeeID}`} style={{ textDecoration: 'none' }}>
                        <i class="">Go Back</i>&nbsp;
                    </a>
                </div>
                <br /><br /><br />

                <br />
            </div>


        </div>
    )
}

export default UpdateStaffMember;