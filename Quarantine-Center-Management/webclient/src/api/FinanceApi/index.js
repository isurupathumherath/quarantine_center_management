import axios from 'axios';

const urlinvoice = 'http://localhost:8000/invoice'; 

// const urlposts = 'https://first-mernproject.herokuapp.com/posts';

//invoice 
export const fetchfoodData = (id) => axios.get(`${urlinvoice+'/getfoodData'}/${id}`);
 

