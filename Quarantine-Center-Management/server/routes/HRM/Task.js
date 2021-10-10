/*
    Created by - Isuru Pathum Herath
    On - 25/09/2021
    Name - EMP Task Routes
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const { create, showAll, removebyId, updatePending, updateDone, readByDatabaseId, readByEmpId } = require('../../controllers/HRM/Task');

//Controller Routes
router.post('/add', create);

router.get('/', showAll);
router.get('/getByEmpId/:id', readByEmpId);
router.get('/updateFetch/:id', readByDatabaseId);

router.delete('/remove/:id', removebyId);

router.put('/updatePending/:id', updatePending);
router.put('/updateDone/:id', updateDone);


module.exports = router;