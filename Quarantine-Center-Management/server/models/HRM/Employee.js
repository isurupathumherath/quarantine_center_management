/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
 */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    },
    middleName: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    },
    mobileNumber: {
        type: Number,
        max: 999999999,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true
    },
    NIC: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        default: "null"
    },
    type: {
        type: String,
        default: "employee"
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        min: 8,
        required: true
    },
    accountStatus: {
        type: String,
        required: true
    },
    profileURL: {
        type: String,
        required: false
    }

}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);