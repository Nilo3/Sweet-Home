const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
    //? googleId: { type: String, default:"" }
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    bought: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    userReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Orders" }],
});

module.exports = {
    User: mongoose.model('User', user)
}


