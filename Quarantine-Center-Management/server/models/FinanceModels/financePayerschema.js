/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payer model
 */

import mongoose from "mongoose";

//mongo db table (schema)
const financePayerschema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        max: 999999999,
        required: true
    },
    status: {
        type: String,
        required: false
    },
    updatedDate: {
        type: Date,
        default: Date.now,
        required: false
    },
    userID: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const FinancePayer = mongoose.model('FinancePayer', financePayerschema);

export default FinancePayer;