import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
    rating: { type: Number, min: 1, max: 5, required: true },
    reviewText: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
