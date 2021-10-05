/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment routes
 */

    import mongoose from "mongoose";

    //mongo db table (schema)
    const InquarySchma = mongoose.Schema({
        Inquaryid:{
            type: String,
            required: false 
        },
        title:{
            type: String,
            required: false 
        },
        type:{
            type: String,
            required: false 
        },
        description:{
            type: String,
            required: true 
        },
        insertedDateTime:{
            type: String,
            required: true 
        },
        piority:{
            type: String,
            required: true 
        },
        states:{
            //1= inserted / 2 = pending / 3 = on review / 4 = replyed / 5 = closed
            type: Date,
            required: true 
        },
        payedDateTime:{
            type: Date,
            default: Date.now,
            required: false
        },
        invoicEexpirationDate:{
            type: Date,
            required: false 
        },
        states:{
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