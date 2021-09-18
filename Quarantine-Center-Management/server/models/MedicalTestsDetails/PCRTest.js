const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PCRTestSchema = new Schema({
    PatientId : {
        type : Number,
        required:true
    },

    PCRTestId : {
        type : String,
        required : true
    },

    TestNo : {
        type : Number,
        required : true
    },

    TestDate : {
        type : Date,
        required : true
    },

    TestTime : {
        type : String,
        required : true
    },

    Result : {
        type : String,
        required : true
    }

})

const PCRTest = mongoose.model("PCRTest",PCRTestSchema);

module.exports = PCRTest;
