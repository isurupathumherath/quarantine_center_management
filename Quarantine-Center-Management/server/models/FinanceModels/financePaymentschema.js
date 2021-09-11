/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment routes
 */

import mongoose from "mongoose";

//mongo db table (schema)
const financePaymentschema = mongoose.Schema({
    paymentAmount: String,
    invoiceNumber: String,
    paymentType: String,
    cardNumber: String,
    cardholdersName: String,
    cvv: String,
    expiaryDate: String,
    payedDateTime: String,
    invoicEexpirationDate: String, 
    states : String, 
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const FinancePayment = mongoose.model('FinancePayment', financePaymentschema);

export default FinancePayment;