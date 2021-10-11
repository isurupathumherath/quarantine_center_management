const mongoose = require('mongoose') 

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














