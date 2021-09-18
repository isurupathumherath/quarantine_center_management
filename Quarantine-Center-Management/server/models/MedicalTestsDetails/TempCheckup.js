const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TempCheckupSchema = new Schema({
    PatientId : {
        type : String,
        required : true
    },

    CheckupId : {
        type : String,
        required : true
    },

    CheckupDate : {
        type : Date,
        required : true
    },

    CheckupTime : {
        type : String,
        required : true
    },

    Result : {
        type : String,
        required : true
    }

})

const TempCheckup = mongoose.model("TempCheckup",TempCheckupSchema);

module.exports = TempCheckup;

