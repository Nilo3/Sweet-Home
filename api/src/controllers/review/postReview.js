import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
  const { rating, createdBy, product, reviewText } = req.body;
  console.log(rating, createdBy, product);
  try {
    if (!rating || !createdBy || !product) {
      return res.status(400).json({ message: "There's missing data" });
    }
    if (rating > 5) {
      return res.status(400).json({ message: "The rating needs to be a number between 1 and 5" });
    }

    const foundProduct = await Product.findById(product);
    const foundUser = await User.findById(createdBy);

    if (!foundProduct || !foundUser) {
      return res.status(400).json({ message: "Product or user not found" });
    }

    const existingReview = await Review.findOne({
      product: foundProduct._id,
      createdBy: foundUser._id
    });

    if (existingReview) {
      return res.status(400).json({ message: "User has already reviewed this product" });
    }

    const newReview = await Review.create({
      rating,
      reviewText,
      product: foundProduct._id,
      createdBy: foundUser._id
    });

    foundProduct.review.push(newReview);
    await foundProduct.save();

    foundUser.userReviews.push(newReview);
    await foundUser.save();

    return res.json(newReview);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
