/*
    Created by - Vishara Prabuddhi
    On - 30/08/2021
    Name - Client Add Ticket
 */

import React, { Component } from 'react';
import axios from 'axios';
const generateUniqueId = require('generate-unique-id');

export default class clientAddTicket extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"",
            nic:"",
            departmentName:"",
            message:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

    onSubmit = (e) =>{
        e.preventDefault();

        const {fullName,nic,departmentName,message} = this.state;

        const refID = generateUniqueId({
                length: 10,
                useLetters: true
              });

        const data = {
            refID:refID,
            fullName:fullName,
            nic:nic,
            departmentName:departmentName,
            message:message
        }

        console.log(data)

        axios.post("http://localhost:8000/ticket/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        fullName:"",
                        nic:"",
                        departmentName:"",
                        message:""
                    }
                )
            }
        })
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create New Post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="Enter Full Name"
                        value={this.state.fullName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>NIC</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter NIC"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label  style={{marginBottom:'5px'}}>Department</label>
                        <select
                         class="form-control" 
                         name="departmentName"
                         value={this.state.departmentName}
                         onChange={this.handleInputChange}>
                            <option selected disabled value="">Select Department</option>
                            <option>FnB</option>
                            <option>medical</option>
                            <option>room</option>
                            <option>HK</option>
                            <option>admin</option>
                        </select>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Message</label>
                        <input type=""
                        className="form-control"
                        name="message"
                        placeholder="Enter Message"
                        value={this.state.message}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;Save
                    </button>
                    {/* <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;My Tickets
                    </button> */}

                </form>
                <br></br><br></br><br></br>
            </div>
            
        );
    }
}
