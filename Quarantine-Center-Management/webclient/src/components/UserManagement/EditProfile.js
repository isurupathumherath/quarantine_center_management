import React, { Component } from 'react';
import axios from 'axios';

class EditProfile extends Component {

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

        const id = localStorage.getItem('updateUser');

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

        axios.put(`http://localhost:8000/profile/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Profile Updated Successfully");
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

    componentDidMount() {
        // const id = this.props.match.params.id;
        const id = localStorage.getItem('updateUser');
        // const id = "615ee4cda4fbed41e4c5e8e8";
        // console.log("test"+JSON.parse(localStorage.getItem('updateUser')));

        axios.get(`http://localhost:8000/profile/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    fName: res.data.profile.fName,
                    lName: res.data.profile.lName,
                    uName: res.data.profile.uName,
                    email: res.data.profile.email,
                    password: res.data.profile.password
                });
                console.log(this.state.profile);
            }
        });
    }
    render() {
        return (
            <div>
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-10 col-10">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Profile</li>
                                        <li class="breadcrumb-item active" aria-current="page">Update</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Update Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mt-4 mx-auto">
                    <div className="card">
                        <div className="card-body">
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
                                    &nbsp; Update
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProfile;