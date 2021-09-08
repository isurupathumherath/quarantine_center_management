/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
    Name - EMP Salary Model
 */

const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const EmployeeSalarySchema = new mongoose.Schema({
    EmployeeID: {
        type: String, 
        required: true,
        unique: true
    },
    Grade: {
        type:String,
        trim: true,
        required: true
    },
    PerDay: {
        type: Number,
        required: true
    },
    AdditionalHour: {
        type: Number,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model('EmployeeSalary', EmployeeSalarySchema);