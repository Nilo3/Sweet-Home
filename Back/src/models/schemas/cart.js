const mongoose = require('mongoose');
const { Schema } = mongoose;

const cart = new Schema({
    id: { type: mongoose.Types.ObjectId },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true }, quantity: { type: Number, default: 1, } }],
    totalAmount: { type: Number, default: 0, required: true },
});

module.exports = {
    Cart: mongoose.model('Cart', cart)
};
