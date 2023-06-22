import Order from "../../models/schemas/order.js";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { user, product } = req.body;

    const foundUser = await User.findOne({ _id: user });
    const foundProducts = await Product.find({ _id: { $in: product } });

    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }
    if (!foundProducts || foundProducts.length !== product.length) {
      return res.status(400).json({ message: "One or more products not found" });
    }

    let totalPrice = 0;
    for (const foundProduct of foundProducts) {
      totalPrice += foundProduct.price;
    }

    const newOrder = await Order.create({
      user: foundUser._id,
      product: foundProducts.map((foundProduct) => foundProduct._id),
      totalPrice,
    });

    foundUser.userOrders.push(newOrder);
    await foundUser.save();

    return res.json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};