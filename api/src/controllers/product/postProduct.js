import Product from "../../models/schemas/product.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";

export default async (req, res) => {
  const { name, price, image, description, stock, inCart, category, review, isDelete } = req.body;

  if (!name || !price || !image || !stock || !category) {
    return res.status(400).json({ message: "There's missing data" });
  }

  try {
    const categoryPromises = category.map((categoryId) => Category.findById(categoryId));

    let reviewPromises = [];
    let reviews = [];

    if (review) {
      reviewPromises = review.map((reviewId) => Review.findById(reviewId));
      reviews = await Promise.all(reviewPromises);
    }

    const categories = await Promise.all(categoryPromises);

    const newProduct = await Product.create({
      name,
      price: Number(price),
      image,
      description,
      stock: Number(stock),
      inCart,
      category: categories.map((category) => category._id),
      review: reviews.map((review) => review._id),
      isDelete,
    });
    return res.json(newProduct);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

