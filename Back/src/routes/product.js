import { Router } from "express";

// ? Controllers 

import postProduct from "../controllers/product/postProduct.js";
import getProduct from "../controllers/product/getProducts.js";
import getProductById from "../controllers/product/getProductById.js";

const router = Router();

//? Rutas .get
router.get("/product", getProduct);
router.get("/product/:productId", getProductById);

//? Ruta .post
router.post("/product", postProduct);

export default router;
