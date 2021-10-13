//payer details route 
import express from 'express';

import { getPayers, createPayer, updatePayer, deletePayer, getPayerDetails } from '../../controllers/FinanceControllers/financePayer';

const router = express.Router();  

router.get('/allPayerDetails', getPayers);
router.post('/createPayer', createPayer);
router.patch('/updatePayer/:id', updatePayer);
router.delete('/deletePayer/:id', deletePayer);  
router.get('/payerDetails/:id', getPayerDetails);   

export default router;