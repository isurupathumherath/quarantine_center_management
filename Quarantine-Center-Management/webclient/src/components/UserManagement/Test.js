import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: "",
            lName: "",
            uName: "",
            email: "",
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

    onSubmit = (e) => {

        e.preventDefault();

        const { fName, lName, uName, email, password } = this.state;

        const data = {
            fName: fName,
            lName: lName,
            uName: uName,
            email: email,
            password: password
        }
        console.log(data);

        axios.post("http://localhost:8000/profile/create", data).then((res) => {
            if (res.data.success) {
                this.setState(
                    {
                        fName: "",
                        lName: "",
                        uName: "",
                        email: "",
                        password: ""
                    }
                )
            }
        })
    }

    render() {
        return (
            <div class="content">
				<div class="container-fluid">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
								
						
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									{/*<div class="col-md-7 col-lg-6 login-left">
										<img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Register"/>	
									</div>*/}
									<div class="col-md-12 col-lg-6 login">
										<div class="login-header">
											<h3>Patient Register</h3>
										</div>
										
									
										<form>
											
                                            {/* First Name feild for inserting data */}
                                            <div class="form-group form-focus">
												<input type="text" class="form-control floating"
                                                name="fName"
                                                placeholder="Enter First Name"
                                                value={this.state.fName}
                                                onChange={this.handleInputChange} />
												<label class="focus-label">First Name</label>
											</div>

											<div class="form-group form-focus">
												<input type="text" class="form-control floating"
                                                name="lName"
                                                placeholder="Enter Last Name"
                                                value={this.state.lName}
                                                onChange={this.handleInputChange} />
												<label class="focus-label">Last Name</label>
											</div>

											<div class="form-group form-focus">
												<input type="password" class="form-control floating"
                                                name="uName"
                                                placeholder="Enter User Name"
                                                value={this.state.uName}
                                                onChange={this.handleInputChange} />
												<label class="focus-label">Username</label>
											</div>

                                            <div class="form-group form-focus">
												<input type="password" class="form-control floating"
                                                name="email"
                                                placeholder="Enter Email"
                                                value={this.state.email}
                                                onChange={this.handleInputChange} />
												<label class="focus-label">Email</label>
											</div>

                                            <div class="form-group form-focus">
												<input type="password" class="form-control floating"
                                                name="password"
                                                placeholder="Enter Password"
                                                value={this.state.password}
                                                onChange={this.handleInputChange} />
												<label class="focus-label">Password</label>
											</div>

											<div class="text-right">
												<a class="forgot-link" href={"./Login"}>Already have an account?</a>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit"
                                            onClick={this.onSubmit}>Signup</button>
											
											
										</form>
										
										
									</div>
								</div>
							</div>
							
						</div>
					</div>

				</div><br/><br/>

			</div>
        )
    }

}
export default Register;