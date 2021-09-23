import React, { Component } from 'react';
import axios from 'axios';

class ProfileDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            profile:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/profile/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({
                    profile:res.data.profile
                });
                console.log(this.state.profile);
            }
        });
    }

    render() {
        
            const {fName, mName, lName, uName, email, dob, nic, address} = this.state.profile;
        return (
            <div>
                <div style={{marginTop:'20px', marginLeft: "30px"}}>
                    <h2>Profile Details</h2>
                </div>
                
                <div style={{marginTop:'20px', marginLeft: "30px"}}>
                <center> <h4>{uName}</h4> </center>
                <hr/>
                     
                        <dl className="row">
                        <dt className="col-sm-3">First Name :</dt>
                        <dd className="col-sm-9">{fName}</dd>

                        <dt className="col-sm-3">Middle Name :</dt>
                        <dd className="col-sm-9"> {mName} </dd>

                        <dt className="col-sm-3">Last Name :</dt>
                        <dd className="col-sm-9"> {lName} </dd>

                        <dt className="col-sm-3">Date of Birth :</dt>
                        <dd className="col-sm-9"> {dob} </dd>

                        <dt className="col-sm-3">NIC :</dt>
                        <dd className="col-sm-9"> {nic} </dd>

                        <dt className="col-sm-3">Address :</dt>
                        <dd className="col-sm-9"> {address} </dd>

                        <dt className="col-sm-3">Email :</dt>
                        <dd className="col-sm-9"> {email} </dd>                
 
                        </dl>
                </div>
            </div>
        );
    }
    
}
export default ProfileDetails;