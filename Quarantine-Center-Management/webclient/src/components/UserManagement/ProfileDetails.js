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
        
            const {fName,lName,uName,email,password} = this.state.profile;
        return (
            <div>
                Profile Details

                <div style={{marginTop:'20px'}}>
                <center> <h4>{uName}</h4> </center>
                <hr/>
                     
                        <dl className="row">
                        <dt className="col-sm-3">First Name :</dt>
                        <dd className="col-sm-9">{fName}</dd>

                        <dt className="col-sm-3">Last Name :</dt>
                        <dd className="col-sm-9"> {lName} </dd>

                        <dt className="col-sm-3">Email :</dt>
                        <dd className="col-sm-9"> {email} </dd>

                        <dt className="col-sm-3">password :</dt>
                        <dd className="col-sm-9"> {password} </dd>
  
                        </dl>
                </div>
            </div>
        );
    }
    
}
export default ProfileDetails;