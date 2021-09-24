/*
    Created by - Vishara Prabuddhi
    On - 30/08/2021
    Name - All Ticket Table
 */

import React, { Component } from 'react';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from "react-router-dom";


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
      alert("Are you sure you want to delete this entry?");
      this.retrieveTickets();
    });
  }

  filterData(tickets, searchKey) {
    const result = tickets.filter((ticket) =>
      ticket.refID.toLowerCase().includes(searchKey) ||
      ticket.fullName.toLowerCase().includes(searchKey) ||
      ticket.nic.toLowerCase().includes(searchKey) ||
      ticket.departmentName.toLowerCase().includes(searchKey) ||
      ticket.message.toLowerCase().includes(searchKey)
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
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Tickets</h4>
            <br></br>
            &nbsp;
            <ReactHTMLTableToExcel
              className='btn btn-outline-success'
              table='enrollment-table'
              filename='enrollments Excel'
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
        <table id="enrollment-table" className="table table-hover" style={{ marginTop: '40px' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ref ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Department Name</th>
              <th scope="col">Message</th>
              <th style={{ width: '200px' }} scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tickets.map((tickets, index) => (
                <tr key={index
                }>
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
                  <td>

              

                    <a className="btn btn-warning" href={`/edit/${tickets._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
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
    )
  }
}
