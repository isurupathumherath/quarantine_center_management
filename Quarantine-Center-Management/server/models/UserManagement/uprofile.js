const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    fName:{
        type: String,
        required:true,
        trim: true
    },

    mName:{
        type:String,
        required:true,
        trim: true

    },

    lName:{
        type:String,
        required:true,
        trim: true

    },
    uName:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        trim: true,
       // validate(value) {
        //    if (!validator.isEmail(value)) {
        //      throw new Error('Email is not valid')
         //   }
        //}
    },

    dob: {
        type: Date,
        required: true
    },

    nic: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
        default: "null"
    },

    type: {
        type: String,
        default: "user"
    },
    password:{
        type:String,
        min: 8,
        max:16,
        required:true,
        trim: true
    },
    
    resetPasswordLink:{
        data: String,
        default:""
    },

    Favourites:[
        {
            id:{type: String},
            name:{type: String},
        },
    ]

},{timestamp:true});

module.exports = mongoose.model('Profiles', profileSchema)