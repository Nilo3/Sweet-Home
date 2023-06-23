import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";
import Product from "../../models/schemas/product.js";

export default async (req, res) => {
    try {
        const { reviewId } = req.params;

        const foundReview = await Review.findById(reviewId);

        if (!foundReview) {
            return res.status(400).json({ message: "Review not found" });
        }

        const userId = foundReview.createdBy;
        const productId = foundReview.product;

        const foundUser = await User.findById(userId);

        if (!foundUser) {
            return res.status(400).json({ message: "User not found" });
        }

        const foundProduct = await Product.findById(productId);

        if (!foundProduct) {
            return res.status(400).json({ message: "Product not found" });
        }

        await Review.findByIdAndDelete(reviewId);
        foundUser.userReviews.pull(reviewId);
        await foundUser.save();

        foundProduct.review.pull(reviewId);
        await foundProduct.save();

        return res.json({ message: "Review deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
