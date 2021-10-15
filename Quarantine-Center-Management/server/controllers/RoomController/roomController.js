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
router.get('/get_booking',(req,res)=>{
    booking.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/:id',(req,res)=>{
    
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    room.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})
router.post('/',(req,res)=>{
    var newRecord= new room({
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.description,
        image: req.body.image,
        total: req.body.total,
    })

    newRecord.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})
router.post('/booking',(req,res)=>{
    var record= new booking({
        fname: req.body.fname,
        lname: req.body.lname,
        nic: req.body.nic,
        email: req.body.email,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        roomid: req.body.roomid,
        patientid: req.body.patientid,
        price: req.body.price
    })
