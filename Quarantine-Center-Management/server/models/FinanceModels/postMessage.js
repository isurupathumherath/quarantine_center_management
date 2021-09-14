/*
    Created by - Janith Gamage
    On - 29/08/2021
    Name - test CRUD model
 */

import mongoose from "mongoose";

//mongo db table (schema)
const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true 
    },
    message:{
        type: String,
        required: true 
    },
    creator:{
        type: String,
        required: true 
    },
    tags: [{
        type: String,
        required: true 
    }],
    selectedFile:{
        type: String,
        required: true 
    },
    likeCount:{
        type: Number,
        max: 999999999,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;