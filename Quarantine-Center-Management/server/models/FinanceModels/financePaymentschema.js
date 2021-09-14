/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment routes
 */

import mongoose from "mongoose";

//mongo db table (schema)
const financePaymentschema = mongoose.Schema({
    paymentAmount:{
        type: String,
        required: true 
    },
    invoiceNumber:{
        type: String,
        required: true 
    },
    paymentType:{
        type: String,
        required: true 
    },
    cardNumber:{
        type: String,
        required: true 
    },
    cardholdersName:{
        type: String,
        required: true 
    },
    cvv:{
        type: String,
        required: true 
    },
    expiaryDate:{
        type: Date,
        required: true 
    },
    payedDateTime:{
        type: Date,
        default: Date.now,
        required: true
    },
    invoicEexpirationDate:{
        type: Date,
        required: false 
    },
    states:{
        type: String,
        required: true 
    },
    userID: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const FinancePayment = mongoose.model('FinancePayment', financePaymentschema);

export default FinancePayment;