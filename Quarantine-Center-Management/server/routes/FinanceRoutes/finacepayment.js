require('dotenv').config();
import { Router } from 'express';
import Razorpay from 'razorpay';
import { createHmac } from 'crypto';
import { Schema, model } from 'mongoose';
import PaymentDetails from '../../models/FinanceModels/financePaymentschema';

const router = Router();

// const PaymentDetailsSchema = Schema({
//   razorpayDetails: {
//     orderId: String,
//     paymentId: String,
//     signature: String,
//   },
//   success: Boolean,
// });

// const PaymentDetails = model('PaymentDetails', PaymentDetailsSchema);

router.post('/orders', async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID, // YOUR RAZORPAY KEY
      key_secret: process.env.RAZORPAY_SECRET, // YOUR RAZORPAY SECRET
    });

    const options = {
      amount: 50000,
      currency: 'LKR',
      receipt: 'receipt_order_74394',
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send('Some error occured');

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/success', async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      userID,
    } = req.body;

    const shasum = createHmac('sha256', process.env.RAZORPAY_SECRET);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest('hex');

    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' });

    const newPayment = PaymentDetails({
      userID : userID,
      razorpayDetails: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
      success: true,
    });

    await newPayment.save();

    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;