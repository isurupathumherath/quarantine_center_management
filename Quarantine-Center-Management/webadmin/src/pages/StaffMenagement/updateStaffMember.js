/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - updateStaffMember
    Last Update - 11/09/2021
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import firebase from './firebase';
import 'firebase/storage'

const storage = firebase.storage();

const UpdateStaffMember = props => {
    // state

    const [file, setFile] = useState(null);
    const [profileURL, setURL] = useState("");

    const [state, setState] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        DOB: '',
        NIC: '',
        address: '',
        type: '',
        id: '',
        accountStatus: ""
    });

    //destructure values from state
    const { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus } = state;

    console.log(`PROP TEST: ${props.match.params._id}`)

    function handleChangeImage(e) {
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/employee/profile/${props.match.params.id}`)
            .then(response => {
                console.log(response)
                const { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus, profileURL } = response.data
                setState({ ...state, firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type, accountStatus });
                setURL(profileURL);
                console.log(profileURL)
            })
            .catch(error => alert('Error Loading Update Staff'));
    }, []);

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">First Name</label>
                        <input onChange={handleChange('firstName')} value={firstName} type="text" className="form-control" placeholder="Enter the First Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Middle Name</label>
                        <input onChange={handleChange('middleName')} value={middleName} type="text" className="form-control" placeholder="Enter the Middle Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Last Name</label>
                        <input onChange={handleChange('lastName')} value={lastName} type="text" className="form-control" placeholder="Enter the Last Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required />
                    </div>
                </div>
                <div class="col">
                    <div className="form-group">
                        <label className="text-muted">Staff Member Type</label>
                        <select id="type" value={type} onChange={handleChange("type")} className="form-control">
                            <option value="" disabled selected>Select a Staff Member Type</option>
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
                        <input onChange={handleChange('mobileNumber')} value={mobileNumber} type="text" className="form-control" placeholder="Enter the Mobile Number" pattern="[0-9]{9,10}" title="Invalid Mobile Number." required />
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
                <textarea onChange={handleChange("address")} value={address} type="text" className="form-control" placeholder="Enter the Address" required />
            </div>
            <br />
            <div>

                <button className="btn btn-primary btn-lg btn-block">Update</button>
            </div>
        </form>
    )

    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        }
    }

    //Save Image
    function handleUpload(e) {
        e.preventDefault();
        const ref = storage.ref(`/images/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            ref
                .getDownloadURL()
                .then((url) => {
                    setFile(null);
                    setURL(url);
                });
        });
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.table({ firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, accountStatus, profileURL })
        axios
            .put(`http://localhost:8000/employee/update/${props.match.params.id}`, { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, accountStatus, profileURL })
            .then(response => {

                console.log(response)
                const { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, accountStatus, profileURL } = response.data

                //empty state
                setState({ ...state, firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, accountStatus, profileURL });
                //show success alert
                // alert(`Staff Member ${firstName} is Updated`);
                Swal.fire(
                    `Staff Member ${firstName} is Updated`,
                    'Click Ok to continue',
                    'success'
                )
            })
            .catch(error => {
                console.log(error.Response)
                // alert(error.response.data.error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
            })
    };

    return (

        <div className="container card">
            <div className="card-body">
                <div className="card bg-light mb-3">
                    <div className="card-body">
                        <h1 align="center">UPDATE STAFF MEMBER</h1>
                        <center>
                            <div class="row container ">
                                <div class="col">
                                    <label className="text-muted"> <b>Upload Profile Picture (This is Optional)</b></label><br /><br />
                                    <div >
                                        <form onSubmit={handleUpload}>
                                            <input type="file" onChange={handleChangeImage} />
                                            <button disabled={!file}>upload to firebase</button>
                                        </form>
                                        <br />
                                        <img src={profileURL} alt="" style={{ width: "250px", height: "300px" }} />
                                    </div>
                                </div>
                            </div>
                        </center>
                        <br />
                        {showUpdateForm()}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UpdateStaffMember;