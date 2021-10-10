/*
    Created by - Isuru Pathum Herath
    On - 25/09/2021
    Name - EMP Task CRUD
 */

const Task = require('../../models/HRM/Task');

/*
Name - Add Task
Date - 25/09/2021
 */
exports.create = (req, res) => {

    const { EmployeeID, TaskName, Status, Priority, Description } = req.body;

    switch (true) {
        case !EmployeeID:
            return res.status(400).json({
                error: 'Employee ID is reqired'
            });
        case !TaskName:
            return res.status(400).json({
                error: 'Task Name is required'
            });
        case !Priority:
            return res.status(400).json({
                error: 'Priority is required'
            });
        case !Description:
            return res.status(400).json({
                error: 'Description is required'
            });
    }

    Task.create({ EmployeeID, TaskName, Status, Priority, Description }, (err, task) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                error: 'Salary adding failed! Try Again'
            })
        }
        res.json(task);
    });

}

/*
Name - Get All Task
Date - 25/09/2021
 */
exports.showAll = (req, res) => {
    Task.find({})
        // .limit(10)
        .sort({ createdAt: -1 })
        .exec((err, task) => {
            if (err) console.log(err);
            res.json(task);
        });
};

/*
Name - Display Task Details by _Id
Date - 25/09/2021
*/
exports.readByDatabaseId = (req, res) => {
    const { id } = req.params
    console.log(req.params.id)
    Task.findById({ id })
        .exec((err, task) => {
            if (err) console.log(err);
            res.json(task);
        });
};

/*
Name - Display Task Details by Employee Id
Date - 11/10/2021
*/
exports.readByEmpId = (req, res) => {
    console.log(req.params.id)
    Task.find({ EmployeeID: req.params.id})
        .exec((err, task) => {
            if (err) console.log(err);
            res.json(task);
        });
};

/*
Name - Delete Task by _ID
Date - 25/09/2021
 */
exports.removebyId = (req, res) => {
    console.log(req.params.id);
    Task.findByIdAndRemove(req.params.id).exec((err, post) => {
        if (err) console.log(err);
        res.json({
            message: 'Task is Deleted'
        });
    })
}

/*
Name - Update Pending Task Details by Id
Date - 25/09/2021
*/
exports.updatePending = (req, res) => {
    const { id } = req.params.id;
    const { EmployeeID, TaskName, Status = "Pending", Priority, Description } = req.body;
    Task.findOneAndUpdate({ id }, { EmployeeID, TaskName, Status, Priority, Description }, { new: true }).exec((err, task) => {
        if (err) console.log(err);
        res.json(task);
    })
}

/*
Name - Update Done Task Details by Id
Date - 25/09/2021
*/
exports.updateDone = (req, res) => {
    const { id } = req.params.id;
    const { EmployeeID, TaskName, Status = "Done", Priority, Description } = req.body;
    Task.findOneAndUpdate({ id }, { EmployeeID, TaskName, Status, Priority, Description }, { new: true }).exec((err, task) => {
        if (err) console.log(err);
        res.json(task);
    })
}
