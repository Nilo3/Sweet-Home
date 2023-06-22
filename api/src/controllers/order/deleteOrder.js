import Order from "../../models/schemas/order.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findByIdAndDelete(orderId);
    const user = await User.findOneAndUpdate(
      { _id: order.user },
      { $pull: { userOrders: order._id } },
      { new: true }
    );

    res.status(200).send({ message: "Order deleted successfully", order, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
