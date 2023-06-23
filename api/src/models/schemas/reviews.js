import mongoose from "mongoose";
const { Schema } = mongoose

const review = new Schema({
    rating: { type: Number, min: 1, max: 5, require: true },
    reviewText: { type: String},
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
});

const Review = mongoose.model('Review', review)

export default Review