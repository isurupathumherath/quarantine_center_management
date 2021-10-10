/*
    Created by - Isuru Pathum Herath
    On - 10/10/2021
    Name - Employee Login
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const { staffLogin } = require('../../controllers/HRM/Employee-Login');

//Controller Routes
router.post('/staffLogin', staffLogin);

module.exports = router;