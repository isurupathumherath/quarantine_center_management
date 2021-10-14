import React, { Component } from 'react';
import axios from 'axios';

class EditProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: "",
            mName: "",
            lName: "",
            uName: "",
            address: "",
            email: "",
            password: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    onSubmit = (e) => {

        const id = this.props.match.params.id;

        e.preventDefault();

        const { fName, mName, lName, uName, address, email, password } = this.state;

        const data = {
            fName: fName,
            mName: mName,
            lName: lName,
            uName: uName,
            address: address,
            email: email,
            password: password
        }
        console.log(data);

        axios.put(`http://localhost:8000/profile/update/${id}`, data).then((res) => {
            if (res.data.success) {
                const Swal = require('sweetalert2');
                Swal.fire({
                    title: 'Success!',
                    text: 'Profile Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                this.setState(
                    {
                        fName: "",
                        mName: "",
                        lName: "",
                        uName: "",
                        address: "",
                        email: "",
                        password: ""
                    }
                )
            }
        })

    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/profile/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    fName: res.data.profile.fName,
                    mName: res.data.profile.mName,
                    lName: res.data.profile.lName,
                    uName: res.data.profile.uName,
                    email: res.data.profile.email,
                    address: res.data.profile.address,
                    password: res.data.profile.password
                });
                console.log(this.state.profile);
            }
        });
    }
    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Profile</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>First Name</label>
                    <input type ="text"
                    className="form-control"
                    name="fName"
                    placeholder="Enter First Name"
                    value={this.state.fName}
                    onChange={this.handleInputChange}
                    pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>Middle Name</label>
                    <input type ="text"
                    className="form-control"
                    name="mName"
                    placeholder="Enter Last Name"
                    value={this.state.mName}
                    onChange={this.handleInputChange}
                    pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>Last Name</label>
                    <input type ="text"
                    className="form-control"
                    name="lName"
                    placeholder="Enter Last Name"
                    value={this.state.lName}
                    onChange={this.handleInputChange}
                    pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>User Name</label>
                    <input type ="text"
                    className="form-control"
                    name="uName"
                    placeholder="Enter User Name"
                    value={this.state.uName}
                    onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>address</label>
                    <input type ="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter address"
                    value={this.state.address}
                    onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>Email</label>
                    <input type ="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>Password</label>
                    <input type ="text"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success" type ="submit" onClick={this.onSubmit}>
                    <i className="far fa-check-square"> </i>
                    &nbsp; Update
                    </button>

                </form>
            </div>
        );
    }
}
export default EditProfile;