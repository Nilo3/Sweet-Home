import Product from "../../models/schemas/product.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId)
            .populate("category")
            .populate({
                path: "review",
                model: Review,
                populate: {
                    path: "createdBy",
                    model: User,
                },
            });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
};
