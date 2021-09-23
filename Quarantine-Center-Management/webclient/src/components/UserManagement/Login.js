import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uName: "",
            password: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()
    }


    render() {
        return (
            <div class="content ">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-8 offset-md-2">


                            <div class="account-content">
                                <div class="row align-items-center justify-content-center">
                                    {/*<div class="col-md-7 col-lg-6 login-left">
                                <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Register"/>	
                            </div>*/}
                                    <div class="col-md-12 col-lg-6 login border border-success">
                                        <div class="login-header">
                                            <h2>Patient Login</h2>
                                        </div>
                                        <form>
                                            <div className="mb-3">
                                                <label for="username" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username"  onChange={this.handleInputChange} placeholder="Enter the username" />
                                            </div>

                                            <div className="mb-3">
                                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1"onChange={this.handleInputChange} placeholder="Enter the password" />
                                            </div>

                                            <div class="text-right">
                                                <a class="forgot-link" href={"./Register"}>Forgot Password?</a>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-block btn-lg login-btn" onClick={this.onSubmit}>
                                                <i className="far fa-check-square"> </i>
                                                &nbsp; Login</button><br />

                                            <div class="text-center dont-have">Don’t have an account? <a href={"./Register"}>Register</a></div>

                                            <div class="text-center dont-have "><a href={"./"}>Corporate Login</a></div>

                                        </form><br />
                                    </div>
                                </div><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;