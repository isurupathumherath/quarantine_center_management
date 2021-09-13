const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const commentSchema = mongoose.Schema({
  commentID: {
    type: String,

    required: true,
  },
  foodID: {
    type: String,

    required: true,
  },
  userID: {
    type: String,

    required: true,
  },
  comment: {
    type: String,

    required: true,
  },
});
module.exports = mongoose.model("CommentsModule", commentSchema);
