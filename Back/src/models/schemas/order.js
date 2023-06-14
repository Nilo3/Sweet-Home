const mongoose = require("mongoose");

const order = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  },
    date: {
        type: String,
    }
});

module.exports = mongoose.model("Order", order);