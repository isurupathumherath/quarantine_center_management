//payer CRUD
//reply code 1=success 0=request-error {2 - catch}  
import mongoose from 'mongoose';
import FinancePayer from '../../models/FinanceModels/financePayerschema.js';


//get all the payers 
export const getPayers = async (req, res) => {
    try {
        const payers = await FinancePayer.find();
        if (payers != null) {
            res.status(200).json({
                replyCode: 1,
                payers
            });
        } else {
            res.status(200).json({
                replyCode: 0,
                message: "no payers"
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

//add payer details 
export const createPayer = async (req, res) => {
    const payer = req.body;
    const newPayer = new FinancePayer(payer);

    try {

        if (newPayer != "") {
            await newPayer.save();
            res.status(201).json
                ({
                    replyCode: 1,
                    newPayer
                });
        } else {
            res.status(201).json
                ({
                    replyCode: 1,
                    message: "no data to add as payer details"
                });
        }

    } catch (error) {
        res.status(409).json
            ({
                replyCode: 2,
                message: error.message
            });
    }
}

// update payer details
export const updatePayer = async (req, res) => {
    const { id: _id } = req.params;
    const payer = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No payer with that id');

        const updatedPayer = await FinancePayer.findByIdAndUpdate(_id, { ...payer, _id }, { new: true });

        res.status(200).json({
            replyCode: 1,
            updatedPayer
        });

    } catch (error) {
        res.status(400).json
            ({
                replyCode: 2,
                message: error.message
            })
    }


}

// Delete payer details
export const deletePayer = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payer with that id: ${id}`);

        await FinancePayer.findByIdAndRemove(id);

        res.json
            ({
                replyCode: 1,
                message: "Payer Deleted Successfully."
            });
    } catch (error) {
        res.status(400).json({
            replyCode: 2,
            message: error.message
        });
    }

}

//get payer details
export const getPayerDetails = async (req, res) => {
    const { id } = req.params;

    try {
        //mongoose object id validation
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payer with that id: ${id}`);

        const payerDetails = await FinancePayer.findById(id);

        if (payerDetails != null) {
            res.status(200).json({
                replyCode: 1,
                payerDetails,
            });
        } else{
            res.status(200).json({
                replyCode: 0,
                message: "no payer with this ID",
            });
        }

    } catch (error) {
        res.status(400).json
            ({
                replyCode: 2,
                message: error.message
            });

    }



}