/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create, showAll, readById, readByUsername, readByMobile, readByNIC, update, remove, removebyId, readByDatabaseId, updateEmployeeDetail, staffFirstLogin, staffAuth } = require('../../controllers/HRM/Employee');


// Controller Routes
// Employee 
router.post('/add', create);

router.get('/all-employees', showAll);
router.get('/profile/:employeeId', readById);
router.get('/employee-username/:username', readByUsername);
router.get('/employee-mobile/:mobileNumber', readByMobile);
router.get('/employee-nic/:NIC', readByNIC);
router.get('/displayEmployeeByDBId/:id', readByDatabaseId);

router.put('/update/:employeeId', update);
router.put('/updateEmployeeById/:id', updateEmployeeDetail);
router.put('/firstLogin/:id', staffFirstLogin);
router.put('/staffAuth/:id', staffAuth);

router.delete('/remove/:employeeId', remove);
router.delete('/removebyId/:id', removebyId);


//Task
router.delete('/delete:employeeId', remove);


module.exports = router;