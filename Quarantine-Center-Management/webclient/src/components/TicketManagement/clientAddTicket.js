import React, { Component } from 'react';
import axios from 'axios';

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

    onSubmit = (e) =>{
        e.preventDefault();

        const {fullName,nic,departmentName,message} = this.state;

        const data = {
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
                        <label style={{marginBottom:'5px'}}>Topic</label>
                        <input type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="Enter Topic"
                        value={this.state.fullName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Description</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter Description"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Post Category</label>
                        <input type="text"
                        className="form-control"
                        name="departmentName"
                        placeholder="Enter Post Category"
                        value={this.state.departmentName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp;Save
                    </button>

                </form>
                
            </div>
        );
    }
}
