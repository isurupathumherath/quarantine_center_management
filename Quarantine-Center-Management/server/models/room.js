const mongoose = require('mongoose')

var room = mongoose.model('room',{
    roomID: {type:String},
    roomName: {type:String},
    roomType: {type:String},
    description: {type:String},
    image: {type:String},
    total: {type:Number},

})

module.exports = { room }













