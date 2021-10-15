const express = require('express')
var router = express.Router()
var ObjectID= require('mongoose').Types.ObjectId
var multer = require('multer')
var uniqid = require('uniqid')

var { room } = require('../models/room')
var { booking } = require('../models/booking')
var { feedback } = require('../models/feedback')

router.get('/',(req,res)=>{
    room.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

