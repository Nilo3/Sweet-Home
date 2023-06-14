import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../../Models/ProductModel.js";

const productRoute = express.Router();

// GET ALL PRODUCTS
productRoute.get("/", asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}));

// GET PRODUCT BY ID
productRoute.get("/:id", asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}));

export default productRoute;
