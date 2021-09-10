import React, { Component } from 'react';
import axios from 'axios';

export default class adminEditTickets extends Component {


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
        });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {fullName,nic,departmentName,message} = this.state;

        const data = {
            fullName:fullName,
            nic:nic,
            departmentName:departmentName,
            message:message
        }

        console.log(data)

        axios.put(`http://localhost:8000/ticket/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Are you sure you want to send reply to this entry?")
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
        this.props.history.push("/");
        
    }
    

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/ticket/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    fullName:res.data.ticket.fullName,
                    nic:res.data.ticket.nic,
                    departmentName:res.data.ticket.departmentName,
                    message:res.data.ticket.message
                });
                
                console.log(this.state.ticket);
            }
        });
    }

    render() {

        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Reply Ticket</h1>
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
                        <label style={{marginBottom:'5px'}}>Edit NIC</label>
                        <input type="text"
                        className="form-control"
                        name="nic"
                        placeholder="Enter NIC"
                        value={this.state.nic}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Edit Department Name</label>
                        <input type="text"
                        className="form-control"
                        name="departmentName"
                        placeholder="Enter Department Name"
                        value={this.state.departmentName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Edit Message</label>
                        <input type="text"
                        className="form-control"
                        name="message"
                        placeholder="Enter Message"
                        value={this.state.message}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit} >
                        <i className="far fa-check-square"></i>
                        &nbsp;Update
                    </button> 

                </form>
            </div>
        );
    }
}
