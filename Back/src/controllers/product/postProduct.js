const { Product } = require("../../models/schemas/product");
const { Category } = require("../../models/schemas/category");
const { Review } = require("../../models/schemas/reviews");


module.exports = async (req, res) => {

  const { name, price, image, description, stock, category, review } = req.body;

  if (!name || !price || !image || !stock || !category) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    const newProduct = await Product.create({
      name,
      price: Number(price),
      image,
      description,
      stock: Number(stock),
      category: category.map((categoryId) => Category.findById(categoryId)),
      review: review.map((reviewId) => Review.findById(reviewId)),
    });
    return res.json(newProduct);

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};