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
            ticket: {}
        };
    }

    componentDidMount() {
        const id = 255;

        axios.get(`http://localhost:8000/user-ticket/${id}`).then((res) => {
            console.log("FUNCTION CALLED")
            if (res.data.success) {
                console.log("RESPONSE: " + res);
                this.setState({
                    ticket: res.data.ticket
                });

                console.log(this.state.ticket);
                
            }
            console.log("RESPONSE: " + res);
        });
    }
    
    render() {
        const { refID, fullName, nic, departmentName, message } = this.state.ticket;

        return (
           <div style={{marginTop:'20px'}}>
               <h4>{refID}</h4>
              
           <dl className="row">
               <dt className="col-sm-3">Full Name</dt>
               <dd className="col-sm-9">{fullName}</dd>

               <dt className="col-sm-3">NIC</dt>
               <dd className="col-sm-9">{nic}</dd>

               <dt className="col-sm-3">Department Name</dt>
               <dd className="col-sm-9">{departmentName}</dd>

               <dt className="col-sm-3">Message</dt>
               <dd className="col-sm-9">{message}</dd>
           </dl>
           </div>

        )
        }

}

