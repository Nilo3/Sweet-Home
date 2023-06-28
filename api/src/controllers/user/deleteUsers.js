import User from "../../models/schemas/user.js";
import Review from "../../models/schemas/reviews.js";
import Cart from "../../models/schemas/cart.js";
import Order from "../../models/schemas/order.js";

export default async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user)
      return res.status(400).json({ message: "The user you want to delete does not exist" });
    if (user.email !== user.email)
      return res.status(400).json({ message: "You can't delete another user!" });

    try {
      await Review.deleteMany({ createdBy: id });
      await Cart.deleteMany({ _id: { $in: user.cart } });
      await Order.deleteMany({ _id: { $in: user.userOrders } });

      await User.findByIdAndDelete(id);

      res.json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
