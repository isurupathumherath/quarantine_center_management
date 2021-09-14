/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payer routes
 */

import express from 'express';

import { getPayers, createPayer, updatePayer, deletePayer } from '../../controllers/FinanceControllers/financePayer';

const router = express.Router();

//http://localhost:5000/payer/createPayer

//all the routes 
router.get('/getallPayers', getPayers);
router.post('/createPayer', createPayer);
router.patch('/updatePayer/:id', updatePayer);
router.delete('/deletePayer/:id', deletePayer);  


export default router;