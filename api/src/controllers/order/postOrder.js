import Order from "../../models/schemas/order.js";
import Product from "../../models/schemas/product.js";
import User from "../../models/schemas/user.js"

export default async (req, res) => {
  const { user, product, totalPrice, isPaid, padAt } = req.body;

  try {
    const products = await Product.find({ _id: { $in: product } });
    const users = await User.find({ _id: { $in: user } });

    const newOrder = await Order.create({
      user: users.map((user) => user._id),
      product: products.map((product) => product._id),
      totalPrice,
      isPaid,
      padAt,
    });

    return res.json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};