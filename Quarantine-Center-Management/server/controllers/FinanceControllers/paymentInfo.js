/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Payment info Business Logic
 */
// import mongoose from 'mongoose';
// import FinancePayer from '../../models/FinanceModels/financePayerschema.js';
// import FinancePayment from '../../models/FinanceModels/financePaymentschema.js';


// //test
// export const testpayers = async (req, res) => {
//     try {   

//         const { id } = req.params; 
//         if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payer with that id: ${id}`);
//         const payment = await FinancePayment.findById(id);
//         const payer = await FinancePayer.findById(id); 

//         // const payers = await FinancePayer.find();
//         res.status(200);
//         res.json(payer);
//         res.json(payment); 


//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }  
// }

import mongoose from 'mongoose';
var finacePayer = require('./financePayer');//import user model file
// var resources = {
// nick_name: "$nick_name",
// email: "$email"};

export const testpayer = async (req, res) => {

    const { _id } = req.params; 
   
    finacePayer.aggregate([
        {
            $lookup: {
                from: "FinancePayment", // collection to join
                localField: "110",//field from the input documents
                foreignField: "userID",//field from the documents of the "from" collection
                as: "payment"// output array field
            }
        }, {
            $lookup: {
                from: "FinancePayer", // from collection name
                localField: "110",
                foreignField: "userID",
                as: "payer"
            }
        }], function (error, data) {

            res.status(200);
            return res.json(data);
            //handle error case also
        });
}