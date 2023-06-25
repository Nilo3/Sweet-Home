import mongoose from "mongoose";
const { Schema } = mongoose;

const product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    stock: { type: Number, required: true },
    inCart: { type: Boolean, default: false },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    review: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const Product = mongoose.model("Product", product)

export default Product