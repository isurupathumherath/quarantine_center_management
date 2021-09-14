/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payer routes
 */

import express from 'express';

import { testpayer } from '../../controllers/FinanceControllers/paymentInfo';

const router = express.Router();

//http://localhost:5000/payer/createPayer

//all the routes 
router.get('/test', testpayer); 


export default router;