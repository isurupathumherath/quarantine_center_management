//inquary schema 
import mongoose from "mongoose";

const InquarySchma = mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    insertedDateTime: {
        type: Date,
        default: Date.now,
        required: false
    },
    piority: {
        type: String,
        required: false
    }, 
    payedDateTime: {
        type: String, 
        required: false
    },
    invoicEexpirationDate: {
        type: String,
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
});


const FinanceInquary = mongoose.model('FinanceInquary', InquarySchma);

export default FinanceInquary;