import Product from "../../models/schemas/product.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const products = await Product.find({})
      .populate({
        path: "category",
        model: Category,
      })
      .populate({
        path: "review",
        model: Review,
        populate: {
          path: "createdBy",
          model: User,
        },
      })
      .exec();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
