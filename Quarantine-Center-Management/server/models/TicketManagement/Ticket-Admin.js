/*
    Created by - Vishara Prabuddhi
    On - 28/08/2021
    Name - Ticket Admin CRUD
 */

const mongoose = require('mongoose');

const TicketAdminSchema = new mongoose.Schema({


    refID:{
        type:String,
        required:true
    },

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
    },
    reply:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'New'
    }


});

module.exports = mongoose.model('tickets' ,TicketAdminSchema);