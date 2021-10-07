const mongoose = require('mongoose') 

const bookingSchema = mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    checkin: {
        type: String
    },
    checkout: {
        type: String
    },
    roomid: {
        type: String
    },
    patientid: {
        type: String
    },
    price: {
        type: String
    },
})

const Booking = mongoose.model('booking', bookingSchema);

export default Booking;