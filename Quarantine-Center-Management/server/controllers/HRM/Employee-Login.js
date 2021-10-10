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

// exports.removebyId = (req, res) => {
//     const { id } = req.params.id;
//     console.log(id);
//     EmployeeSalary.findOneAndRemove({ id }).exec((err, post) => {
//         if (err) console.log(err);
//         res.json({
//             message: 'Staff Salary Record Deleted'
//         });
//     })
// }

exports.staffLogin = (req, res) => {
    const { email, password } = req.body;
    Employee.findOne({ email: email, password: password })
        .exec((err, employee) => {
            if (err) console.log(err);
            if (employee == null) {
                res.json({
                    message: 'Invalid User Credentials'
                });
            }
            else
                res.send(employee);
        });
}