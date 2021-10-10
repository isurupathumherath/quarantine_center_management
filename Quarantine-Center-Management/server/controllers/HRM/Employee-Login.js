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
    const { email, password } = req.body;
    Employee.findOne({ email: email, password: password })
        .exec((err, employee) => {
            if (err) console.log(err);
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