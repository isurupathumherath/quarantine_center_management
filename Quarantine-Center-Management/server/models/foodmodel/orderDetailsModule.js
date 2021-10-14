const mongoose = require("mongoose");

const orderdetailsschema = mongoose.Schema({
  userID: {
    type: String,

    required: [true, "Order detais must have a details id"],
  },
  userName: {
    type: String,

    required: [true, "Order detais must have a food id"],
  },
  Favourites: [
    {
      id: { type: String },
      name: { type: String },
      image: { type: String },
      price: { type: String },
      description: { type: String },
      type: { type: String },
    },
  ],
});

module.exports = mongoose.model("OrderDetailsModule", orderdetailsschema);
