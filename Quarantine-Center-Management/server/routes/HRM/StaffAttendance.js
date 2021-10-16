/*
    Created by - Isuru Pathum Herath
    On - 13/10/2021
    Name - Staff Attendance Routes
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const { create, showAll, readByDatabaseId } = require('../../controllers/HRM/StaffAttendance');

//Controller Routes
router.post('/add', create);

router.get('/', showAll);
router.get('/get/:id', readByDatabaseId);
// router.get('/updateFetch/:id', readByDatabaseId);

// router.delete('/remove/:id', removebyId);

// router.put('/updatePending/:id', updatePending);
// router.put('/updateDone/:id', updateDone);


module.exports = router;