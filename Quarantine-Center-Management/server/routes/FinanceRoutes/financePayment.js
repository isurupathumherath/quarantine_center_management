/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment routes
 */

import express from 'express';

import { getPaymnts, createPayment, updatePayment, deletePayment } from '../../controllers/FinanceControllers/financePayment';

const router = express.Router(); 

//all the routes 
router.get('/testgetallPostman', getPaymnts);
router.post('/testcreatePostman', createPayment);
router.patch('/testupdatePostman/:id', updatePayment);
router.delete('/testdeletePostman/:id', deletePayment); 

export default router;

//test