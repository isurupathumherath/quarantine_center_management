import axios from 'axios';

const urlposts = 'http://localhost:8000/posts';
const urlpayer = 'http://localhost:8000/payer';

// const urlposts = 'https://first-mernproject.herokuapp.com/posts';

//post
export const fetchPosts = () => axios.get(urlposts+'/getallPosts');
export const createPost = (newPost) => axios.post(urlposts+'/createPost', newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${urlposts+'/updatePost'}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlposts+'/deletePost'}/${id}`);
export const likePost = (id) => axios.patch(`${urlposts+'/likePost'}/${id}`);
//payer
export const fetchPayers = () => axios.get(urlpayer+'/getallPayers');
export const createPayer = (newPost) => axios.post(urlpayer+'/createPayer', newPost);
export const updatePayer = (id, updatedPost) => axios.patch(`${urlpayer+'/updatePayer'}/${id}`, updatedPost);
export const deletePayer = (id) => axios.delete(`${urlpayer+'/deletePayer'}/${id}`); 


