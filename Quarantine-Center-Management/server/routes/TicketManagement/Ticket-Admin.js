/*
    Created by - Vishara Prabuddhi
    On - 28/08/2021
    Name - Ticket Admin CRUD
 */

const express = require('express');
const tickets = require('../../models/TicketManagement/Ticket-Admin');
    
const router = express.Router();
    
//save ticket
    
router.post('/ticket/save' ,(req,res)=>{
    
    let newTicket = new tickets(req.body);
    
    newTicket.save((err)=>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            success:"Ticket saved successfully"
        });
               
    });
    
});
    
//get tickets
router.get('/tickets',(req,res) => {
    tickets.find().exec((err,tickets) =>{
        if(err){
            return res.status(400).json({
                    error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingTickets:tickets
        });
    });
});
    
//get a specific ticket
router.get("/ticket/:id",(req,res) =>{
    let ticketId = req.params.id;
    
    tickets.findById(ticketId,(err,ticket) =>{
        if(err){
            return res.status(400).json({success:false,err})
        }
            
        return res.status(200).json({
            success:true,
            ticket
        });
    });
});


//update tickets
    
router.put('/ticket/update/:id',(req,res)=>{
    tickets.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,ticket)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});
    
//delete tickets
    
router.delete('/ticket/delete/:id',(req,res) =>{
    tickets.findByIdAndRemove(req.params.id).exec((err,deletedTicket) =>{
            if(err)
            return res.status(400).json({
                message:"Delete Unsuccessful",err
            });
    
            return res.json({
                message:"Delete Successful",deletedTicket
            });
    });
});
    

module.exports = router;
     
    