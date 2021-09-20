import React from 'react';
import '../App.css';
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
    price: "",
    fnameError: "",
    lnameError: "",
    nicError: "",
    emailError: "",
    checkinError: "",
    checkoutError: "",
    roomidError: "",
    priceError: "",
    rooms: [],
    search: '',
}
lass Booking extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const url = "http://localhost:3500/room";
        axios.get(url)
        .then(response => this.setState({rooms:response['data']})
        )
        this.setState({patientid:"12345678"})
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
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
        let priceError = "";

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

        if(!this.state.price){
            priceError="Price Required!"
        }

        if( fnameError | lnameError | nicError | emailError | checkinError | checkoutError | roomidError | priceError ){
            
            this.setState({ fnameError , lnameError , nicError , emailError , checkinError , checkoutError , roomidError , priceError });
            
            return false;

        }else{

            this.setState({ fnameError , lnameError , nicError , emailError , checkinError , checkoutError , roomidError , priceError });
        
        }

        return true;

    }

    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();
        if(this.state.fname&&this.state.lname&&this.state.email&&this.state.checkin&&this.state.checkout&&this.state.roomid&&this.state.patientid&&this.state.price){
            console.log(this.state);
            const url = 'http://localhost:3500/room/booking/';
            var datas = JSON.stringify({ fname: this.state.fname , lname: this.state.lname , email: this.state.email , checkin: this.state.checkin , checkout: this.state.checkout, roomid: this.state.roomid , patientid: this.state.patientid ,price: this.state.price });
            console.log(datas);
            await axios.post(url,datas,{
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => {
                console.log(res.data);
                this.setState(initialState)
                this.componentDidMount()
                swal("Success!", "Edit Successful!", "success")
            })
        }
    }
    render (){
        const { rooms } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h1>ALL Rooms</h1>
                    <hr/>
                    <div class="x_scroll">
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Search</label>
                            <div class="col-md-6">
                            <input type="text" class="form-control" name="search" value={this.state.search} onChange={this.handleChange} />
                            </div>
                        </div>

                    <hr/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="tableTh">Room Name</th>
                                <th class="tableTh">Room Type</th>
                                <th class="tableTh">Description</th>
                                <th class="tableTh">Image</th>
                                <th class="tableTh">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                         {
                            rooms.filter((data)=>{
                                if(this.state.search == null)
                                    return data
                                else if(data._id.toLowerCase().includes(this.state.search.toLowerCase()) || data.roomName.toLowerCase().includes(this.state.search.toLowerCase()) ||data.roomName.toLowerCase().includes(this.state.search.toLowerCase()) || data.roomType.toLowerCase().includes(this.state.search.toLowerCase()) || data.description.toLowerCase().includes(this.state.search.toLowerCase())){
                                    return data
                                }
                            }).map((res) =>

                            <tr>
                                <td class="tableTh">{ res.roomName }</td>
                                <td class="tableTh">{ res.roomType }</td>
                                <td class="tableTh">{ res.description }</td>
                                <td class="tableTh"><img width="100px" alt="" src={ "http://localhost:3500/"+res.image } class="img-thumbnail"/></td>
                                <td class="tableTh">{ res.total }</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <hr/>
                        <h1>Booking</h1>
                        <hr/>
                            <form autoComplete="off" onSubmit={this.SubmitForm}>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">First Name</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" name="fname" value={this.state.fname} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.fnameError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">Last Name</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" name="lname" value={this.state.lname} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.lnameError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">Email</label>
                                    <div class="col-md-6">
                                        <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.emailError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">Check In</label>
                                    <div class="col-md-6">
                                        <input type="date" class="form-control" name="checkin" value={this.state.checkin} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.checkinError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">Check Out</label>
                                    <div class="col-md-6">
                                        <input type="date" class="form-control" name="checkout" value={this.state.checkout} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.checkoutError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">Room Name</label>
                                    <div class="col-md-6">
                                        <select class="form-control" name="search" onChange={this.handleChange} value={this.state.search}>
                                            <option value="">~select~</option>
                                            {
                                                  rooms.map((res) =>
                                                    <option value={ res._id }>{ res.roomName }</option>
                                            )}
                                        </select>
                                        <div style={{color : "red"}}>{this.state.roomidError}</div>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group row">
                                    <label class="col-md-4 col-form-label text-md-right font-weight-bold">Price</label>
                                    <div class="col-md-6">
                                        <input type="number" class="form-control" name="price" value={this.state.price} onChange={this.handleChange} />
                                        <div style={{color : "red"}}>{this.state.priceError}</div>
                                    </div>
                                </div>

                                <br/>   
                                <div class="col-md-4 offset-md-4">
                                    <input type="submit" class="btn btn-outline-primary" value="Submit" />
                                    <input type="button" class="btn btn-outline-danger" value="Clear" onClick={() => this.onClear()} />
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booking;

