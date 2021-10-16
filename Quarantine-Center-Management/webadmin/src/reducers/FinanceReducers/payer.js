import { CREATE } from '../../constants/FinanceConstants/actionTypes';

export default (payers = [], action) => {
  switch (action.type) {  
    case CREATE:
      return [...payers, action.payload]; 
    default:
      return payers;
  }
};
