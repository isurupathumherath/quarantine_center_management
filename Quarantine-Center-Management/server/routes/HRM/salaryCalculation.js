/*
    Created by - Isuru Pathum Herath
    On - 15/10/2021
    Name - Salary Calculation
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const { getSalary, getAttendance } = require('../../controllers/HRM/calculateSalary');

//Controller Routes
router.post('/getSalary/:id', getSalary);
router.get('/getAttendance/:id/:fromDate/:toDate', getAttendance);

module.exports = router;