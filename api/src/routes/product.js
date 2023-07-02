import { Router } from "express";

import adminMiddleware from "../middleware/adminMiddleware.js";
// ? Controllers 

import postProduct from "../controllers/product/postProduct.js";
import getProduct from "../controllers/product/getProducts.js";
import getProductById from "../controllers/product/getProductById.js";
import deleteProduct from "../controllers/product/deleteProduct.js";
import putProduct from "../controllers/product/putProduct.js";
import postProductFavorite from "../controllers/product/postProductFavorite.js";
import deleteProductFavorite from "../controllers/product/deleteProductFavorite.js";



const router = Router();

//? Rutas .get
router.get("/product", getProduct);
router.get("/product/:productId", getProductById);

//? Ruta .post
router.post("/product", postProduct);
router.post("/product/favorite", postProductFavorite)

//? Ruta .delete
router.delete("/product/:productId", deleteProduct);
router.delete("/product/favorite/:productId", deleteProductFavorite)

//? Ruta .put
router.put("/product/:productId", putProduct);

export default router;