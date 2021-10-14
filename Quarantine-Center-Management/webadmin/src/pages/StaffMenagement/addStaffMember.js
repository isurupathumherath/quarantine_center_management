/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

// // import DatePicker from 'react-datepicker';
// react-datepicker/dist/react-datepicker.css
const App = () => {
  // state
  const [state, setState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    DOB: "",
    NIC: "",
    address: "",
    type: "",
    accountStatus: ""
  });

  //destructure values from state
  const {
    firstName,
    middleName,
    lastName,
    mobileNumber,
    email,
    DOB,
    NIC,
    address,
    type,
    accountStatus,
  } = state;

  //onChange event handler
  // const handleChange = (name) => (event) => {
  //     // console.log('name', name, 'event', event.target.value);
  //     setState({...state, [name]: event.target.value});
  // };

  function handleChange(name) {
    return function (event) {
      setState({ ...state, [name]: event.target.value });
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({
      firstName,
      middleName,
      lastName,
      mobileNumber,
      email,
      DOB,
      NIC,
      address,
      type,
      accountStatus,
    });

    axios
      .post(`http://localhost:8000/employee/add`, {
        firstName,
        middleName,
        lastName,
        mobileNumber,
        email,
        DOB,
        NIC,
        address,
        type,
        accountStatus,
      })
      .then((response) => {
        console.log(response);
        //show success alert
        // alert(`Employee ${response.data.firstName} is Created`);
        Swal.fire(
          `Employee ${response.data.firstName} is Created`,
          'Click Ok to continue',
          'success'
        )
        //empty state
        setState({
          ...state,
          firstName: "",
          middleName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          DOB: "",
          NIC: "",
          address: "",
          type: "",
          accountStatus: "",
        });
      })
      .catch((error) => {
        console.log(error.Response);
        Swal.fire({
          icon: 'error',
          title: `${error.response.data.error}`,
          // text: `${error.response.data.error}`,
          footer: 'Please try again'
        })
        // alert(error.response.data.error);
      });
  };

  return (
    <div className="container " style={{ marginLeft: "50px" }}>
      <div className="card" style={{ width: "1300px" }}>
        <div className="card-body"></div>
        <h1 align="center">ADD NEW EMPLOYEE</h1>
        <br />

        {/* {JSON.stringify(state)} */}

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>

              <div class="row">
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">First Name</label>
                    <input onChange={handleChange('firstName')} value={firstName} type="text" className="form-control" placeholder="Enter the First Name" pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters." required />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Middle Name</label>
                    <input onChange={handleChange('middleName')} value={middleName} type="text" className="form-control" placeholder="Enter the Middle Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Last Name</label>
                    <input onChange={handleChange('lastName')} value={lastName} type="text" className="form-control" placeholder="Enter the Last Name" pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters" required />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Staff Member Type</label>
                    <select id="type" value={type} onChange={handleChange("type")} className="form-control">
                      <option value="" disabled selected>Select a Priority</option>
                      <option value="Attendant">Attendant</option>
                      <option value="Nurisng">Nurisng</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                  </div>
                </div>
              </div>


              <div class="row">
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Mobile Number</label>
                    <input onChange={handleChange('mobileNumber')} value={mobileNumber} type="text" className="form-control" placeholder="Enter the Mobile Number" pattern="[0-9]{10}" title="Invalid Mobile Number." required />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Email Address</label>
                    <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="Enter the Email Address" title="Invalid Email Address." required />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Birth Day</label>
                    <input type="date" onChange={handleChange('DOB')} value={DOB} className="form-control" placeholder="Enter the Date of Birth" required />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">NIC Number</label>
                    <input onChange={handleChange("NIC")} value={NIC} type="text" className="form-control" placeholder="Enter the NIC" pattern="[0-9]{12}" title="Invalid NIC Number." required />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label className="text-muted">Account Status</label>
                    <select id="accountStatus" value={accountStatus} onChange={handleChange("accountStatus")} className="form-control">
                      <option value="" disabled selected>Select a Account Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Active">Active</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="text-muted">Address</label>
                <textarea onChange={handleChange("address")} value={address} type="text" className="form-control" placeholder="Enter the Address" pattern="{1,300}" required />
              </div>


              <br />
              <div>
                <button className="btn btn-primary">Add</button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
