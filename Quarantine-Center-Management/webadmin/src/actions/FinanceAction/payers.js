import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../../constants/FinanceConstants/actionTypes';
import * as api from '../../api/FinanceApi/index';

//action Creators
export const getPayers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPayers();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const createPayer = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPayer(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePayer = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePayer(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePayer = (id) => async (dispatch) => {
    try {
        await api.deletePayer(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
} 