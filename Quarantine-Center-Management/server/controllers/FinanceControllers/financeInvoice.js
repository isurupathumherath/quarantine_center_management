//Food & Room Managment Invoice CRUD
//reply code 1=success 0=request-error {2 - catch}  
import mongoose from 'mongoose';
import FoodDetails from '../../models/FoodModels/orderModule';
import RoomDetails from '../../models/RoomModels/booking';
import RoomInfo from '../../models/RoomModels/room';

//get food details according to user ID
export const getFoodDetails = async (req, res) => {
    try {
        const userID = req.params.id;

        const FoodInfo = await FoodDetails.find({ patientID: userID });

        if (FoodInfo != "") {
            res.status(200).json
                ({
                    replyCode: 1,
                    FoodInfo
                });
        } else {
            res.status(200).json
                ({
                    replyCode: 0,
                    message: "No payment assign for this user id ${userID} in Food"
                });
        }
    } catch (error) {
        res.status(404).json
            ({
                message: error.message
            });
    }
}


//get booking Details according to user ID
export const getBookingDetails = async (req, res) => {
    try {
        const userID = req.params.id;

        const RoomInfo = await RoomDetails.find({ patientid: userID });

        if (RoomInfo != "") {
            res.status(200).json
                ({
                    replyCode: 1,
                    RoomInfo
                });
        } else {
            res.status(200).json
                ({
                    replyCode: 0,
                    message: "No payment assign for this user id ${userID} in Room"

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

//get Room Deatils usinf Room ID
export const getRoomDetails = async (req, res) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json
            ({
                replyCode: 2,
                message: "worng id type: ${id}"
            });

        const RoomData = await RoomInfo.find({ _id: id });

        if (RoomData != "") {
            res.status(200).json
                ({
                    replyCode: 1,
                    RoomData
                });
        } else {
            res.status(200).json
                ({
                    replyCode: 0,
                    message: "No Room with this id ${id} in Room"
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