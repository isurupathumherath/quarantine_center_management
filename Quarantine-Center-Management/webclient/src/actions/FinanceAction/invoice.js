 /* Janith Gamage On - 11/10/2021  */
import { FETCH_ALL } from "../../constants/FinanceConstants/actionTypes";
import * as api from '../../api/FinanceApi/index';

//action creaters
export const getFoodData = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchfoodData(id);
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
} 
 

export const getBookingData = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchbookingData(id);
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getroomData = (id) => async(dispatch) => {
    try {
        const { data } = await api.fetchroomData(id);
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}