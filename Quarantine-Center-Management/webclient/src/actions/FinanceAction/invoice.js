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