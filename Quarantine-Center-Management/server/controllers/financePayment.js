/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Finace payment Business Logic
 */ 

import mongoose from 'mongoose';
import FinancePayment from '../models/financePaymentschema.js';


/*
Name - get all Payments
Date - 29/08/2021
 */
export const getPaymnts = async (req, res) => { 
    try {
        const payments = await FinancePayment.find();  

        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

/*
Name - create Payment
Date - 29/08/2021
 */
export const createPayment = async(req, res) => {
    const payment = req.body;

    const newPayment = new FinancePayment(payment);

    try {
        await newPayment.save();

        res.status(201).json(newPayment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

/*
Name - gupdate Payment
Date - 29/08/2021
 */
export const updatePayment = async (req, res) => {
    const { id: _id } = req.params;
    const payment = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Payment with that id');
    
    const updatedPayment = await FinancePayment.findByIdAndUpdate(_id, { ...payment, _id}, { new: true });

    res.json(updatedPayment);

}

/*
Name - delete Payment
Date - 29/08/2021
 */
export const deletePayment = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Payment with that id: ${id}`);

    await FinancePayment.findByIdAndRemove(id); 

    res.json({ message: "Payment Deleted Successfully." });
} 