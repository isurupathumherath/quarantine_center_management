//invoice route 
import express from 'express';

import { getFoodDetails, getBookingDetails, getRoomDetails, getFoodSetDetails } from '../../controllers/FinanceControllers/financeInvoice';

const router = express.Router();

//all the routes  
router.get('/foodDetails/:id', getFoodDetails);
router.get('/bookingDetails/:id', getBookingDetails);
router.get('/roomDetails/:id', getRoomDetails);
router.get('/foodSetDetails/:id', getFoodSetDetails);
 
export default router;