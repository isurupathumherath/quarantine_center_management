import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/FinanceConstants/actionTypes';

export default (payments = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; 
    case CREATE:
      return [...payments, action.payload];
    case UPDATE:
      return payments.map((payment) => (payment._id === action.payload._id ? action.payload : payment));
    case DELETE:
      return payments.filter((payment) => payment._id !== action.payload);
    default:
      return payments;
  }
};

