import React, { Component } from 'react';
import axios from 'axios';


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

// original table
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Posts</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
            </input>
          </div>
        </div>
        <table className="table table-hover" style={{ marginTop: '40px' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Department Name</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tickets.map((tickets, index) => (
                <tr key={index
                }>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/ticket/${tickets._id}`} style={{ textDecoration: 'none' }}>
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


{/* boostrap test table */}
        {/* <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Hoverable Table</h4>
                  <p class="card-description">
                    Add class <code>.table-hover</code>
                  </p>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Product</th>
                          <th>Sale</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jacob</td>
                          <td>Photoshop</td>
                          <td class="text-danger"> 28.76% <i class="ti-arrow-down"></i></td>
                          <td><label class="badge badge-danger">Pending</label></td>
                        </tr>
                        <tr>
                          <td>Messsy</td>
                          <td>Flash</td>
                          <td class="text-danger"> 21.06% <i class="ti-arrow-down"></i></td>
                          <td><label class="badge badge-warning">In progress</label></td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Premier</td>
                          <td class="text-danger"> 35.00% <i class="ti-arrow-down"></i></td>
                          <td><label class="badge badge-info">Fixed</label></td>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>After effects</td>
                          <td class="text-success"> 82.00% <i class="ti-arrow-up"></i></td>
                          <td><label class="badge badge-success">Completed</label></td>
                        </tr>
                        <tr>
                          <td>Dave</td>
                          <td>53275535</td>
                          <td class="text-success"> 98.05% <i class="ti-arrow-up"></i></td>
                          <td><label class="badge badge-warning">In progress</label></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}


{/* material UI data Table */}



      </div>


                
    )
  }
}
