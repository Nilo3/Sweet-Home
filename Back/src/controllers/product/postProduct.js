const Product = require("../../models/schemas/product");
const mongoose = require('mongoose');

const postProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      createdAt: new Date(),
      stock: req.body.stock,
      category: null,
      review: null
    });

    await product.save();

    res.status(201).json({ message: "Product created successfully"});
  } catch (error) {
    res.status(400).json({ error: error.message});
  }
};

module.exports = postProduct;
