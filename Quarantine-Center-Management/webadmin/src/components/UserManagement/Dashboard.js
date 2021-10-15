import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import "../assets/CSS/memberdashboard.css";
import { getAdminUser, logout } from '../../adminHelper';

class Dashboard extends Component {

  constructor(props, { history }) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  //Auto refresh
  onload = () => {
    if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }

  componentDidMount() {
    this.onload();
    this.retrieveProfiles();
  }

  retrieveProfiles() {
    axios.get("http://localhost:8000/profiles").then(res => {
      if (res.data.success) {
        this.setState({
          profiles: res.data.existingProfile
        });

        console.log(this.state.profiles)
      }

    });
  }

  onDelete = (id) => {

    axios.delete(`http://localhost:8000/profile/delete/${id}`).then((res) => {

      const Swal = require('sweetalert2');
      Swal.fire({
        title: 'Success!',
        text: 'Profile Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

      this.retrieveProfiles();
    })

  }


  filterData(profiles, searchKey) {

    const result = profiles.filter((profiles) =>
      profiles.uName.includes(searchKey)
    )

    this.setState({ profiles: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.values;

    axios.get("http://localhost:8000/profiles").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingProfile, searchKey)
      }

    });

  }

  render() {
    return (
      <div>
        <div className="container">

          <h2>Hello Admin!</h2>
          <br />
          <p><button className="btn btn-primary">
            <a href="/register" style={{ textDecoration: 'none', color: 'white' }}>
              Create New Profile
            </a>
          </button>

            <div style={{ marginTop: '-38px', marginLeft: "190px" }}>
              <ReactHTMLTableToExcel
                className='btn btn-outline-success'
                table='table'
                filename='User Details Excel'
                sheet='Sheet'
                buttonText='Generate Sheet'
              />
            </div>


            {/* <div className="col-lg-3 mt-2 mb-2 float-right top-nav-search">
              <input
                className="form-control"
                type="search"
                placeholder="Search here"
                name="searchQuery"
                onChange={this.handleSearchArea}>
              </input>
            </div> */}
          </p>
          <table id="table" class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.profiles.map((profiles, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={`/profile/${profiles._id}`} style={{ textDecoration: 'none' }}>
                      {profiles.fName}
                    </a>
                  </td>
                  <td>{profiles.lName}</td>
                  <td>{profiles.uName}</td>
                  <td>{profiles.email}</td>
                  <td>
                    <a className="btn btn-warning" href={`/update/${profiles._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" onClick={() => this.onDelete(profiles._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
export default Dashboard;
