/*
    Created by - Vishara Prabuddhi
    On - 30/08/2021
    Name - Client Add Ticket
 */

import React, { Component, useEffect } from 'react';
import axios from 'axios';
import {getUser} from '../UserManagement/Session'

const userID = getUser();
const generateUniqueId = require('generate-unique-id');

export default class clientAddTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            nic: "",
            email: "",
            departmentName: "",
            reply: "",
            status: "",
            message: ""

        }
    }

    handleInputChange = (e) => {
        console.log(userID);
        const { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    onSubmit = (e) => {

        e.preventDefault();
        const { fullName, nic, email, departmentName, reply, status, message } = this.state;

        const refID = generateUniqueId({
            length: 10,
            useLetters: true
        });

        const data = {
            refID: refID,
            fullName: fullName,
            nic: nic,
            email: email,
            departmentName: departmentName,
            reply: "Null",
            status: "New",
            message: message,
            userID: userID
        }

        console.log(data)

        axios.post("http://localhost:8000/ticket/save", data).then((res) => {
            if (res.data.success) {
                this.setState(
                    {
                        fullName: "",
                        nic: "",
                        email: "",
                        departmentName: "",
                        reply: "",
                        status: "",
                        message: ""
                    }
                )
                window.location.replace('/formLandingPage');
            }
        })
       
    }

    // onClickDemo = () => {
    //     this.setState(
    //       {
    //         subjectId: "SUB34765",
    //         StudentName: "Ahmed Azmie",
    //         enrollmentCode: "EN45784",
    //         studentId: "STD34638",
    //         StudentAddress: "No123, 3rd Street, Rathmalana",
    //         dateOfEnroll: "2021-09-20"
    //       })
    //   }

    render() {
        return (
            <div className="card" style={{ padding: '50px',paddingTop:'60px',boxShadow:'10px 10px 18px #888888'}}>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Add Ticket</h2>
                        <h4>We would love to hear from you !</h4>
                        <div class="contact-info">
                            <img src="https://i1.wp.com/static.vectorcharacters.net/uploads/2018/06/doctor-gif.gif" style={{ width: '300px' }} alt="image" />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1 className="h3 mb-3 font-weight-normal"></h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group" >
                                <label style={{ marginBottom: '5px' }}>Your Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="fullName"
                                    placeholder="Enter Full Name"
                                    value={this.state.fullName}
                                    onChange={this.handleInputChange}
                                    pattern="[a-zA-Z][a-zA-Z ]{4,}" 
                                    required/>
                            </div>

                            <div className="form-group" >
                                <label style={{ marginBottom: '5px' }}>NIC</label>
                                <input type="text"
                                    className="form-control"
                                    name="nic"
                                    placeholder="Enter NIC"
                                    value={this.state.nic}
                                    min='10' max='12'
                                    onChange={this.handleInputChange} required/>
                            </div>

                            <div className="form-group" >
                                <label style={{ marginBottom: '5px' }}>Email</label>
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    min='10' max='12'
                                    onChange={this.handleInputChange}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    required/>
                            </div>


                            <div className="form-group" >
                                <label style={{ marginBottom: '5px' }}>Department</label>
                                <select
                                    class="form-control"
                                    name="departmentName"
                                    value={this.state.departmentName}
                                    onChange={this.handleInputChange}>
                                    <option selected disabled value="">Select Department</option>
                                    <option>Medical Details</option>
                                    <option>Food and Beverage</option>
                                    <option>Room</option>
                                    <option>Finance</option>
                                    <option>Need help? - Admin</option>
                                </select>
                            </div> 

                            <div className="form-group" >
                                <label style={{ marginBottom: '5px' }}>Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Enter Message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange} required/>
                            </div>

                            <button className="btn btn-success" type="submit"  >
                                <i className="far fa-check-square"></i>
                                &nbsp;Submit
                            </button>
                        </form>

                        <br></br><br></br><br></br>
                    </div>
                </div>
            </div>
        );
    }
}
