/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment routes
 */

import mongoose from "mongoose";

//mongo db table (schema)
const financePaymentschema = mongoose.Schema({
    paymentAmount: {
        type: String,
        required: false
    },
    invoiceNumber: {
        type: String,
        required: false
    },
    paymentType: {
        type: String,
        required: false
    },
    cardNumber: {
        type: String,
        required: false
    },
    cardName: {
        type: String,
        required: false
    },
    cardSecurityCode: {
        type: String,
        required: false
    },
    cardExpiration: {
        type: Date,
        required: false
    },
    payedDateTime: {
        type: Date,
        default: Date.now,
        required: false
    },
    invoicEexpirationDate: {
        type: Date,
        required: false
    },
    states: {
        type: String,
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
    razorpayDetails: {
        orderId: String,
        paymentId: String,
        signature: String,
    },
    success: Boolean,
});


const FinancePayment = mongoose.model('FinancePayment', financePaymentschema);

export default FinancePayment;