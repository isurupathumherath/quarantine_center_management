 /* Janith Gamage On - 11/10/2021  */
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/FinanceConstants/actionTypes';

import * as api from '../../api/FinanceApi/index';

//get all payers
export const allPayerDetails = () => async (dispatch) => {
  try {
    const { data } = await api.allPayerDetails();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//create a payer
export const createPayer = (payer) => async (dispatch) => {
  try {
    const { data } = await api.createPayer(payer);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//update payer details
export const updatePayer = (id, payer) => async (dispatch) => {
  try {
    const { data } = await api.updatePayer(id, payer);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
 
//delete payer details
export const deletePayer = (id) => async (dispatch) => {
  try {
    await api.deletePayer(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
 
//get a payer data
export const payerDetails = (id) => async (dispatch) => {
  try {
      const { data } = await api.payerDetails(id);
      dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
      console.log(error.message);
  }
};
