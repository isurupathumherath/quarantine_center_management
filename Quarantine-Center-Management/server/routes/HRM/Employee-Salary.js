/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
    Name - EMP Salary Routes
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const {create, showAll, removebyId} = require('../../controllers/HRM/Employee-Salary');

//Controller Routes
router.post('/add', create);
router.get('/all-salary', showAll);
router.delete('/remove/:id', removebyId);

module.exports = router;