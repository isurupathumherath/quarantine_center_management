import { FETCH_ALL } from "../../constants/FinanceConstants/actionTypes";

export default (invoicebooking = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload; 
      default:
        return invoicebooking;
    }
  };