//payment CRUD
import mongoose from 'mongoose';
import FinancePayment from '../../models/FinanceModels/financePaymentschema.js';

//get all payments
export const getPaymnts = async (req, res) => {
    try {
        const payments = await FinancePayment.find();

        if (payments != null) {
            res.status(200).json
                ({
                    replyCode: 1,
                    payments
                });
        } else {
            res.status(200).json
                ({
                    replyCode: 0,
                    message: "no payments"
                });
        }
    } catch (error) {
        res.status(404).json
            ({
                replyCode: 2,
                message: error.message
            });
    }
}

//add a payment
export const createPayment = async (req, res) => {
    const payment = req.body;

    const newPayment = new FinancePayment(payment);

    try {
        await newPayment.save();
        res.status(201).json
            ({
                replyCode: 1,
                newPayment
            });
    } catch (error) {
        res.status(409).json
            ({
                replyCode: 2,
                message: error.message
            });
    }
}

//update payment details
export const updatePayment = async (req, res) => {
    const { id: _id } = req.params;
    const payment = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Payment with that id');

        const updatedPayment = await FinancePayment.findByIdAndUpdate(_id, { ...payment, _id }, { new: true });

        if (updatePayment != null) {
            res.status(200).json
                ({
                    replyCode: 1,
                    updatedPayment
                });
        } else {
            res.status(200).json
                ({
                    replyCode: 0,
                    message: "no data with that ID"
                });
        }

    } catch (error) {
        res.status(400).json
            ({
                replyCode: 2,
                message: "Update payment dunction failed"
            });
    }

}

//delete payment details
export const deletePayment = async (req, res) => {
    const { id } = req.params;

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Payment with that id: ${id}`);

        await FinancePayment.findByIdAndRemove(id);

        res.status(200).json
            ({
                replyCode: 1,
                message: "Payment Deleted Successfully."
            });

    } catch (error) {
        res.status(400).json
            ({
                replyCode: 2,
                message: "Payment Delete function falied."
            });
    }

}

//get payment details (Card)
export const getPaymentDetais = async (req, res) => {

    const userID = req.params.id;

    const PaymentDetais = await FinancePayment.find({ userID: userID });
    try { 
        if (PaymentDetais != null) {
            res.status(200).json
                ({
                    replyCode: 1,
                    PaymentDetais
                });
        } else {
            res.status(200).json
                ({
                    replyCode: 0,
                    message: "No Payment Details"
                });
        }
    } catch (error) {
        res.status(404).json
            ({
                replyCode: 2,
                message: error.message
            });
    }
}