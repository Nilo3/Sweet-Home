import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
  const { rating, createdBy, product } = req.body;

  if (!rating || !createdBy || !product) {
    return res.status(400).json({ message: "There's missing data" });
  }

  try {
    const newReview = await Review.create({
      rating,
      createdBy: await User.findById(createdBy),
      product: await Product.findById(product),
    });

    return res.json(newReview);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
