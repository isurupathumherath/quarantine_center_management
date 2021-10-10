/*
    Created by - Isuru Pathum Herath
    On - 11/10/2021
    Name - addStaffMember
    Last Update - 11/10/2021
 */

import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import nodemailer from 'nodemailer';

const App = props => {
    // state
    const [staffMembers, setStaffMembers] = useState([]);
    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        accountStatus: "Active"
    });

    //destructure values from state
    const {
        username,
        password,
        confirmPassword,
        accountStatus
    } = state;

    //onChange event handler
    // const handleChange = (name) => (event) => {
    //     // console.log('name', name, 'event', event.target.value);
    //     setState({...state, [name]: event.target.value});
    // };

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.table({
            username,
            password,
            confirmPassword,
            accountStatus
        });

        if (password == confirmPassword) {
            axios
                .put(`http://localhost:8000/employee/firstLogin/${props.match.params.id}`, {
                    username,
                    password,
                    accountStatus
                })
                .then((response) => {
                    console.log(response);
                    if (response.data == "") {
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
                                console.log(response)
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
                        
                            Your account under username - ${username} has been activated successfuly.
   
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
                    //Go to Landing Page
                    setTimeout(() => { window.location.href = `/staffLandingPage/${props.match.params.id}` }, 2000);
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
        <div className="container " style={{ marginLeft: "50px" }}>
            <center>
                <div className="card" style={{ width: "50%", }}>
                    <div className="card-body"></div>
                    <h1 align="center">First Time Login</h1>
                    <br />

                    {/* {JSON.stringify(state)} */}

                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">New Username</label>
                                            <input style={{ textAlign: "center" }} onChange={handleChange('username')} value={username} type="text" className="form-control" placeholder="Enter Your New Username" pattern="[A-Za-z0-9]{1,50}" title="Characters can only be A-Z and a-z and must be less than 50 characters." required />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">New Password</label>
                                            <input style={{ textAlign: "center" }} onChange={handleChange('password')} value={password} type="text" className="form-control" placeholder="Enter Your New Password" pattern="[A-Za-z0-9]{8,100}+" title="Characters can only be A-Z and a-z" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Confirm New Password</label>
                                            <input style={{ textAlign: "center" }} onChange={handleChange('confirmPassword')} value={confirmPassword} type="text" className="form-control" placeholder="Enter New Password Confirmation" pattern="[A-Za-z0-9]{8,100}+" title="Characters can only be A-Z and a-z and must be less than 250 characters" required />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <button className="btn btn-primary">Update New Username and Passowrd</button>
                                    <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => setState({
                                        ...state,
                                        username: "",
                                        password: "",
                                        confirmPassword: "",
                                    })}>Clear</button>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default App;
