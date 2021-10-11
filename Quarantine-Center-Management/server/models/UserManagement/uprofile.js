const mongoose = require('mongoose');
import bcrypt from 'bcryptjs'

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
    ],

    isAdmin:{
        type: Boolean,
        default: false
    }

},{timestamp:true});
/*
profileSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}

profileSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})*/

module.exports = mongoose.model('Profiles', profileSchema)