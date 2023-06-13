const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    address: String,
    phoneNumber: String,
});

const product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    image: String,
    description: String,
    rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    stock: { type: Number, required: true }
});

const account = new Schema({
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
    refreshToken: String,
    accessToken: String,
    expiresAt: Number,
    scope: String,
    tokenType: String,
    idToken: String,
    sessionState: String,
});


module.exports = {
    User: mongoose.model('User', user),
    Product: mongoose.model('Product', product),
    Account: mongoose.model('Account', account)
};
