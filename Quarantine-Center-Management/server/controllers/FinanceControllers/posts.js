/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - Test Businness Logic
 */

import mongoose from 'mongoose';
import PostMessage from '../../models/FinanceModels/postMessage';


/*
Name - get all Posts
Date - 29/08/2021
 */
export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();  

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

/*
Name - create Post
Date - 29/08/2021
 */
export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

/*
Name - update Post
Date - 29/08/2021
 */
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true });

    res.json(updatedPost);

}

/*
Name - delete Post
Date - 29/08/2021
 */
export const deletePost = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id: ${id}`);

    await PostMessage.findByIdAndRemove(id); 

    res.json({ message: "Post Deleted Successfully." });
}

/*
Name - like Post
Date - 29/08/2021
 */
export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no post with that: ${id}`);

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}