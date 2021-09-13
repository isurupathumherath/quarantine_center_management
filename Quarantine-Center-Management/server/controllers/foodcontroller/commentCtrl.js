const express = require("express");
const router = express.Router();
const Comment = require("../../models/foodmodel/FoodCommentsModule");

exports.getComments = async (req, res) => {
  try {
    const allComments = await Comment.find();

    console.log(allComments);
    res.status(200).json(allComments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addComments = (req, res) => {
  const commentID = req.body.commentID;
  const foodID = req.body.foodID;
  const userID = req.body.userID;
  const comment = req.body.comment;

  const newComment = new Comment({
    commentID,
    foodID,
    userID,
    comment,
  });

  newComment
    .save()
    .then(() => {
      res.json("Comment Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: error.message });
    });
};

exports.getbyId = (req, res) => {
  let foodID = req.params.id;

  const food = Comment.find({ foodID: foodID }).exec((err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.send(post);
    }
  });
};
