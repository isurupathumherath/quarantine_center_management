/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payer model
 */

import mongoose from "mongoose";

//mongo db table (schema)
const financePayerschema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    email: String,
    contactNumber: String,
    status: String,
    updatedDate: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const FinancePayer = mongoose.model('FinancePayer', financePayerschema);

export default FinancePayer;