/*
    Created by - Vishara Prabuddhi
    On - 30/08/2021
    Name - All Ticket Table
 */

import React, { Component } from 'react';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const Swal = require('sweetalert2')

export default class adminAllTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
    this.retrieveTickets();
  }

  retrieveTickets() {
    axios.get("http://localhost:8000/tickets").then(res => {
      if (res.data.success) {
        this.setState({
          tickets: res.data.existingTickets
        });

        console.log(this.state.tickets);
      }
    });
  }

  onDelete = (id) => {

    axios.delete(`http://localhost:8000/ticket/delete/${id}`).then((res) => {
      Swal.fire({
        title: 'Done!',
        text: 'Entry has been deleted',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.retrieveTickets();
    });
  }

  filterData(tickets, searchKey) {
    const result = tickets.filter((ticket) =>
      ticket.refID.toLowerCase().includes(searchKey) ||
      ticket.fullName.toLowerCase().includes(searchKey) ||
      ticket.nic.toLowerCase().includes(searchKey) ||
      ticket.departmentName.toLowerCase().includes(searchKey) ||
      ticket.message.toLowerCase().includes(searchKey) ||
      ticket.status.toLowerCase().includes(searchKey)
    )
    this.setState({ tickets: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/tickets").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingTickets, searchKey)
      }
    });

  }

  render() {
    return (

      // Table
      <div className="card" style={{ padding: '40px', paddingTop: '50px', width:'1200px' ,boxShadow: '10px 10px 18px #888888' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h3>All Tickets</h3>
              <br></br>
              <hr style={{width:'1100px'}}></hr>
              &nbsp;
              <ReactHTMLTableToExcel
                className='btn btn-outline-success'
                table='enrollment-table'
                filename='Ticket Details Excel'
                sheet='Sheet'
                buttonText='Generate Sheet'
              />
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea} />
            </div>
          </div>
          <div className="card">
            <div className="table-responsive" style={{ maxHeight: "500px", overflowY: "scroll", }}>
              <table id="enrollment-table" className="table table-hover" style={{ marginTop: '40px', width:'1500px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '10px' }} scope="col">#</th>
                    <th style={{ width: '100px' }} scope="col">Ref ID</th>
                    <th style={{ width: '200px' }} scope="col">Full Name</th>
                    <th style={{ width: '150px' }} scope="col">NIC</th>
                    <th style={{ width: '100px' }} scope="col">Department Name</th>
                    <th  scope="col">Message</th>
                    <th style={{ width: '300px' }} scope="col">Status</th>
                    <th style={{ width: '200px' }} scope="col">Reply</th>
                    <th style={{ width: '500px' }} scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tickets.map((tickets, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{tickets.refID}</td>
                      <td>
                        <a href={`/ticket/${tickets._id}`} style={{ textDecoration: 'none', color: 'Black' }}>
                          {tickets.fullName}
                        </a>
                      </td>
                      <td>{tickets.nic}</td>
                      <td>{tickets.departmentName}</td>
                      <td>{tickets.message}</td>
                      <td>{tickets.status}</td>
                      <td>{tickets.reply}</td>
                      <td>
                        <a className="btn btn-warning" href={`/edit/${tickets._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Reply
                        </a>
                        &nbsp;
                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(tickets._id)}>
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
