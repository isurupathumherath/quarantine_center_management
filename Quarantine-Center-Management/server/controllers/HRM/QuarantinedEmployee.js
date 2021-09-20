/*
    Created by - Isuru Pathum Herath
    On - 17/09/2021
    Name - Quarantined Employee CRUD
    Last Updated - 20/09/2021
 */

    const QEmployee = require('../../models/HRM/QuarantinedEmployee');
    require('dotenv').config();
    
    /*
    Name - Add Quarantined Employee
    Date - 20/09/2021
     */
    exports.create = (req, res) => {
    
        const { employeeId, firstName, middleName, lastName, startedDate, endDate,  specialNotes } = req.body
        
            //Check Empty Parameters
            switch(true) {
                case !employeeId:
                    return res.status(400).json({
                        error: 'Employee ID is required'
                    });
                case !firstName:
                    return res.status(400).json({
                        error: 'First Name is required'
                    });
                case !middleName:
                    return res.status(400).json({
                        error: 'Middle Name is required'
                    });
                case !lastName:
                    return res.status(400).json({
                        error: 'Last Name is required'
                    });
                case !startedDate:
                    return res.status(400).json({
                        error: 'Started Date is required'
                    });
                case !endDate:
                    return res.status(400).json({
                        error: 'End Date is required'
                    });
               //  case !email:
               //      return res.status(400).json({
               //          error: 'Email Address is required'
               //      });
            }
        
            //Check Server Errors
            QEmployee.create({employeeId, firstName, middleName, lastName, startedDate, endDate,  specialNotes}, (err, qemployee) => {
                
                //Check Server Errors
                if(err) {
                    console.log(err)
                    console.log("Error = " + err.code)
                    console.log("Error Message = " + err.message)
                    if(err.keyPattern.employeeId == 1) {
                        res.status(400).json({
                            error: 'Employee ID is already used'
                        });
                    }
                    else {
                        res.status(400).json({
                            error: 'Internal Server Error! Try Again!'
                        });
                    }
                    
                }
                res.json(qemployee);
            });
    
            // const nodemailer = require("nodemailer");
    
            // async function main() {
            //     var transporter = nodemailer.createTransport({
            //         service: 'gmail',
            //         auth: {
            //           user: process.env.MAIL_SERVER_USERNAME,
            //           pass: process.env.MAIL_SERVER_PASSWORD
            //         }
            //       });
                  
            //       var mailOptions = {
            //         from: 'quarantine@out.com',
            //         to: `${email}`,
            //         subject: 'Your Login Details',
            //         text: `
            //             Hi
                    
            //             You have been added as a Quarantined Staff Member from ${startedDate} to ${endDate}
                        
            //             We will inform you when you are able to report back to the work place ASAP. 
            //             Get well soon!
                        
            //             This is an auto generated email. If you have any issue feel free to contact the support center 0761714844
                        
            //             Thank You`
            //       };
                  
            //       transporter.sendMail(mailOptions, function(error, info){
            //         if (error) {
            //           console.log(error);
            //         } else {
            //           console.log('Email sent: ' + info.response);
            //         }
            //       });
            
            //     }
            
            //     main().catch(console.error);
        };
    
    /*
    Name - Display All Quarantined Employee
    Date - 20/09/2021
     */
    
    exports.showAll = (req, res) => {
      QEmployee.find({})
            // .limit(10)
            .sort({ createdAt: -1})
            .exec((err, qemployee) => {
                if(err) console.log(err);
                res.json(qemployee);
            });
    };

    /*
    Name - Display Quarantined Employee Details by _Id
    Date - 22/08/2021
     */
    exports.readByDatabaseId = (req, res) => {
        const { id } = req.params
        console.log(req.params.id)
        QEmployee.findOne({id})
            .exec((err, qemployee) => {
                if(err) console.log(err);
                res.json(qemployee);
            });
    };
    
    
    /*
    Name - Update Employee Details by Id
    Date - 11/09/2021
     */
    exports.updateEmployeeDetail = (req, res) => {
        const { id } = req.params;
        const {employeeId, firstName, middleName, lastName, startedDate, endDate,  specialNotes} = req.body;
        Employee.findOneAndUpdate({id}, {employeeId, firstName, middleName, lastName, startedDate, endDate,  specialNotes}, {new: true}).exec((err, post) => {
            if(err) console.log(err);
            res.json(post);
        }) 
    }
    
    /*
    Name - Delete Quarantine Employee by _ID
    Date - 20/09/2021
     */
    exports.removebyId = (req, res) => {
        const { id } = req.params.id;
        QEmployee.findOneAndRemove({id}).exec((err, qemployee) => {
            if(err) console.log(err);
            res.json({
                message: 'Quarantine Employee Deleted'
            });
        }) 
    }