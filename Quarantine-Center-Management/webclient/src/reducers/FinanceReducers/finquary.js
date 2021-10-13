import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../../constants/FinanceConstants/actionTypes';

export default (inquarys = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; 
    case CREATE:
      return [...inquarys, action.payload];
    case UPDATE:
      return inquarys.map((inquary) => (inquary._id === action.payload._id ? action.payload : inquary));
    case DELETE:
      return inquarys.filter((inquary) => inquary._id !== action.payload);
    default:
      return inquarys;
  }
};

