/*
    Created by - Isuru Pathum Herath
    On - 17/09/2021
 */

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const QuarantinedEmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    startedDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    specialNotes: {
        type: String,
        max: 2000,
        required: false
    }

}, { timestamps: true });

module.exports = mongoose.model('QuarantinedEmployee', QuarantinedEmployeeSchema);