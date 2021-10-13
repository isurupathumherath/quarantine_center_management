import { FETCH_ALL } from '../../constants/FinanceConstants/actionTypes';

export default (orders = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; 
    default:
      return orders;
  }
};

