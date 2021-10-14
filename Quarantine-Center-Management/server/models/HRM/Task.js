/*
    Created by - Isuru Pathum Herath
    On - 25/09/2021
    Name - HRM Task Model
 */

    const mongoose = require('mongoose');
    const {ObjectId} = mongoose.Schema;
    
    const TaskSchema = new mongoose.Schema({
        EmployeeID: {
            type: String, 
            required: true
        },
        TaskName: {
            type:String,
            required: true
        },
        Status: {
            type: String,
            default: "Pending"
        },
        Priority: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        }
    }, {timestamps: true});
    
    module.exports = mongoose.model('Task', TaskSchema);