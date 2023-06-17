import { Router } from "express";

// ? Controllers 

import postProduct from "../controllers/product/postProduct.js";
import getProduct from "../controllers/product/getProducts.js";
import getProductById from "../controllers/product/getProductById.js";
import deleteProduct from "../controllers/product/deleteProduct.js";
import putProduct from "../controllers/product/putProduct.js";

const router = Router();

//? Rutas .get
router.get("/product", getProduct);
router.get("/product/:productId", getProductById);

//? Ruta .post
router.post("/product", postProduct);

//? Ruta .delete
router.delete("/product/:productId", deleteProduct);

//? Ruta .put
router.put("/product/:productId", putProduct);

export default router;

//? Ruta para postear productos

// import products from "../data/products.json";

// router.post("/product/bulk", async (req, res) => {
//   if (!Array.isArray(products)) {
//     return res.status(400).json({ message: "Invalid data format. Expecting an array of products." });
//   }

//   try {
//     const createdProducts = await Product.create(products);
//     return res.json(createdProducts);
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: error.message });
//   }
// });
