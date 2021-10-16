/*
    Created by - Isuru Pathum Herath
    On - 13/10/2021
 */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const StaffAttendanceSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    inTime: {
        type: String,
        required: true
    },
    outTime: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('StaffAttendance', StaffAttendanceSchema);