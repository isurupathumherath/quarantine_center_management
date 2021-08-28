/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
 */

const express = require('express');
const router = express.Router();

// Import Controller Methods
const { create, showAll, readById, readByUsername, readByMobile, readByNIC, update, remove } = require('../controllers/employee');


// Controller Routes
// Employee 
router.post('/add', create);
router.get('/all-employees', showAll);
router.get('/profile/:employeeId', readById);
router.get('/employee-username/:username', readByUsername);
router.get('/employee-mobile/:mobileNumber', readByMobile); 
router.get('/employee-nic/:NIC', readByNIC); 
router.put('/update/:employeeId', update);
router.delete('/remove/:employeeId', remove);

//Task
router.delete('/delete:employeeId', remove);


module.exports = router;