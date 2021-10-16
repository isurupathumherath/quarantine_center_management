/*
    Created by - Isuru Pathum Herath
    On - 13/10/2021
    Name - Staff Attendance Mark CRUD
    Last Updated - 13/10/2021
 */

const Attendance = require('../../models/HRM/StaffAttendance');
require('dotenv').config();

/*
Name - Add Staff Attendance
Date - 13/10/2021
 */
exports.create = (req, res) => {

    const { employeeId, date, inTime, outTime } = req.body

    console.log(employeeId, date, inTime, outTime);

    //Check Empty Parameters
    switch (true) {
        case !employeeId:
            return res.status(400).json({
                error: 'Employee ID is required'
            });
        case !date:
            return res.status(400).json({
                error: 'Date is required'
            });
        case !inTime:
            return res.status(400).json({
                error: 'In Time is required'
            });
        case !outTime:
            return res.status(400).json({
                error: 'Out Time is required'
            });
    }

    //Check Server Errors
    Attendance.create({ employeeId, date, inTime, outTime }, (err, response) => {

        //Check Server Errors
        if (err) {

            res.status(400).json({
                error: 'Internal Server Error! Try Again!'
            });
        }
        else
            res.json(response);
    });

};

/*
Name - All Attendance
Date - 13/10/2021
 */
exports.showAll = (req, res) => {
    Attendance.find({})
        // .limit(10)
        // .sort({ createdAt: -1 })
        .exec((err, attendance) => {
            if (err) console.log(err);
            res.json(attendance);
        });
};

/*
Name - Display Quarantined Employee Details by _Id
Date - 22/08/2021
 */
exports.readByDatabaseId = (req, res) => {
    const { id } = req.params
    console.log(req.params.id)
    Attendance.find({ employeeId: id })
        .exec((err, at) => {
            if (err) console.log(err);
            res.json(at);
        });
};


/*
Name - Update Employee Details by Id
Date - 11/09/2021
 */
exports.updateEmployeeDetail = (req, res) => {
    const { id } = req.params;
    const { employeeId, firstName, middleName, lastName, startedDate, endDate, specialNotes } = req.body;
    Employee.findOneAndUpdate({ id }, { employeeId, firstName, middleName, lastName, startedDate, endDate, specialNotes }, { new: true }).exec((err, post) => {
        if (err) console.log(err);
        res.json(post);
    })
}

/*
Name - Delete Quarantine Employee by _ID
Date - 20/09/2021
 */
exports.removebyId = (req, res) => {
    const { id } = req.params.id;
    QEmployee.findOneAndRemove({ id }).exec((err, qemployee) => {
        if (err) console.log(err);
        res.json({
            message: 'Quarantine Employee Deleted'
        });
    })
}