/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
    Name - Employee CRUD
 */

const Employee = require('../../models/HRM/Employee');
const { uniqueNamesGenerator, names } = require('unique-names-generator');
require('dotenv').config();

/*
Name - Add Employee
Date - 22/08/2021
 */
exports.create = (req, res) => {

    const { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type } = req.body

    // Validate Email & Phone Number /^\d*(?:\.\d{1,2})?$/
    var validator = require("email-validator");

    if ((validator.validate(email))) {

        // Generate unique Employee Id
        const generateUniqueId = require('generate-unique-id');

        // example 1
        // const employeeId = generateUniqueId();

        // example 2
        const employeeId = generateUniqueId({
            length: 5,
            useLetters: false
        });

        // example 3
        // const employeeId = generateUniqueId({
        //     includeSymbols: ['@','#','|'],
        //     excludeSymbols: ['0']
        // });

        // Generate Random Usernames
        const improvedAdjectives = [
            ...names,
            firstName
        ];
        const xMen = [
            middleName
        ];
        const xWomen = [
            lastName
        ];

        const username = uniqueNamesGenerator({
            dictionaries: [improvedAdjectives, xMen, xWomen],
            length: 2,
            separator: '_'
        });

        //Generate Random Passwords
        var generator = require('generate-password');
        var password = generator.generate({
            length: 10,
            numbers: true
        });

        // console.log(`Username: ${username}`);
        // console.log(`Password: ${password}`);

        //Check Empty Parameters
        switch (true) {
            // case !employeeId:
            //     return res.status(400).json({
            //         error: 'Employee ID is required'
            //     });
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
            case !mobileNumber:
                return res.status(400).json({
                    error: 'Mobile Number is required'
                });
            case !DOB:
                return res.status(400).json({
                    error: 'Date of Birth is required'
                });
            case !email:
                return res.status(400).json({
                    error: 'Email Address is required'
                });
        }

        //Check Server Errors
        Employee.create({ employeeId, firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type, username, password }, (err, employee) => {

            //Check Server Errors
            if (err) {
                console.log(err)
                console.log("Error = " + err.code)
                console.log("Key Pattern = " + err.keyPattern.NIC)
                console.log("Key Pattern = " + err.keyPattern.mobileNumber)
                console.log("Error Message = " + err.message)
                if (err.keyPattern.mobileNumber == 1) {
                    res.status(400).json({
                        error: 'Mobile Number is already registered! Try another Mobile Number!'
                    });
                }
                else if (err.keyPattern.NIC == 1) {
                    res.status(400).json({
                        error: 'NIC is already registered! Try another NIC!'
                    });
                }
                else if (err.keyPattern.employeeId == 1) {
                    res.status(400).json({
                        error: 'Employee ID is already registered! Try Again!'
                    });
                }
                else if (err.keyPattern.username == 1) {
                    res.status(400).json({
                        error: 'Username is already registered! Try Again!'
                    });
                }
                else if (err.keyPattern.email == 1) {
                    res.status(400).json({
                        error: 'Email Address is already registered! Try Again!'
                    });
                }
                else {
                    res.status(400).json({
                        error: 'Internal Server Error! Try Again!'
                    });
                }

            }
            else {
                res.json(employee);

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
                        subject: 'Your Login Details',
                        text: `
                            Hi
                        
                            You can login to the system using these username and password. This is a temporary login.
                            
                            You have to give new username and password in your first login
                            
                            Username: ${username}
                            Password: ${password}
                            
                            This is an auto generated email. If you have any issue with login to the system feel free to contact the support center 0761714844
                            
                            Thank You`
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
            }

        });




    } else {
        console.log("Invalid Email Address")
        res.status(400).json({
            error: 'Invalid Email Address!'
        })
    }





    // async..await is not allowed in global scope, must use a wrapper

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //     user: testAccount.user, // generated ethereal user
    //     pass: testAccount.pass, // generated ethereal password
    //     },
    // });

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: `isurupathumherath@gmail.com, ${email}`, // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    // });

    // console.log("Message sent: %s", info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

/*
Name - Display All Employees
Date - 22/08/2021
 */

exports.showAll = (req, res) => {
    Employee.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, employee) => {
            if (err) console.log(err);
            res.json(employee);
        });
};

/*
Name - Display Employee Details by Employee Id
Date - 22/08/2021
 */
exports.readById = (req, res) => {
    const { employeeId } = req.params
    console.log(req.params.employeeId)
    Employee.findOne({ employeeId })
        .exec((err, employee) => {
            if (err) console.log(err);
            res.json(employee);
        });
};

/*
Name - Display Employee Details by _Id
Date - 11/08/2021
 */
exports.readByDatabaseId = (req, res) => {
    const { id } = req.params
    console.log(req.params.id)
    Employee.findOne({ id })
        .exec((err, employee) => {
            if (err) console.log(err);
            res.json(employee);
        });
};

/*
Name - Display Employee Details by Username
Date - 22/08/2021
 */
exports.readByUsername = (req, res) => {
    const { username } = req.params
    console.log(req.params.username)
    Employee.findOne({ username })
        .exec((err, employee) => {
            if (err) console.log(err);
            res.json(employee);
        });
};

/*
Name - Display Employee Details by Phone Number
Date - 22/08/2021
 */
exports.readByMobile = (req, res) => {
    const { mobileNumber } = req.params
    console.log(req.params.mobileNumber)
    Employee.findOne({ mobileNumber })
        .exec((err, employee) => {
            if (err) console.log(err);
            res.json(employee);
        });
};

/*
Name - Display Employee Details by NIC
Date - 22/08/2021
 */
exports.readByNIC = (req, res) => {
    const { NIC } = req.params
    console.log(req.params.NIC)
    Employee.findOne({ NIC })
        .exec((err, employee) => {
            if (err) console.log(err);
            res.json(employee);
        });
};

/*
Name - Update Employee Details by Employee Id
Date - 22/08/2021
 */
exports.update = (req, res) => {
    const { employeeId } = req.params;
    const { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type } = req.body;
    Employee.findOneAndUpdate({ employeeId }, { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC, type }, { new: true }).exec((err, post) => {
        if (err) console.log(err);
        res.json(post);
    })
}

/*
Name - Update Employee Details by Id
Date - 11/09/2021
 */
exports.updateEmployeeDetail = (req, res) => {
    const { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC } = req.body;
    Employee.findByIdAndUpdate(req.params.id, { firstName, middleName, lastName, mobileNumber, email, DOB, address, NIC }, { new: true }).exec((err, post) => {
        if (err) console.log(err);
        res.json(post);
    })
}

/*
Name - Delete Post by Employee Id
Date - 22/08/2021
 */
exports.remove = (req, res) => {
    const { employeeId } = req.params;
    Employee.findOneAndRemove({ employeeId }).exec((err, post) => {
        if (err) console.log(err);
        res.json({
            message: 'Employee Deleted'
        });
    })
}

/*
Name - Delete Post by _ID
Date - 11/09/2021
 */
exports.removebyId = (req, res) => {
    const { id } = req.params.id;
    Employee.findOneAndRemove({ id }).exec((err, post) => {
        if (err) console.log(err);
        res.json({
            message: 'Employee Deleted'
        });
    })
}