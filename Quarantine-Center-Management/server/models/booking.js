const mongoose = require('mongoose')

var booking = mongoose.model('booking',{
    fname: {type:String},
    lname: {type:String},
    nic: {type:String},
    email: {type:String},
    checkin: {type:String},
    checkout: {type:String},
    roomid: {type:String},
    patientid: {type:String},
    price: {type:Number},
})

module.exports = { booking }