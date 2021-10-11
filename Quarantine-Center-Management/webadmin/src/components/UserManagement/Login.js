import React, { useState, useEffect } from "react";
import axios from "axios";
import { authenticate, getAdminUser } from '../../adminHelper'

function LoginScreen(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function Login() {
        const user = { email: 'admin', password: 'admin' }

        if (email == 'admin' && password == 'admin') {
            const Swal = require('sweetalert2');
            Swal.fire({
                title: 'Success!',
                text: 'Welcome',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            authenticate(() => props.history.push('/dashboard'));
            // window.location.href = '/dashboard'

        } else {
            setLoading(false)
            const Swal = require('sweetalert2');
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Credentials',
                icon: 'error',
                confirmButtonText: 'Try again'
            });
        }
        console.log(user);
    }

    useEffect(() => {
        getAdminUser() && props.history.push('/dashboard');
    }, []);


    return (
        <div>
            <div class="login-body">
                <div class="login-wrapper">
                    <div class="container">
                        <div class="loginbox">
                            <div class="login-left">
                                <img class="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
                            </div>
                            <div class="login-right">
                                <div class="login-right-wrap">
                                    <h1>Login</h1>
                                    <p class="account-subtitle">Access to our dashboard</p>


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
                                            className="btn btn-primary btn-block"
                                            style={{ marginTop: '15px' }}><i className="far fa-check-square" /> Login
                                        </button>
                                        <br />
                                        <br />
                                        <div class="text-center dont-have">Staff Login <a href="/staffLogin">Register</a></div>

                                    </div>


                                </div>

                            </div>
                        </div><br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;