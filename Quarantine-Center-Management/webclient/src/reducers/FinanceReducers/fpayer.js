import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/FinanceConstants/actionTypes';

export default (payers = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; 
    case CREATE:
      return [...payers, action.payload];
    case UPDATE:
      return payers.map((payer) => (payer._id === action.payload._id ? action.payload : payer));
    case DELETE:
      return payers.filter((payer) => payer._id !== action.payload);
    default:
      return payers;
  }
};

