import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/FinanceConstants/actionTypes';

import * as api from '../../api/FinanceApi';

export const getPayments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPayments();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPayment = (payment) => async (dispatch) => {
  try {
    const { data } = await api.createPayment(payment);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePayment = (id, payment) => async (dispatch) => {
  try {
    const { data } = await api.updatePayment(id, payment);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePayment = (id) => async (dispatch) => {
  try {
    await api.deletePayment(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSavedCardDetails = (id) => async(dispatch) => {
  try {
      const { data } = await api.fetchSavedCardDetails(id);
      dispatch({ type: FETCH_ALL, payload: data});
  } catch (error) {
      console.log(error.message);
  }
} 
