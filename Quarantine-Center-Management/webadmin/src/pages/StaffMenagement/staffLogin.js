/*
    Created by - Isuru Pathum Herath
    On - 11/10/2021
    Name - staffLogin
    Last Update - 11/10/2021
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { authenticate, getUser } from './staffHelper'

function LoginScreen(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [staffMembers, setStaffMembers] = useState([])
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const Swal = require('sweetalert2');

    useEffect(() => {
        const id = getUser();
        getUser() && props.history.push(`/staffLandingPage/${id}`);
    }, []);

    async function Login() {
        const user = { username, password }
        axios.post('http://localhost:8000/staffLogin/staffLogin/', user)
            .then(response => {
                console.log(response)
                if (response.data == null) {
                    Swal.fire({
                        title: 'Login Failed!',
                        text: 'Username or Password incorrect',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                }
                else {
                    if (response.data.accountStatus == "Pending") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated`,
                            icon: 'success'
                        });
                        setStaffMembers(response.data)
                        //response will contain token and name
                        authenticate(response, () => props.history.push(`/staffFirstLogin/${response.data.employeeId}`), 2000);
                        // alert("First Login")
                        // setTimeout(() => { window.location.href = `/staffFirstLogin/${response.data.employeeId}` }, 2000);
                    }
                    else if (response.data.accountStatus == "Active") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated`,
                            icon: 'success'
                        });
                        setStaffMembers(response.data)
                        authenticate(response, () => props.history.push(`/staffLandingPage/${response.data.employeeId}`), 2000);

                        // alert("Active Account")
                        //response will contain token and name
                        // authenticate(response, () => props.history.push('/create'));
                        // setTimeout(() => { window.location.href = `/staffLandingPage/${response.data.employeeId}` }, 2000);
                    }
                    else {
                        Swal.fire({
                            title: 'Login Failed!',
                            text: 'Username or Password incorrect',
                            icon: 'error',
                            confirmButtonText: 'Try again'
                        });
                    }


                }

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login Failed',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            });
    };

    return (

        <div>
            <div class="account-page">
                {loading}
                <div className="row align-items-center justify-content-center">
                    <div class="col-md-12 col-lg-6 login-left">
                        <img src="https://img.freepik.com/free-vector/happy-business-colleagues-team-portrait_179970-1271.jpg?size=626&ext=jpg" style={{ height: 500, widows: 500 }} class="img-fluid" alt="Doccure Login" />
                    </div>
                    <div className="col-md-12 col-lg-4 login-right">
                        <h2 style={{ fontSize: '35px', marginTop: '5px' }}> Staff Login </h2><br />


                        <div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Username</label>
                                <input required type='username'
                                    className="form-control"
                                    placeholder="Enter Your Username"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Password</label>
                                <input required type='password'
                                    className="form-control"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                            </div><br />



                            <button onClick={Login}
                                className="btn btn-success btn-block btn-lg login-btn"
                                style={{ marginTop: '15px' }}><i class="fas fa-sign-in-alt"> Login</i>
                            </button>
                            <br />
                            <br />
                            <div class="text-center dont-have">Admin <a href="/login">Login</a></div>


                        </div>


                    </div>

                </div>
            </div><br /><br /><br />
        </div>
    );
}

export default LoginScreen;