import React, { useEffect, Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

class ProfileDetails extends Component {

    pdfGenerate = () => {
        const { fName, mName, lName, uName, email, dob, nic, address } = this.state.profile;
        const a=this.state.profile.uName
        var doc = new jsPDF('portrait', 'px', 'a4', 'false');

        doc.setFont('Helvertica', 'bold')
        doc.text(60, 60, "Profile details of ")
        doc.text(150,60, [a])

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
        doc.text(200, 80, [this.state.profile.fName] )
        doc.text(200, 100,  [this.state.profile.mName])
        doc.text(200, 120, [this.state.profile.lName])
        doc.text(200, 140, [this.state.profile.uName])
        doc.text(200, 180, [this.state.profile.address])
        doc.text(200, 200, [this.state.profile.dob])
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
                <div>
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
                            <dd className="col-sm-9">: {dob} </dd>

                            <dt className="col-sm-3">NIC :</dt>
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
                </div>
            </div>
        );
    }

}
export default ProfileDetails;