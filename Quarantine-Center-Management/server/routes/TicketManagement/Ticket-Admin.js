/*
    Created by - Vishara Prabuddhi
    On - 28/08/2021
    Name - Ticket Admin CRUD
 */

const express = require('express');
const tickets = require('../../models/TicketManagement/Ticket-Admin');
const pdf = require('html-pdf');
const pdfReport = require('../../documents');

const router = express.Router();

//save ticket

router.post('/ticket/save', (req, res) => {

    let newTicket = new tickets(req.body);
    const email = req.body.email;
    console.log(email);

    newTicket.save((err, ticket) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }


        const refCode = ticket.refID;
        // console.log(ticket.refID);

        const nodemailer = require("nodemailer");

        async function main() {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MAIL_SERVER_USERNAME,
                    pass: process.env.MAIL_SERVER_PASSWORD
                }
            });

            var mailOptions = {
                from: 'quarantine@out.com',
                to: `${email}`,
                subject: 'Your Ticket Details',
                text: `
                            Hi
                        
                            Your ticket reference number is ${refCode}
                            Thank you for contacting us. We will get back to you soon.
                        `

            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

        }

        main().catch(console.error);

        return res.status(200).json({
            success: "Ticket saved successfully"

        });

    });

});

//get tickets
router.get('/tickets', (req, res) => {
    tickets.find().exec((err, tickets) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingTickets: tickets
        });
    });
});

//get a specific ticket for reply part
router.get("/ticket/:id", (req, res) => {
    let ticketId = req.params.id;

    tickets.findById(ticketId, (err, ticket) => {
        if (err) {
            return res.status(400).json({ success: false, err })
        }

        return res.status(200).json({
            success: true,
            ticket
        });
    });
});

// //get a specific ticket for myticket part
// router.get("/ticket/:userID", (req, res) => {
//     let userID = req.params.id;

//     tickets.findById(ticketId, (err, ticket) => {
//         if (err) {
//             return res.status(400).json({ success: false, err })
//         }

//         return res.status(200).json({
//             success: true,
//             ticket
//         });
//     });
// });

//update tickets

router.put('/ticket/update/:id', (req, res) => {
    

    const email = req.body.email;
    console.log(email);

    tickets.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, ticket) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }


            const refCode = ticket.refID;
            const tReply = ticket.reply;
            // console.log(ticket.refID);
    
            const nodemailer = require("nodemailer");
    
            async function main() {
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.MAIL_SERVER_USERNAME,
                        pass: process.env.MAIL_SERVER_PASSWORD
                    }
                });
    
                var mailOptions = {
                    from: 'quarantine@out.com',
                    to: `${email}`,
                    subject: 'Your Ticket Details',
                    text: `
                                Hi
                            
                                Your ticket reference number is ${refCode}
                                Reply to your ticket is ${tReply}
                            `
    
                };
    
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
    
            }
    
            main().catch(console.error);

            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});

//delete tickets

router.delete('/ticket/delete/:id', (req, res) => {
    tickets.findByIdAndRemove(req.params.id).exec((err, deletedTicket) => {
        if (err)
            return res.status(400).json({
                message: "Delete Unsuccessful", err
            });

        return res.json({
            message: "Delete Successful", deletedTicket
        });
    });
});

//create the PDF

router.post('/create-pdf', (req, res) => {
    pdf.create(pdfReport(req.body), {}).toFile('pdfsub.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get the PDF

router.get('/fetch-pdf', (req, res) => {
    res.sendFile('pdfsub.pdf', { root: 'Quarantine-Center-Management/server/pdfsub.pdf' });
})



module.exports = router;

