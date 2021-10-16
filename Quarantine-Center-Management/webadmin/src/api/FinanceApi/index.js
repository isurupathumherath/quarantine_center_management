/* Janith Gamage On - 11/10/2021  */
import axios from 'axios';

const urlinvoice = 'http://localhost:8000/invoice';
const urlpayer = 'http://localhost:8000/payer';
const urlpayment = 'http://localhost:8000/payment';


// const urlposts = 'https://first-mernproject.herokuapp.com/posts';

//invoice 
export const fetchfoodData = (id) => axios.get(`${urlinvoice + '/foodDetails'}/${id}`);
export const fetchbookingData = (id) => axios.get(`${urlinvoice + '/bookingDetails'}/${id}`);
export const fetchroomData = (id) => axios.get(`${urlinvoice + '/roomDetails'}/${id}`);

//payer
// export const createPayer = (newPayer) => axios.post(urlpayer+'/createPayer', newPayer); 

//payment
export const fetchPayments = () => axios.get(urlpayment + '/getAllPayemntDetails');
export const createPayment = (newPost) => axios.post(urlpayment + '/createPaymentDetails', newPost);
export const updatePayment = (id, updatedPost) => axios.patch(`${urlpayment + '/updatePaymentDetails'}/${id}`, updatedPost);
export const deletePayment = (id) => axios.delete(`${urlpayment + '/deletePaymentDetail'}/${id}`);

export const fetchSavedCardDetails = (id) => axios.get(`${urlpayment + '/cardDetails'}/${id}`);


//common API url PORT= 8000 || 8000
const url = 'http://localhost:8000';

//API
const invoice = url + '/invoice';
const payer = url + '/payer';
const inquary = url + '/inquary';

//Calling the invoice CRUD 
export const foodDetails = (userID) => axios.get(`${invoice + '/foodDetails'}/${userID}`);
export const bookingDetails = (userID) => axios.get(`${invoice + '/bookingDetails'}/${userID}`);
export const roomDetails = (roomID) => axios.get(`${invoice + '/roomDetails'}/${roomID}`);
export const foodSetDetails = (id) => axios.get(`${invoice + '/foodSetDetails'}/${id}`);
 

//Calling Payer CRUD API
export const allPayerDetails = () => axios.get(payer + '/allPayerDetails');
export const createPayer = (newPayer) => axios.post(payer + '/createPayer', newPayer);
export const updatePayer = (id, updatePayer) => axios.patch(`${payer + '/updatePayer'}/${id}`, updatePayer);
export const deletePayer = (id) => axios.delete(`${payer + '/deletePayer'}/${id}`);
export const payerDetails = (userID) => axios.get(`${payer + '/payerDetails'}/${userID}`);

//Calling Inquary CRUD API
export const allInquaryDetails = () => axios.get(inquary + '/allInquaryDetails');
export const createInquary = (newInquary) => axios.post(inquary + '/createInquary', newInquary);
export const updateInquary = (id, updateInquary) => axios.patch(`${inquary + '/updateInquary'}/${id}`, updateInquary);
export const deleteInquary = (id) => axios.delete(`${inquary + '/deleteInquary'}/${id}`);
export const InquaryDetails = (userID) => axios.get(`${inquary + '/InquaryDetails'}/${userID}`);






