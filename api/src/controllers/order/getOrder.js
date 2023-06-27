import Order from "../../models/schemas/order.js";
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate({
        path: "user",
        select: "_id uid",
      })
      .populate({
        path: "products.product",
        select: "_id price",
        model: Product,
      })
      .select("uid user products totalPrice isPaid paidAt isPaid");
      
    if (!orders) {
      return res.status(404).json({ message: "There are no orders" });
    }

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
