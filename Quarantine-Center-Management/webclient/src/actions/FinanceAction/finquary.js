import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/FinanceConstants/actionTypes';

import * as api from '../../api/FinanceApi';

export const allInquaryDetails = () => async (dispatch) => {
  try {
    const { data } = await api.allInquaryDetails();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createInquary = (inquary) => async (dispatch) => {
  try {
    const { data } = await api.createInquary(inquary);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateInquary = (id, inquary) => async (dispatch) => {
  try {
    const { data } = await api.updateInquary(id, inquary);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInquary = (id) => async (dispatch) => {
  try {
    await api.deleteInquary(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const InquaryDetails = (userID) => async(dispatch) => {
  try {
      const { data } = await api.InquaryDetails(userID);
      dispatch({ type: FETCH_ALL, payload: data});
  } catch (error) {
      console.log(error.message);
  }
} 
