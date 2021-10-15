import React, { useEffect, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import moment from 'moment';

class ProfileDetails extends Component {

    pdfGenerate = () => {
        const { fName, mName, lName, uName, email, dob, nic, address } = this.state.profile;
        const a = this.state.profile.uName
        var doc = new jsPDF('portrait', 'px', 'a4', 'false');

        doc.setFont('Helvertica', 'bold')
        doc.text(60, 60, "Profile details of ")
        doc.text(150, 60, [a])

        doc.setFont('Helvertica', 'bold')
        doc.text(60, 80, "First name")
        doc.text(60, 100, "Middle Name")
        doc.text(60, 120, "Last Name")
        doc.text(60, 140, "Userame")
        doc.text(60, 160, "NIC")
        doc.text(60, 180, "Address")
        doc.text(60, 200, "Date of birth")
        doc.text(60, 220, "Email")

        doc.setFont('Helvertica', 'normal')
        doc.text(200, 80, [this.state.profile.fName])
        doc.text(200, 100, [this.state.profile.mName])
        doc.text(200, 120, [this.state.profile.lName])
        doc.text(200, 140, [this.state.profile.uName])
        doc.text(200, 160, [this.state.profile.nic])
        doc.text(200, 180, [this.state.profile.address])
        doc.text(200, 200, [moment.utc(dob).format('DD/MM/YYYY')])
        doc.text(200, 220, [this.state.profile.email])

        doc.save('users.pdf')
    }

    constructor(props) {
        super(props);

        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("ID: " + id);

        axios.get(`http://localhost:8000/profile/${id}`).then((res) => {
            if (res.data.success) {
                console.log("ID: " + id);
                console.log("DATA: " + res);
                this.setState({
                    profile: res.data.profile
                });
                console.log(this.state.profile);
            }
            else {
                console.log("error fetch data");
                console.log("ID : " + id);
            }
        });
    }

    render() {

        const { fName, mName, lName, uName, email, dob, nic, address } = this.state.profile;
        return (
            <div>
                {/* <div>
                    <div className="account-page" style={{ marginTop: '20px', marginLeft: "30px" }}>
                        <h2>Profile Details of {uName}</h2>
                    </div>
                    <div style={{ marginTop: '20px', marginLeft: "30px" }}>

                        <dl className="row">
                            <dt className="col-sm-3">First Name </dt>
                            <dd className="col-sm-9">: {fName}</dd>

                            <dt className="col-sm-3">Middle Name </dt>
                            <dd className="col-sm-9">: {mName} </dd>

                            <dt className="col-sm-3">Last Name </dt>
                            <dd className="col-sm-9">: {lName} </dd>

                            <dt className="col-sm-3">Userame </dt>
                            <dd className="col-sm-9">: {uName} </dd>

                            <dt className="col-sm-3">Date of Birth </dt>
                            <dd className="col-sm-9">: {moment.utc(dob).format('DD/MM/YYYY')} </dd>

                            <dt className="col-sm-3">NIC </dt>
                            <dd className="col-sm-9">: {nic} </dd>

                            <dt className="col-sm-3">Address </dt>
                            <dd className="col-sm-9">: {address} </dd>

                            <dt className="col-sm-3">Email </dt>
                            <dd className="col-sm-9">: {email} </dd>

                        </dl>
                    </div>

                    <button className="btn btn-success" style={{ marginTop: '20px', marginLeft: "30px" }}>
                        <a onClick={this.pdfGenerate} style={{ textDecoration: 'none', color: 'white' }}>
                            Generate report
                        </a>
                    </button>
                </div> */}
                <div className="container" >
                    <h1 align="center">{fName}'s Profile</h1><br />
                    <div className="main-body">
                        {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </nav> */}

                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>{fName + ' ' + lName}</h4>
                                                <p className="text-muted font-size-sm">{address}</p>
                                                {/* <button className="btn btn-info">Follow</button> <br/> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Account Status</h6>
                                            <span className="text-success">Active</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">Username</h6>
                                            <span className="text-success">{uName}</span>
                                        </li>
                                        <br />
                                        <div className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="col-sm-12">
                                                <button className="btn btn-success" style={{  width: "100%"}}>
                                                    <a onClick={this.pdfGenerate} style={{ textDecoration: 'none', color: 'white' }}>
                                                        Generate report
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                        <span className="text-secondary">https://bootdey.com</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                        <span className="text-secondary">@bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li> */}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Username</h6>
                                            </div>
                                            <div className="col-sm-9 text-blue">
                                                {uName}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-blue">
                                                {fName + ' ' + mName + ' ' + lName}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">NIC</h6>
                                            </div>
                                            <div className="col-sm-9 text-blue">
                                                {nic}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-blue">
                                                {email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-blue">
                                                {address}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Birthday</h6>
                                            </div>
                                            <div className="col-sm-9 text-blue">
                                                {moment.utc(dob).format('DD/MM/YYYY')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default ProfileDetails;