/*
    Created by - Janith Gamage
    On - 17/09/2021
    Name - Invoice Routes
 */

    import express from 'express';

    import { getFoodDetails, getBookingDetails, getRoomDetails } from '../../controllers/FinanceControllers/financeInvoice';
    
    const router = express.Router();
    
    //http://localhost:8000/invoice/getfoodData/102
    
    //all the routes  
    router.get('/getfoodData/:id', getFoodDetails);  
    router.get('/getbookingData/:id', getBookingDetails);  
    router.get('/getroomData/:id', getRoomDetails);  
 
    export default router;