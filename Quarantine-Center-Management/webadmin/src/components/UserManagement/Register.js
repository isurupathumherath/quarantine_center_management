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
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Middle Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="mName"
                                                    placeholder="Enter Middle Name"
                                                    value={this.state.mName}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Last Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="lName"
                                                    placeholder="Enter Last Name"
                                                    value={this.state.lName}
                                                    onChange={this.handleInputChange} />
                                            </div>
                                            
                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>National Identity Number</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="nic"
                                                    placeholder="Enter National Identity Number"
                                                    value={this.state.nic}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Date of Birth</label>
                                                <input type="date"
                                                    className="form-control"
                                                    name="dob"
                                                    placeholder="Enter Date of Birth"
                                                    value={this.state.dob}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Email</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Address</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="address"
                                                    placeholder="Enter Address"
                                                    value={this.state.address}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Username</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="uName"
                                                    placeholder="Enter Username"
                                                    value={this.state.uName}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                                <label style={{ marginBottom: '5px' }}>Password</label>
                                                <input type="password"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="Enter Password"
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange} />
                                            </div>

                                            <div class="text-right">
                                                <a class="forgot-link" href={"./Login"}>Already have an account?</a>
                                            </div>


                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit" onClick={this.onSubmit}>
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