import React from 'react';

import swal from 'sweetalert';
import axios from 'axios';

const initialState = {
    fname: "",
    lname: "",
    nic: "",
    email: "",
    checkin: "",
    checkout: "",
    roomid: "",
    patientid: "",
    feedback: "",
    fnameError: "",
    lnameError: "",
    nicError: "",
    emailError: "",
    checkinError: "",
    checkoutError: "",
    roomidError: "",
    feedbackError: "",
    rooms: [],
    search: '',
}

class Feedback extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }

    componentDidMount() {
        const url = "http://localhost:8000/room";
        axios.get(url)
        .then(response => this.setState({rooms:response['data']})
        )
        this.setState({patientid:"12345678"})
    }

    onClear(){
        this.setState(initialState);
        this.componentDidMount();
    }
    
    validation = () => {

        let fnameError = "";
        let lnameError = "";
        let nicError = "";
        let emailError = "";
        let checkinError = "";
        let checkoutError = "";
        let roomidError = "";
        let feedbackError = "";

        if(!this.state.fname){
            fnameError="First Name Required!"
        }

        if(!this.state.lname){
            lnameError="Last Name Required!"
        }

        if(!this.state.nic){
            nicError="Nic Required!"
        }

        if(!this.state.email){
            emailError="Email Required!"
        }

        if(!this.state.checkin){
            checkinError="Check In Required!"
        }

        if(!this.state.checkout){
            checkoutError="Check Out Required!"
        }

        if(!this.state.roomid){
            roomidError="Select Room!"
        }

        if(!this.state.feedback){
            feedbackError="Feedback Required!"
        }

        if( fnameError | lnameError | nicError | emailError | checkinError | checkoutError | roomidError | feedbackError ){
            
            this.setState({ fnameError , lnameError , nicError , emailError , checkinError , checkoutError , roomidError , feedbackError });
            
            return false;

        }else{

            this.setState({ fnameError , lnameError , nicError , emailError , checkinError , checkoutError , roomidError , feedbackError });
        
        }

        return true;
    }

    SubmitForm = async(e) => {
        alert("ok");
        e.preventDefault();
        this.validation();
        const url1 = "http://localhost:8000/room/"+this.state.roomid;
        // await axios.get(url1).then(response => this.setState({price:response['data']['total']}))
        //feedbackError
        if(true){
            console.log(this.state);
            const url = 'http://localhost:8000/room/feedback';
            var datas = JSON.stringify({ fname: this.state.fname , lname: this.state.lname , email: this.state.email , checkin: this.state.checkin , checkout: this.state.checkout, roomid: this.state.roomid , patientid: this.state.patientid ,feedback: this.state.feedback });
            console.log(datas);
            await axios.post(url,datas,{
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => {
                console.log(res.data);
                if(res.data){
                    this.setState(initialState)
                    this.componentDidMount()
                    swal("Success!", "Feedback Added Successfully!", "success")
                }else{
                    swal("Error!", "Unsuccessful! Can't Enter Duplicate Email", "error")
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    render (){
        const { rooms } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                       
                        <hr/>

                        <div class="card">
  <div class="card-header bg-info"> 
  <h1 class="headingCenter">SHARE YOUR EXPERIENCE WITH US!!!!</h1>
  </div>

  <div class="card-body">
  <form autoComplete="off" onSubmit={this.SubmitForm}>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">First Name</label>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.fnameError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">Last Name</label>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" name="lname" value={this.state.lname} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.lnameError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">Email</label>
                                    <div class="col-md-8">
                                        <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.emailError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">Check In</label>
                                    <div class="col-md-8">
                                        <input type="date" class="form-control" name="checkin" value={this.state.checkin} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.checkinError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">Check Out</label>
                                    <div class="col-md-8">
                                        <input type="date" class="form-control" name="checkout" value={this.state.checkout} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.checkoutError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">Room Name</label>
                                    <div class="col-md-8">
                                        <select class="form-control" name="roomid" onChange={this.handleChange} value={this.state.roomid}>
                                            <option value="">~select~</option>
                                            {
                                                rooms.map((res) =>
                                                    <option value={ res._id }>{ res.roomName }</option>
                                            )}
                                        </select>
                                        <div style={{color : "red"}}>{this.state.roomidError}</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-2 col-form-label text-md-left font-weight-bold">Feedback</label>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" name="feedback" value={this.state.feedback} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.feedbackError}</div>
                                    </div>
                                </div>
                                

                                <br/>
                                <div class="col-md-4 offset-md-4">
                                    <input type="submit" class="btn btn-outline-primary" value="Submit" />&nbsp;&nbsp;&nbsp;
                                    <input type="button" class="btn btn-outline-danger" value="Clear" onClick={() => this.onClear()} />
                                </div>
                            </form>
  </div>
</div>


                            
                            <br/>
                </div>
            </div>
        );
    }
}

export default Feedback;
