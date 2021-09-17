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