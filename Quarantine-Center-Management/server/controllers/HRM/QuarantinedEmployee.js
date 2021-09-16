/*
    Created by - Isuru Pathum Herath
    On - 17/09/2021
    Name - Quarantined Employee CRUD
 */

    const QEmployee = require('../../models/HRM/QuarantinedEmployee');
    require('dotenv').config();
    
    /*
    Name - Add Quarantined Employee
    Date - 17/09/2021
     */
    // exports.create = (req, res) => {
    
    //     const { employeeId, firstName, middleName, lastName, startedDate, endDate,  specialNotes } = req.body
        
    //         //Check Empty Parameters
    //         switch(true) {
    //             // case !employeeId:
    //             //     return res.status(400).json({
    //             //         error: 'Employee ID is required'
    //             //     });
    //             case !firstName:
    //                 return res.status(400).json({
    //                     error: 'First Name is required'
    //                 });
    //             case !middleName:
    //                 return res.status(400).json({
    //                     error: 'Middle Name is required'
    //                 });
    //             case !lastName:
    //                 return res.status(400).json({
    //                     error: 'Last Name is required'
    //                 });
    //             case !mobileNumber:
    //                 return res.status(400).json({
    //                     error: 'Mobile Number is required'
    //                 });
    //             case !DOB:
    //                 return res.status(400).json({
    //                     error: 'Date of Birth is required'
    //                 });
    //             case !email:
    //                 return res.status(400).json({
    //                     error: 'Email Address is required'
    //                 });
    //         }
        
    //         //Check Server Errors
    //         Employee.create({employeeId, firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, username, password}, (err, employee) => {
                
    //             //Check Server Errors
    //             if(err) {
    //                 console.log(err)
    //                 console.log("Error = " + err.code)
    //                 console.log("Key Pattern = " + err.keyPattern.NIC)
    //                 console.log("Key Pattern = " + err.keyPattern.mobileNumber)
    //                 console.log("Error Message = " + err.message)
    //                 if(err.keyPattern.mobileNumber == 1) {
    //                     res.status(400).json({
    //                         error: 'Mobile Number is already registered! Try another Mobile Number!'
    //                     });
    //                 }
    //                 else if(err.keyPattern.NIC == 1) {
    //                     res.status(400).json({
    //                         error: 'NIC is already registered! Try another NIC!'
    //                     });
    //                 }
    //                 else if(err.keyPattern.employeeId == 1) {
    //                     res.status(400).json({
    //                         error: 'Employee ID is already registered! Try Again!'
    //                     });
    //                 }
    //                 else if(err.keyPattern.username == 1) {
    //                     res.status(400).json({
    //                         error: 'Username is already registered! Try Again!'
    //                     });
    //                 }
    //                 else {
    //                     res.status(400).json({
    //                         error: 'Internal Server Error! Try Again!'
    //                     });
    //                 }
                    
    //             }
    //             res.json(employee);
    //         });
    
    //         const nodemailer = require("nodemailer");
    
    //         async function main() {
    //             var transporter = nodemailer.createTransport({
    //                 service: 'gmail',
    //                 auth: {
    //                   user: process.env.MAIL_SERVER_USERNAME,
    //                   pass: process.env.MAIL_SERVER_PASSWORD
    //                 }
    //               });
                  
    //               var mailOptions = {
    //                 from: 'quarantine@out.com',
    //                 to: `${email}`,
    //                 subject: 'Your Login Details',
    //                 text: `
    //                     Hi
                    
    //                     You can login to the system using these username and password. This is a temporary login.
                        
    //                     You have to give new username and password in your first login
                        
    //                     Username: ${username}
    //                     Password: ${password}
                        
    //                     This is an auto generated email. If you have any issue with login to the system feel free to contact the support center 0761714844
                        
    //                     Thank You`
    //               };
                  
    //               transporter.sendMail(mailOptions, function(error, info){
    //                 if (error) {
    //                   console.log(error);
    //                 } else {
    //                   console.log('Email sent: ' + info.response);
    //                 }
    //               });
            
    //             }
            
    //             main().catch(console.error);
    //     };
    
    // /*
    // Name - Display All Employees
    // Date - 22/08/2021
    //  */
    
    // exports.showAll = (req, res) => {
    //     Employee.find({})
    //         // .limit(10)
    //         .sort({ createdAt: -1})
    //         .exec((err, employee) => {
    //             if(err) console.log(err);
    //             res.json(employee);
    //         });
    // };
    
    // /*
    // Name - Display Employee Details by Employee Id
    // Date - 22/08/2021
    //  */
    // exports.readById = (req, res) => {
    //     const { employeeId } = req.params
    //     console.log(req.params._id)
    //     Employee.findOne({employeeId})
    //         .exec((err, employee) => {
    //             if(err) console.log(err);
    //             res.json(employee);
    //         });
    // };
    
    // /*
    // Name - Display Employee Details by _Id
    // Date - 11/08/2021
    //  */
    // exports.readByDatabaseId = (req, res) => {
    //     const { id } = req.params
    //     console.log(req.params.id)
    //     Employee.findOne({id})
    //         .exec((err, employee) => {
    //             if(err) console.log(err);
    //             res.json(employee);
    //         });
    // };
    
    // /*
    // Name - Display Employee Details by Username
    // Date - 22/08/2021
    //  */
    // exports.readByUsername = (req, res) => {
    //     const { username } = req.params
    //     console.log(req.params.username)
    //     Employee.findOne({username})
    //         .exec((err, employee) => {
    //             if(err) console.log(err);
    //             res.json(employee);
    //         });
    // };
    
    // /*
    // Name - Display Employee Details by Phone Number
    // Date - 22/08/2021
    //  */
    // exports.readByMobile = (req, res) => {
    //     const { mobileNumber } = req.params
    //     console.log(req.params.mobileNumber)
    //     Employee.findOne({mobileNumber})
    //         .exec((err, employee) => {
    //             if(err) console.log(err);
    //             res.json(employee);
    //         });
    // };
    
    // /*
    // Name - Display Employee Details by NIC
    // Date - 22/08/2021
    //  */
    // exports.readByNIC = (req, res) => {
    //     const { NIC } = req.params
    //     console.log(req.params.NIC)
    //     Employee.findOne({NIC})
    //         .exec((err, employee) => {
    //             if(err) console.log(err);
    //             res.json(employee);
    //         });
    // };
    
    // /*
    // Name - Update Employee Details by Employee Id
    // Date - 22/08/2021
    //  */
    // exports.update = (req, res) => {
    //     const { employeeId } = req.params;
    //     const {firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, username, password} = req.body;
    //     Employee.findOneAndUpdate({employeeId}, {firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, username, password}, {new: true}).exec((err, post) => {
    //         if(err) console.log(err);
    //         res.json(post);
    //     }) 
    // }
    
    // /*
    // Name - Update Employee Details by Id
    // Date - 11/09/2021
    //  */
    // exports.updateEmployeeDetail = (req, res) => {
    //     const { id } = req.params;
    //     const {firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC} = req.body;
    //     Employee.findOneAndUpdate({id}, {firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC}, {new: true}).exec((err, post) => {
    //         if(err) console.log(err);
    //         res.json(post);
    //     }) 
    // }
    
    // /*
    // Name - Delete Post by Employee Id
    // Date - 22/08/2021
    //  */
    // exports.remove = (req, res) => {
    //     const { employeeId } = req.params;
    //     Employee.findOneAndRemove({employeeId}).exec((err, post) => {
    //         if(err) console.log(err);
    //         res.json({
    //             message: 'Employee Deleted'
    //         });
    //     }) 
    // }
    
    // /*
    // Name - Delete Post by _ID
    // Date - 11/09/2021
    //  */
    // exports.removebyId = (req, res) => {
    //     const { id } = req.params.id;
    //     Employee.findOneAndRemove({id}).exec((err, post) => {
    //         if(err) console.log(err);
    //         res.json({
    //             message: 'Employee Deleted'
    //         });
    //     }) 
    // }