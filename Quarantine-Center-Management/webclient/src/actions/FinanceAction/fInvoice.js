 /* Janith Gamage On - 11/10/2021  */
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../../constants/FinanceConstants/actionTypes';

import * as api from '../../api/FinanceApi/index';

//get order data
export const gteOrderData = (userID) => async (dispatch) => {
    try {
        const { data } = await api.foodDetails(userID);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

//get booking data
export const gteBookingData = (userID) => async (dispatch) => {
    try {
        const { data } = await api.bookingDetails(userID);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

//get food data
export const foodSetDetails = (id) => async (dispatch) => {
    try {
        const { data } = await api.foodSetDetails(id);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

 