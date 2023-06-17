import { Router } from "express";

import adminMiddleware from "../middleware/adminMiddleware.js";
// ? Controllers 

import postProduct from "../controllers/product/postProduct.js";
import getProduct from "../controllers/product/getProducts.js";
import getProductById from "../controllers/product/getProductById.js";
import deleteProduct from "../controllers/product/deleteProduct.js";
import putProduct from "../controllers/product/putProduct.js";

const router = Router();

//? Rutas .get
router.get("/product",adminMiddleware, getProduct);
router.get("/product/:productId",adminMiddleware, getProductById);

//? Ruta .post
router.post("/product",adminMiddleware, postProduct);

//? Ruta .delete
router.delete("/product/:productId",adminMiddleware, deleteProduct);

//? Ruta .put
router.put("/product/:productId",adminMiddleware, putProduct);

export default router;
