import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 }
}],
  totalPrice: { type: Number, required: true, default: 0.0 },
  padAt: { type: Date }
});

const Order = mongoose.model("Order", orderSchema)

export default Order