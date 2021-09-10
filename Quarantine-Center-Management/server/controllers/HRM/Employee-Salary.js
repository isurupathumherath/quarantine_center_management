/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
    Name - EMP Salary CRUD
 */

const EmployeeSalary = require('../../models/HRM/Employee-Salary');

/*
Name - Add Salary
Date - 22/08/2021
 */
exports.create = (req, res) => {

    const {EmployeeID, Grade, PerDay, AdditionalHour} = req.body;

    switch(true) {
        case !EmployeeID:
            return res.status(400).json({
                error: 'Employee ID is reqired'
            });
        case !Grade:
            return res.status(400).json({
                error: 'Grade is required'
            });
        case !PerDay:
            return res.status(400).json({
                error: 'Salary per day is required'
            });
    }

    EmployeeSalary.create({EmployeeID, Grade, PerDay, AdditionalHour}, (err, salary) => {
        if(err) {
            console.log(err)
            res.status(400).json({
                error: 'Salary adding failed! Try Again'
            })
        }
        res.json(salary);
    });

}

/*
Name - Get All Salary
Date - 22/08/2021
 */

exports.showAll = (req, res) => {
    EmployeeSalary.find({})
        // .limit(10)
        .sort({ createdAt: -1})
        .exec((err, EmployeeSalary) => {
            if(err) console.log(err);
            res.json(EmployeeSalary);
        });
};