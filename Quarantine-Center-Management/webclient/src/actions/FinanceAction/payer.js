 /* Janith Gamage On - 11/10/2021  */
import { CREATE } from "../../constants/FinanceConstants/actionTypes";
import * as api from '../../api/FinanceApi/index';

export const createPayer = (payer) => async (dispatch) => {
    try {
      const { data } = await api.createPayer(payer);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
 