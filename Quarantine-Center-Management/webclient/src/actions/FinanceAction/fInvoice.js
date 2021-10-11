 /* Janith Gamage On - 11/10/2021  */
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../../api/FinanceApi/index';

//get order data
export const gteOrderData = () => async (dispatch) => {
    try {
        const { data } = await api.foodDetails(userID);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

//get booking data
export const gteBookingData = () => async (dispatch) => {
    try {
        const { data } = await api.bookingDetails(userID);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

//get room data
export const gteRoomgData = (roomID) => async (dispatch) => {
    try {
        const { data } = await api.roomDetails(roomID);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
