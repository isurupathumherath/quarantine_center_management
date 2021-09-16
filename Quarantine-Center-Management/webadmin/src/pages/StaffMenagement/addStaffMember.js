/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState } from "react";
import axios from "axios";
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
    // DOB: new Date(),
    NIC: "",
    address: "",
    type: "",
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
      })
      .then((response) => {
        console.log(response);
        //show success alert
        alert(`Employee ${response.data.firstName} is Created`);
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
        });
      })
      .catch((error) => {
        console.log(error.Response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="container p-5" style={{ marginTop: "40px" }}>
      <h1 align="center">ADD NEW EMPLOYEE</h1>
      <br />

      {/* {JSON.stringify(state)} */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">First Name</label>
          <input
            onChange={handleChange("firstName")}
            value={firstName}
            type="text"
            className="form-control"
            placeholder="Enter the First Name"
            pattern="[A-Za-z]+"
            title="Characters can only be A-Z and a-z."
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Middle Name</label>
          <input
            onChange={handleChange("middleName")}
            value={middleName}
            type="text"
            className="form-control"
            placeholder="Enter the Middle Name"
            pattern="[A-Za-z]+"
            title="Characters can only be A-Z and a-z."
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Last Name</label>
          <input
            onChange={handleChange("lastName")}
            value={lastName}
            type="text"
            className="form-control"
            placeholder="Enter the Last Name"
            pattern="[A-Za-z]+"
            title="Characters can only be A-Z and a-z."
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Mobile Number</label>
          <input
            onChange={handleChange("mobileNumber")}
            value={mobileNumber}
            type="text"
            className="form-control"
            placeholder="Enter the Mobile Number"
            pattern="[0-9]{10}"
            title="Invalid Mobile Number."
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Email Address</label>
          <input
            onChange={handleChange("email")}
            value={email}
            type="email"
            className="form-control"
            placeholder="Enter the Email Address"
            title="Invalid Email Address."
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Birth Day</label>
          <input
            onChange={handleChange("DOB")}
            value={DOB}
            className="form-control"
            placeholder="Enter the Date of Birth"
            required
          />
        </div>

        {/* <div className="form-group">
            <DatePicker
                // selected={ this.state.DOB }
                onChange={handleChange('DOB')} 
                value={DOB}
                dateFormat="MM/dd/yyyy"
            />
            </div> */}

        <div className="form-group">
          <label className="text-muted">NIC Number</label>
          <input
            onChange={handleChange("NIC")}
            value={NIC}
            type="text"
            className="form-control"
            placeholder="Enter the NIC"
            pattern="[0-9]{12}"
            title="Invalid NIC Number."
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Address</label>
          <input
            onChange={handleChange("address")}
            value={address}
            type="text"
            className="form-control"
            placeholder="Enter the Address"
            required
          />
        </div>
        <div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default App;
