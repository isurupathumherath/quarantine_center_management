/*
    Created by - Janith Gamage
    On - 17/09/2021
    Name - Invoice business logic
 */
import FoodDetails from '../../models/foodmodel/orderModule';

export const getFoodDetails = async (req, res) => {
    try {
        const userID = req.params.id; 

        const FoodInfo = await FoodDetails.find({ patientID: userID });

        if (FoodInfo != []) {
            res.status(200).json(FoodInfo);
        } else {
            res.status(200).send(`No payment assign for this user id ${userID} in Food`);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}