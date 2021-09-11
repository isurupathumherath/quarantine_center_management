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
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Profile</h1>
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
                        <label style={{ marginBottom: '5px' }}>Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lName"
                            placeholder="Enter Last Name"
                            value={this.state.lName}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>User Name</label>
                        <input type="text"
                            className="form-control"
                            name="uName"
                            placeholder="Enter User Name"
                            value={this.state.uName}
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
                        <label style={{ marginBottom: '5px' }}>Password</label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success" type="submit" onClick={this.onSubmit}>
                        <i className="far fa-check-square"> </i>
                        &nbsp; Create
                    </button>

                </form>
            </div>
        )
    }

}
export default Register;