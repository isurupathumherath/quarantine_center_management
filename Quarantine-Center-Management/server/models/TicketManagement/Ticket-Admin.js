/*
    Created by - Vishara Prabuddhi
    On - 28/08/2021
    Name - Ticket Admin CRUD
 */

const mongoose = require('mongoose');

const TicketAdminSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    departmentName:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('tickets' ,TicketAdminSchema);