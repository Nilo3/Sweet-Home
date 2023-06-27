// 
import mongoose from "mongoose";
const { Schema } = mongoose;

const user = new Schema({
    name: { type: String, required: true },
    uid: { type: String, required: false },
    photoURL: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    accessToken: { type: String, default: "" },
    cart: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
    bought: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    userReviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    userOrders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],
});

const User = mongoose.model('User', user);

export default User;
