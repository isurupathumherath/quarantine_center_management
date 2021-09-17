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