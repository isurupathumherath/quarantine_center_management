//payer CRUD
//reply code 1=success 0=request-error {2 - catch}  
import mongoose from 'mongoose';
import FinanceInquary from '../../models/FinanceModels/financeInquarySchema';


//get all the inquary 
export const getInquary = async (req, res) => {
    try {
        const inquaryes = await FinanceInquary.find();
        if (inquaryes != null) {
            res.status(200).json({
                replyCode: 1,
                inquaryes
            });
        } else {
            res.status(200).json({
                replyCode: 0,
                message: "no inquaryes"
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

//add inquary details 
export const createInquary = async (req, res) => {
    const inquary = req.body;
    const newInquary = new FinanceInquary(inquary);

    try {

        if (newInquary != null) {
            await newInquary.save();
            res.status(201).json
                ({
                    replyCode: 1,
                    newInquary
                });
        } else {
            res.status(201).json
                ({
                    replyCode: 1,
                    message: "no data to add as inquary details"
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

// update inquary details
export const updateInquary = async (req, res) => {
    const { id: _id } = req.params;
    const inquary = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No inquary with that id');

        const updatedInquary = await FinanceInquary.findByIdAndUpdate(_id, { ...inquary, _id }, { new: true });

        res.status(200).json({
            replyCode: 1,
            updatedInquary
        });

    } catch (error) {
        res.status(400).json
            ({
                replyCode: 2,
                message: error.message
            })
    }


}

// Delete inquary details
export const deleteInquary = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No inquary with that id: ${id}`);

        await FinanceInquary.findByIdAndRemove(id);

        res.json
            ({
                replyCode: 1,
                message: "Inquary Deleted Successfully."
            });
    } catch (error) {
        res.status(400).json({
            replyCode: 2,
            message: error.message
        });
    }

}

//get payer details
export const getInquaryDetails = async (req, res) => {
    // const { id } = req.params;

    const userID = req.params.id;

    const inquaryDetails = await FinanceInquary.find({ userID: userID });

    try {
        //mongoose object id validation
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payer with that id: ${id}`);

        // const payerDetails = await FinancePayer.findById(id);

        if (inquaryDetails != null) {
            res.status(200).json({
                replyCode: 1,
                inquaryDetails,
            });
        } else {
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