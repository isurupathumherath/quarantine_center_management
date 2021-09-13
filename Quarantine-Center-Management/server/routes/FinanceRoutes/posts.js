/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - test CRUD posts
 */

import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../../controllers/FinanceControllers/posts';

const router = express.Router();

//http://localhost:5000/posts

//all the routes 
router.get('/getallPosts', getPosts);
router.post('/createPost', createPost);
router.patch('/updatePost/:id', updatePost);
router.delete('/deletePost/:id', deletePost);
router.patch('/likePost/:id', likePost);

export default router;