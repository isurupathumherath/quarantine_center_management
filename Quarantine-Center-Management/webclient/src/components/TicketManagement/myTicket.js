/*
    Created by - Vishara Prabuddhi
    On - 24/09/2021
    Name - All Ticket Table
 */

import React, { Component } from 'react';
import axios from 'axios';

export default class myTickets extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ticket: []
        };
    }

    componentDidMount() {

        const id = JSON.parse(localStorage.getItem('currentUser'))._id;

        axios

            .get(`http://localhost:8000/getticketsbypatientid/${id}`)

            .then((res) => {

                console.log(res.data);
                this.setState({
                    ticket: res.data

                });
                console.log(this.state.ticket)

            })

            .catch((err) => {

                alert(err.message);

            });
        //     axios.get(`http://localhost:8000/getticketsbypatientid/6167e1adace1ba7zsdcd35f6`).then((res) => {

        //         if (res.data.success) {
        //             console.log("successs");

        //             console.log(res.data);
        //             this.setState({
        //                 ticket: res.data.ticket

        //             });


        //             console.log(this.state.ticket);

        //         }else{
        //         console.log("error");}
        //     });
    }

    render() {
        // const { refID, fullName, nic, departmentName, message } = this.state.ticket;

        return (
            <div style={{ marginTop: '20px' }}>
                {/* <h4>{refID}</h4> */}

                {this.state.ticket.map((post) => (

                    <div className="card" style={{ padding: '40px', boxShadow: '10px 10px 18px #888888' }}>
                        <div className="row">
                            <h4 className="col-sm-3">Full Name</h4>
                            <h6 className="col-sm-9">{post.fullName}</h6>

                            <h4 className="col-sm-3">NIC</h4>
                            <h6 className="col-sm-9">{post.nic}</h6>

                            <h4 className="col-sm-3">Department Name</h4>
                            <h6 className="col-sm-9">{post.departmentName}</h6>

                            <h4 className="col-sm-3">Message</h4>
                            <h6 className="col-sm-9">{post.message}</h6>

                            <h4 className="col-sm-3">Reply</h4>
                            <h6 className="col-sm-9">{post.reply}</h6>
                        </div>
                    </div>
                ))}

            </div>

        )
    }

}