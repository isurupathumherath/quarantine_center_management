//payment CRUD
import mongoose from 'mongoose';
import FinancePayment from '../../models/FinanceModels/financePaymentschema.js';

//get all payments
export const getPaymnts = async (req, res) => {
    try {
        const payments = await FinancePayment.find();

        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//add a payment
export const createPayment = async (req, res) => {
    const payment = req.body;

    const newPayment = new FinancePayment(payment);

    try {
        await newPayment.save();

        res.status(201).json(newPayment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//update payment details
export const updatePayment = async (req, res) => {
    const { id: _id } = req.params;
    const payment = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Payment with that id');

    const updatedPayment = await FinancePayment.findByIdAndUpdate(_id, { ...payment, _id }, { new: true });

    res.json(updatedPayment);

}

//delete payment details
export const deletePayment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Payment with that id: ${id}`);

    await FinancePayment.findByIdAndRemove(id);

    res.json({ message: "Payment Deleted Successfully." });
}

//get payment details (Card)
export const getPaymentDetais = async (req, res) => {
    try {
        const userID = req.params.id;

        const PaymentDetais = await FinancePayment.find({ userID: userID });

        if (PaymentDetais != "") {
            res.status(200).json(CardInfo);
        } else {
            res.status(200).send(`No Payment Details`);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}