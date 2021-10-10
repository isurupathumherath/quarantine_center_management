/*
    Created by - Isuru Pathum Herath
    On - 10/10/2021
    Name - Employee Login
 */

const Employee = require('../../models/HRM/Employee');
require('dotenv').config();


/*
Name - Staff Login
Date - 10/10/2021
 */

exports.staffLogin = (req, res) => {
    const { username, password } = req.body;
    Employee.findOne({ username: username, password: password })
        .exec((err, employee) => {
            if (err) {
                if (err.keyPattern.username == 1) {
                    res.status(400).json({
                        error: 'Username is already in use'
                    });
                }
                else {
                    res.status(400).json({
                        error: 'Internal Server Error! Try Again!'
                    });
                }
            };
            res.json(employee);
        });
};








    // .exec((err, employee) => {
    //     if (err) console.log(err);
    //     if (employee == null) {
    //         res.json({
    //             message: 'Invalid User Credentials'
    //         });
    //     }
    //     else
    //         res.send(employee);
    // });