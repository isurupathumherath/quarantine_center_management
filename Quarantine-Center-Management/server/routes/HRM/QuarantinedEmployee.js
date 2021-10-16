/*
    Created by - Isuru Pathum Herath
    On - 20/09/2021
    Name - EMP Quarantine Routes
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const { create, showAll, readByDatabaseId, removebyId } = require('../../controllers/HRM/QuarantinedEmployee');

//Controller Routes
router.post('/add', create);
router.get('/showAll', showAll);
router.get('/find/:id', readByDatabaseId);
router.delete('/remove/:id', removebyId);

module.exports = router;