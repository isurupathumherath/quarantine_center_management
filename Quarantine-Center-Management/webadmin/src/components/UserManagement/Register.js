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
            unameError: ""
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


        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email";
        }

        if (!this.state.email) {
            emailError = "Email is required";
        }

        if (!this.state.fName) {
            fnameError = "First name is required";
        }

        if (!this.state.mName) {
            mnameError = "Middle name is required";
        }

        if (!this.state.lName) {
            lnameError = "Last name is required";
        }

        if (!this.state.dob) {
            dobError = "Date of birth is required";
        }

        if (!this.state.address) {
            addressError = "Address is required";
        }

        if (!this.state.password) {
            pwdError = "Password is required";
        }

        if (!this.state.uName) {
            unameError = "Username is required";
        }

        if (!this.state.nic) {
            nicError = "National Identity Number is required";
        }

        if (emailError || fnameError || lnameError || mnameError || nicError || addressError || dobError || pwdError || unameError) {
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
            <div class="content ">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-8 offset-md-2 ">


                            <div class="account-content">
                                <div class="row align-items-center justify-content-center">

                                    <div class="col-md-12 col-lg-6 login border border-success">
                                        <div class="login-header">
                                            <h2>Patient Register</h2>
                                        </div>

                                        <form className="needs-validation" noValidate>
                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>First Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="fName"
                                                    placeholder="Enter First Name"
                                                    value={this.state.fName}
                                                    onChange={this.handleInputChange}
                                                    pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z."
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

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Email</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="email"
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
                                                    placeholder="Enter Password"
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange} />


                                                    <div style={{ float: "right", fontSize: 12, color: "red" }}>
                                                        {this.state.pwdError}
                                                    </div>
                                            </div><br/>


                                            <div  style={{ float: "right", fontSize: 12, color: "red" }}>
                                                <a class="forgot-link" href={"./Login"}>Already have an account?</a>
                                            </div><br/>


                                            <button className="btn btn-success btn-block btn-lg login-btn" type="submit" onClick={this.onSubmit}>
                                                <i className="far fa-check-square"> </i>
                                                &nbsp; Create
                                            </button><br />

                                        </form><br />
                                    </div>
                                </div>
                            </div><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Register;