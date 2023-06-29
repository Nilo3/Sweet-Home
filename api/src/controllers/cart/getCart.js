import Cart from "../../models/schemas/cart.js";

export default async (req, res) => {
  const cart = await Cart
    .find()
    .populate("user")
    .populate("products");
    
  if (cart.length > 0) {
    return res.json(cart);
  } else {
    return res.status(500).json({ message: "There are no carts available" });
  }
};
