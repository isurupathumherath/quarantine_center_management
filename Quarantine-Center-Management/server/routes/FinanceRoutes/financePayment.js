/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment routes
 */

import express from 'express';

import { getPaymnts, createPayment, updatePayment, deletePayment, getPaymentDetais } from '../../controllers/FinanceControllers/financePayment';

const router = express.Router(); 

//all the routes 
router.get('/getAllPayemntDetails', getPaymnts);
router.post('/createPaymentDetails', createPayment);
router.patch('/updatePaymentDetails/:id', updatePayment);
router.delete('/deletePaymentDetail/:id', deletePayment); 
router.get('/payementDetails/:id', getPaymentDetais); 
 
export default router;

//test