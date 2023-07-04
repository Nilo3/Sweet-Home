import mongoose from "mongoose";
const { Schema } = mongoose;

const favoritesSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
});

const Favorites = mongoose.model("Favorites", favoritesSchema);

export default Favorites;
