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


