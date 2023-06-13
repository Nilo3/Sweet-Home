const mongoose = require("mongoose");

const review = mongoose.Schema({
    id: { type: mongoose.Types.ObjectId, },
    rating: { type: Number, min: 1, max: 5, require: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

module.exports = {
    Review: mongoose.model('Review', review),
}
