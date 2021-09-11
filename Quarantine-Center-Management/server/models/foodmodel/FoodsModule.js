const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const foodSchema = mongoose.Schema({
  foodID: {
    type: String,

    required: true,
  },
  name: {
    type: String,

    required: [true, "Foods must have a name"],
  },
  image: {
    type: String,
    required: [true, "Foods must have a imahe url"],
  },
  type: {
    type: String,
    required: [true, "Foods must have a type"],
  },
  price: {
    type: Number,
    required: [true, "Foods must have a price"],
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  status: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Foods must have a description"],
  },
  insertUser: {
    type: String,
    required: [true, "Foods must have a inserted user"],
  },
  insertDate: {
    type: Date,
    required: [true, "Foods must have a inserted Date "],
  },
  updateDate: {
    type: Date,
  },
});

module.exports = mongoose.model("FoodModule", foodSchema);
