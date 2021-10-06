import axios from 'axios';

const urlinvoice = 'http://localhost:5001/invoice'; 
const urlpayer = 'http://localhost:5001/payer'; 
const urlpayment = 'http://localhost:5001/payment'; 



// const urlposts = 'https://first-mernproject.herokuapp.com/posts';

//invoice 
export const fetchfoodData = (id) => axios.get(`${urlinvoice+'/getfoodData'}/${id}`);
export const fetchbookingData = (id) => axios.get(`${urlinvoice+'/getbookingData'}/${id}`);
export const fetchroomData = (id) => axios.get(`${urlinvoice+'/getroomData'}/${id}`);

//payer
export const createPayer = (newPayer) => axios.post(urlpayer+'/createPayer', newPayer); 

//payment
export const fetchPayments = () => axios.get(urlpayment+'/testgetallPostman');
export const createPayment = (newPost) => axios.post(urlpayment+'/testcreatePostman', newPost); 
export const updatePayment = (id, updatedPost) => axios.patch(`${urlpayment+'/testupdatePostman'}/${id}`, updatedPost);
export const deletePayment = (id) => axios.delete(`${urlpayment+'/testdeletePostman'}/${id}`);




 

