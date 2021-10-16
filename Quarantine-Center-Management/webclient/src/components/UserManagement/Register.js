import React, { Component } from 'react';
import axios from 'axios';
import { AlignCenter } from 'react-feather';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: "",
            lName: "",
            uName: "",
            email: "",
            dob: "",
            nic: "",
            address: "",
            password: "",
            lnameError: "",
            mnameError: "",
            fnameError: "",
            emailError: "",
            pwdError: "",
            nicError: "",
            dobError: "",
            addressError: "",
            unameError: "",
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formvalid: false
        }
    }



    validate = () => {
        let lnameError = "";
        let fnameError = "";
        let mnameError = "";
        let nicError = "";
        let emailError = "";
        let pwdError = "";
        let dobError = "";
        let addressError = "";
        let unameError = "";

        var cnic_no_regex = new RegExp('^[0-9+]{9}[vV|xX]$');
        var new_cnic_no_regex = new RegExp('^[0-9+]{12}$');

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            emailError = "Invalid Email Format";
        } else if (!this.state.email) {
            emailError = "Email is required";
        }

        if (!this.state.fName) {
            fnameError = "First name is required";
        } else if (!/^[a-zA-Z]+$/.test(this.state.fName)) {
            fnameError = "Characters can only be A-Z and a-z";
        }

        if (!this.state.mName) {
            mnameError = "Middle name is required";
        } else if (!/^[a-zA-Z]+$/.test(this.state.mName)) {
            mnameError = "Characters can only be A-Z and a-z";
        }

        if (!this.state.lName) {
            lnameError = "Last name is required";
        } else if (!/^[a-zA-Z]+$/.test(this.state.lName)) {
            lnameError = "Characters can only be A-Z and a-z";
        }

        if (!this.state.dob) {
            dobError = "Date of birth is required";
        }

        if (!this.state.address) {
            addressError = "Address is required";
        }

        if (!this.state.password) {
            pwdError = "Password is required";
        } else if (this.state.password.length < 8) {
            pwdError = "Enter a password with minimun 8 characters"
        }

        if (!this.state.uName) {
            unameError = "Username is required";
        } else if (this.state.uName.length < 8) {
            unameError = "Enter a username with minimun 8 characters"
        }

        if (!this.state.nic) {
            nicError = "National Identity Number is required";
        } else if (!/^[0-9+]{9}[vV|xX]$/.test(this.state.nic) && !/^[0-9+]{12}$/.test(this.state.nic)){
            nicError = "Invalid National Identity Number format";
        } else if (this.state.nic.length > 12){
            nicError = "Invalid National Identity Number format";
        } else if (this.state.nic.length < 10){
            nicError = "Invalid National Identity Number format";
        }

            if (emailError || fnameError || lnameError || nicError || addressError || dobError || pwdError || unameError) {
                this.setState({ emailError, fnameError, lnameError, mnameError, nicError, addressError, dobError, pwdError, unameError });
                return false;
            }

            return true;
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

            const isValid = this.validate();

            const { fName, mName, lName, uName, email, dob, nic, address, password } = this.state;

            const data = {
                fName: fName,
                mName: mName,
                lName: lName,
                uName: uName,
                email: email,
                dob: dob,
                nic: nic,
                address: address,
                password: password
            }
            console.log(data);

            axios.post("http://localhost:8000/profile/create", data).then((res) => {
                if (res.data.success) {
                    window.location.href = '/login';
                    const Swal = require('sweetalert2');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Profile Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    this.setState(
                        {
                            fName: "",
                            mName: "",
                            lName: "",
                            uName: "",
                            email: "",
                            dob: "",
                            nic: "",
                            address: "",
                            password: ""
                        }
                    )
                }
            })
        }

        render() {
            return (
                <div>
                    <div style={{ paddingLeft: '300px', paddingTop: '20px' }} className="col-md-12 col-lg-10">
                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className="card card-registration card-registration-2">
                            <div><br />
                                <h1 style={{ paddingLeft: '40px' }}>Paitent Registration</h1><hr />
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-12 col-lg-5 login-left">
                                        <h2>General Information</h2>
                                        <form className="needs-validation" noValidate>
                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>First Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="fName"
                                                    placeholder="Enter First Name"
                                                    value={this.state.fName}
                                                    onChange={this.handleInputChange}
                                                    pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters."
                                                    required />


                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.fnameError}
                                                </div>

                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Middle Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="mName"
                                                    placeholder="Enter Middle Name"
                                                    pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z"
                                                    value={this.state.mName}
                                                    onChange={this.handleInputChange} />

                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.mnameError}
                                                </div>

                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Last Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="lName"
                                                    placeholder="Enter Last Name"
                                                    pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters"
                                                    value={this.state.lName}
                                                    onChange={this.handleInputChange} />

                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.lnameError}
                                                </div>

                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>National Identity Number</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="nic"
                                                    placeholder="Enter National Identity Number"
                                                    pattern="[0-9]{12}"
                                                    value={this.state.nic}
                                                    onChange={this.handleInputChange} />

                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.nicError}
                                                </div>

                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Date of Birth</label>
                                                <input type="date"
                                                    className="form-control"
                                                    name="dob"
                                                    placeholder="Enter Date of Birth"
                                                    value={this.state.dob}
                                                    onChange={this.handleInputChange} />


                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.dobError}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div style={{ border: '0px' }} className="col-md-12 col-lg-6 login-right">
                                        <h2>Other Details</h2>
                                        <form className="needs-validation" noValidate>
                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Email</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="email"
                                                    fieldName="email"
                                                    placeholder="Enter Email"
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange} />

                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.emailError}
                                                </div>

                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Address</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="address"
                                                    placeholder="Enter Address"
                                                    pattern="{1,300}"
                                                    value={this.state.address}
                                                    onChange={this.handleInputChange} />


                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.addressError}
                                                </div>
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Username</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="uName"
                                                    placeholder="Enter Username"
                                                    value={this.state.uName}
                                                    onChange={this.handleInputChange} />


                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.unameError}
                                                </div>
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Password</label>
                                                <input type="password"
                                                    className="form-control"
                                                    name="password"
                                                    fieldName="password"
                                                    placeholder="Enter Password"
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange} />


                                                <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                    {this.state.pwdError}
                                                </div>
                                            </div>
                                        </form><br />
                                        <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                            <a class="forgot-link" href={"./Login"}>Already have an account?</a>
                                        </div><br />


                                        <button className="btn btn-success btn-block btn-lg login-btn" type="submit" href={"./Login"} onClick={this.onSubmit}>
                                            <i className="far fa-check-square"> </i>
                                            &nbsp; Create
                                        </button><br />
                                    </div>
                                </div>
                            </div><br /><br /><br />
                        </div>
                    </div>
                </div>
            )
        }

    }
export default Register;