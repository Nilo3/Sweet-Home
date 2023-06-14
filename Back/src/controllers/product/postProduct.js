import Product from "../../models/schemas/product.js";
import Category from "../../models/schemas/category.js";
import Review from "../../models/schemas/reviews.js";

export default async (req, res) => {
  const { name, price, image, description, stock, category, review } = req.body;

  if (!name || !price || !image || !stock || !category) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    const categoryPromises = category.map((categoryId) => Category.findById(categoryId));
    const reviewPromises = review.map((reviewId) => Review.findById(reviewId));

    const [categories, reviews] = await Promise.all([Promise.all(categoryPromises), Promise.all(reviewPromises)]);

    const newProduct = await Product.create({
      name,
      price: Number(price),
      image,
      description,
      stock: Number(stock),
      category: categories.map((category) => category._id),
      review: reviews.map((review) => review._id),
    });
    
    return res.json(newProduct);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
