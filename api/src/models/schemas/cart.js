import mongoose from "mongoose";
const { Schema } = mongoose

const cart = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, default: 1 }
    }
    ],
    totalAmount: { type: Number, default: 0, required: true },
});

const Cart = mongoose.model('Cart', cart)

export default Cart