const mongoose = require('mongoose')

// var room = mongoose.model('room',{
//     roomID: {type:String},
//     roomName: {type:String},
//     roomType: {type:String},
//     description: {type:String},
//     image: {type:String},
//     total: {type:Number},

// })
// module.exports = { room }

const roomSchema = mongoose.Schema({
    roomID: {
        type:String
    },
    roomName: {
        type:String
    },
    roomType: {
        type:String
    },
    description: {
        type:String
    },
    image: {
        type:String
    },
    total: {
        type:Number
    },
})

const Room = mongoose.model('rooms',roomSchema );

export default Room;














