const mongoose = require("mongoose");

const order = new mongoose.Schema({
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: String }
});

module.exports = {
  Order: mongoose.model("Order", order)
};