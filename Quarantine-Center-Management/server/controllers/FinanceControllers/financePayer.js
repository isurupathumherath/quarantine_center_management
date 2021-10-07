//payer CRUD
import mongoose from 'mongoose';
import FinancePayer from '../../models/FinanceModels/financePayerschema.js';


//get all the payers 
export const getPayers = async (req, res) => {
    try {
        const payers = await FinancePayer.find();

        res.status(200).json(payers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//add payer details 
export const createPayer = async (req, res) => {
    const payer = req.body;

    const newPayer = new FinancePayer(payer);

    try {
        await newPayer.save();

        res.status(201).json(newPayer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// update payer details
export const updatePayer = async (req, res) => {
    const { id: _id } = req.params;
    const payer = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No payer with that id');

    const updatedPayer = await FinancePayer.findByIdAndUpdate(_id, { ...payer, _id }, { new: true });

    res.json(updatedPayer);

}
 
// Delete payer details
export const deletePayer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payer with that id: ${id}`);

    await FinancePayer.findByIdAndRemove(id);

    res.json({ message: "Payer Deleted Successfully." });
}

//get payer details
export const getPayerDetails = async (req, res) => {
    const { id } = req.params;

    try {
        //mongoose object id validation
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payer with that id: ${id}`);

        const payerDetails = await FinancePayer.findById(id);

        res.status(200).json({
            data: payerDetails,
            message: "request success"
        })

    } catch (error) {
        res.status(400).json
            ({
                message: error.message
            });

    }



}