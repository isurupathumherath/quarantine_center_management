/*
    Created by - Vishara Prabuddhi
    On - 30/08/2021
    Name - Reply Ticket
 */

import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from 'file-saver';

const Swal = require('sweetalert2')

export default class adminEditTickets extends Component {


    constructor(props) {
        super(props);
        this.state = {

            fullName: "",
            nic: "",
            email: "",
            departmentName: "",
            message: "",
            status: "",
            reply: ""
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
        const id = this.props.ticketID;

        const { fullName, nic, email, departmentName, message, status, reply } = this.state;

        const data = {
            fullName: fullName,
            nic: nic,
            email: email,
            departmentName: departmentName,
            message: message,
            status: status,
            reply: reply
        }

        console.log(data)

        axios.put(`http://localhost:8000/ticket/update/${id}`, data).then((res) => {
            if (res.data.success) {
                Swal.fire({
                    title: 'Done',
                    text: 'Reply has been send',
                    icon: 'success',
                    confirmButtonText: 'Yes'
                })
                this.setState(
                    {
                        fullName: "",
                        nic: "",
                        email: "",
                        departmentName: "",
                        message: "",
                        status: "",
                        reply: ""
                    }
                )
                window.location.replace('/viewalltickets');
            }
        })
        // this.props.history.push("/viewalltickets");
    }
    componentDidMount() {


        const id = this.props.ticketID;

        axios.get(`http://localhost:8000/ticket/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    fullName: res.data.ticket.fullName,
                    nic: res.data.ticket.nic,
                    email: res.data.ticket.email,
                    departmentName: res.data.ticket.departmentName,
                    message: res.data.ticket.message,
                    status: res.data.ticket.status,
                    reply: res.data.ticket.reply
                });

                console.log(this.state.ticket);
            }
        });
    }
    

    createAndDownloadPdf = () => {
        axios.post('http://localhost:8000/create-pdf', this.state)
            .then(() => axios.get('http://localhost:8000/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Subject.pdf');
                console.log('test');
            })

    }


    render() {

        return (
            <div className="card" style={{ padding: '40px', paddingTop: '50px', boxShadow: '10px 10px 18px #888888' }}>
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Reply Ticket</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Full Name</label>
                            <input type="text"
                                className="form-control"
                                name="fullName"
                                placeholder="Enter Full Name"
                                value={this.state.fullName}
                                onChange={this.handleInputChange} readonly="readonly" />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>NIC</label>
                            <input type="text"
                                className="form-control"
                                name="nic"
                                placeholder="Enter NIC"
                                value={this.state.nic}
                                onChange={this.handleInputChange} readonly="readonly" />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleInputChange} readonly="readonly" />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Department Name</label>
                            <input type="text"
                                className="form-control"
                                name="departmentName"
                                placeholder="Enter Department Name"
                                value={this.state.departmentName}
                                onChange={this.handleInputChange} readonly="readonly" />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Message</label>
                            <input type="text"
                                className="form-control"
                                name="message"
                                placeholder="Enter Message"
                                value={this.state.message}
                                onChange={this.handleInputChange} readonly="readonly" />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Update Status</label>
                            <select
                                className="form-control"
                                name="status"
                                placeholder="Enter Status"
                                value={this.state.status}
                                onChange={this.handleInputChange} >
                                <option selected disabled value="">Select Status</option>
                                <option >Pending</option>
                                <option >Replied</option>
                            </select>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Send Reply</label>
                            <textarea rows="5"
                                className="form-control"
                                name="reply"
                                placeholder="Enter Reply"
                                value={this.state.reply}
                                onChange={this.handleInputChange} />
                        </div>

                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit} >
                            <i class="fas fa-paper-plane"></i>
                            &nbsp;Reply
                        </button>
                        <a style={{ marginLeft: '15px', marginTop: '15px' }} className="btn btn-primary" href={'/Mailer'}>
                            <i className="fas fa-edit"></i>&nbsp;Mail
                        </a>
                            <button className="btn btn-warning" style={{  marginLeft: '15px', marginTop: '15px'  }} onClick={this.createAndDownloadPdf}>
                            <i class="fa fa-file-pdf-o" ></i>
                                &nbsp;Download File
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}
