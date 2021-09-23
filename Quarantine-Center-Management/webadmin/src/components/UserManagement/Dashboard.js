import React, { Component } from 'react';
import axios from 'axios';
//import "../assets/CSS/memberdashboard.css";

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
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

      alert("Deleted Successfully");

      this.retrieveProfiles();
    })

  }

  render() {
    return (
      <div>
        <div className="container">

          <h2>Hello Admin!</h2>
          <br />
          <p><button className="btn btn-primary"><a href="/register" style={{ textDecoration: 'none', color: 'white' }}>Create New Profile</a></button></p>
          <table class="table">
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
