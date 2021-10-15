const mongoose = require('mongoose')

var feedback = mongoose.model('feedback',{
    fname: {type:String},
    lname: {type:String},
    nic: {type:String},
    email: {type:String},
    checkin: {type:String},
    checkout: {type:String},
    roomid: {type:String},
    patientid: {type:String},
    feedback: {type:String},
})

module.exports = { feedback }