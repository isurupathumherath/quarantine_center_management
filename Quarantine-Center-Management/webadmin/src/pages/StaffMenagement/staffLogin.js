import React, { useState, useEffect } from "react";
import axios from "axios";

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [staffMembers, setStaffMembers] = useState([])
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function Login() {
        const user = { email, password }
        axios.post('http://localhost:8000/staffLogin/staffLogin/', user)
            .then(response => {
                console.log(response)
                if (response.data == null) {
                    const Swal = require('sweetalert2');
                    Swal.fire({
                        title: 'Login Failed!',
                        text: 'Username or Password incorrect',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                }
                else {
                    const Swal = require('sweetalert2');
                    Swal.fire({
                        title: 'Welcome!',
                        text: `User ${response.data.username} Authenticated`,
                        icon: 'success'
                    });
                    setTimeout(() => { window.location.href = '/addStaffMember' }, 2000);
                    setStaffMembers(response.data)
                }

            })
            .catch(error => {
                const Swal = require('sweetalert2');
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
                        <img src="assets/img/login-banner.png" style={{ height: 500, widows: 500 }} class="img-fluid" alt="Doccure Login" />
                    </div>
                    <div className="col-md-12 col-lg-4 login-right">
                        <h2 style={{ fontSize: '35px', marginTop: '5px' }}> Login </h2><br />


                        <div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Email</label>
                                <input required type='email'
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Password</label>
                                <input required type='password'
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                            </div><br />



                            <button onClick={Login}
                                className="btn btn-success btn-block btn-lg login-btn"
                                style={{ marginTop: '15px' }}><i className="far fa-check-square" /> Login
                            </button>
                            <br />
                            <br />
                            <div class="text-center dont-have">Don’t have an account? <a href='/register'>Register</a></div>

                        </div>


                    </div>

                </div>
            </div><br /><br /><br />
        </div>
    );
}

export default LoginScreen;