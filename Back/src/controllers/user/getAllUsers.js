import User from "../../models/schemas/user.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
  try {
    const users = await User.find()
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
      .populate("favorites");
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};