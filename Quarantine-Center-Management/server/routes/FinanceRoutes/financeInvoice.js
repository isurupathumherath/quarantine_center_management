//invoice route 
import express from 'express';

import { getFoodDetails, getBookingDetails, getRoomDetails } from '../../controllers/FinanceControllers/financeInvoice';

const router = express.Router();

//http://localhost:8000/invoice/getfoodData/102

//all the routes  
router.get('/foodDetails/:id', getFoodDetails);
router.get('/bookingDetails/:id', getBookingDetails);
router.get('/roomDetails/:id', getRoomDetails);

export default router;