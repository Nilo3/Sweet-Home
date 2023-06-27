import User from "../../models/schemas/user.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";
import Product from "../../models/schemas/product.js";
import Order from "../../models/schemas/order.js";

export default async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid })
      .populate({
        path: "bought",
        populate: [
          {
            path: "category",
            model: Category,
          },
          {
            path: "review",
            model: Review,
          },
        ],
      })
      .populate({
        path: "userReviews",
        populate: [
          {
            path: "product",
            model: Product,
          },
        ],
      })
      .populate({
        path: "userOrders",
        populate: [
          {
            path: "products.product",
            model: Product,
          },
        ],
      })
      .populate("userOrders", null, Order);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
