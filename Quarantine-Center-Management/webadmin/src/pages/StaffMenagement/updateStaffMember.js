/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - updateStaffMember
    Last Update - 11/09/2021
 */

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const updateStaffMember = props => {
    // state
    const [state, setState] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        DOB: '',
        // DOB: new Date(),
        NIC: '',
        address: '',
        type: ''
    });

     //destructure values from state
     const{firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address} = state;

     useEffect(() => {
        axios
            .get(`http://localhost:8000/employee//displayEmployeeById/${props.match.params.id}`)
            .then(response => {
                const {firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address} = response.data
                setState({...state, firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address})
            })
            .catch(error => alert('Error Loading Update Staff'));
    }, []);

    const showUpdateForm = () => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label className="text-muted">First Name</label>
              <input onChange={handleChange('firstName')} value={firstName} type="text" className="form-control" placeholder="Enter the First Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required/>
          </div>
          <div className="form-group">
              <label className="text-muted">Middle Name</label>
              <input onChange={handleChange('middleName')} value={middleName} type="text" className="form-control" placeholder="Enter the Middle Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required/>
          </div>
          <div className="form-group">
              <label className="text-muted">Last Name</label>
              <input onChange={handleChange('lastName')} value={lastName} type="text" className="form-control" placeholder="Enter the Last Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required/>
          </div>
          <div className="form-group">
              <label className="text-muted">Mobile Number</label>
              <input onChange={handleChange('mobileNumber')} value={mobileNumber} type="text" className="form-control" placeholder="Enter the Mobile Number" pattern="[0-9]{10}" title="Invalid Mobile Number." required/>
          </div>
          <div className="form-group">
              <label className="text-muted">Email Address</label>
              <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="Enter the Email Address" title="Invalid Email Address."  required/>
          </div>
          <div className="form-group">
              <label className="text-muted">Birth Day</label>
              <input onChange={handleChange('DOB')} value={DOB} className="form-control" placeholder="Enter the Date of Birth" required/>
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
              <input onChange={handleChange('NIC')} value={NIC} type="text" className="form-control" placeholder="Enter the NIC" pattern="[0-9]{12}" title="Invalid NIC Number." required/>
          </div>
          <div className="form-group">
              <label className="text-muted">Address</label>
              <input onChange={handleChange('address')} value={address} type="text" className="form-control" placeholder="Enter the Address" required/>
          </div>
          <div>
              <button className="btn btn-primary">Update</button>
          </div>
      </form>
    )

    function handleChange(name) {
        return function(event) {
            setState({ ...state, [name]: event.target.value});
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.table({firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address})
        axios
            .put(`http://localhost:8000/employee/`, { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address })
            .then(response => {

                console.log(response)
                const {title, content, slug, user} = response.data
                
                //empty state
                setState({ ...state, title, content, slug, user} );
                //show success alert
                alert(`Post Titled ${title} is Updated`);
            })
            .catch(error => {
                console.log(error.Response)
                alert(error.response.data.error)
            })
    };
     
}


export default updateStaffMember;