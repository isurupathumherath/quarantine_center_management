//payer details route 
import express from 'express';

import { getInquary, getInquaryDetails, createInquary, updateInquary, deleteInquary } from '../../controllers/FinanceControllers/financeInquary';

const router = express.Router();

router.get('/allInquaryDetails', getInquary);
router.post('/createInquary', createInquary);
router.patch('/updateInquary/:id', updateInquary);
router.delete('/deleteInquary/:id', deleteInquary);
router.get('/InquaryDetails/:id', getInquaryDetails);

export default router;