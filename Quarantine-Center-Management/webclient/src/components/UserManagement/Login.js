import React, { useState, useEffect } from "react";
import axios from "axios";
import { authenticate, getUser } from './Session'

function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function Login() {
        const user = { email, password }
        try {
            setLoading(true)
            const result = (await axios.post('http://localhost:8000/login', user)).data
            setLoading(false)
            const Swal = require('sweetalert2');
            Swal.fire({
                title: 'Success!',
                text: 'Welcome',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            authenticate(result);
            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href = '/home'

        } catch (error) {
            console.log(error);
            setLoading(false)
            const Swal = require('sweetalert2');
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Credentials',
                icon: 'error',
                confirmButtonText: 'Try again'
            })

        }
        console.log(user);
    }



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
            </div><br/><br/><br/>
        </div>
    );
}

export default LoginScreen;