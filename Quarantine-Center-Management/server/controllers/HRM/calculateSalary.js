/*
    Created by - Isuru Pathum Herath
    On - 15/10/2021
    Name - Calculate Salary
 */

const StffAttendance = require('../../models/HRM/StaffAttendance');
const Salary = require('../../models/HRM/Employee-Salary');

/*
Name - Get Salary Details
Date - 15/10/2021
 */
exports.getSalary = (req, res) => {
    Salary.findOne({ EmployeeID: req.params.id })
        .exec((err, EmployeeSalary) => {
            if (err) console.log(err);
            res.json(EmployeeSalary);
        });
};


/*
Name - Get Attendance Details
Date - 15/10/2021
 */
exports.getAttendance = (req, res) => {
    console.log(req.param.fromDate);
    console.log(req.param.toDate);
    console.log(req.params.id);
    StffAttendance.find({
        "employeeId": req.params.id,
        "date": {
            '$gte': ISODate('2021-10-1'),
            '$lt': ISODate('2021-10-30')
        }
    }).exec((err, at) => {
        if (err) console.log(err);
        res.json(at);
    });
};