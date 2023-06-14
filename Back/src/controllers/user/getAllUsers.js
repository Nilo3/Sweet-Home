import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const users = await User.find()
      .populate({
        path: "bought",
        populate: [
          {
            path: "category",
            model: "Category",
          },
          {
            path: "review",
            model: "Review",
          },
          {
            path: "createdAt",
            model: "CreatedAt",
          },
        ],
      })
      .populate({
        path: "userReviews",
        populate: [
          {
            path: "product",
            model: "Product",
          },

        ],
      })
      /*
      .populate({
        path: "userOrders",
        populate: [
          {
            path: "product",
            model: "Products",
          },
          
        ],
      })
      */
      .populate("favorites");
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};