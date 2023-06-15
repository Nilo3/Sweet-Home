import Order from "../../models/schemas/order.js";
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate({
        path: "user",
        select: "_id",
      })
      .populate({
        path: "product",
        select: "_id price",
        model: Product,
      })
      .select("user product totalPrice isPaid padAt");
      
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
