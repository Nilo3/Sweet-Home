import { Router } from "express";

// ? Controllers 
import getCart from "../controllers/cart/getCart.js"
import postCart from "../controllers/cart/postCart.js"
import deleteCart from "../controllers/cart/deleteProductCartByID.js"
import putCart from "../controllers/cart/putCart.js";
import getCartById from "../controllers/cart/getCartById.js"


const router = Router();

//? Rutas .get
router.get("/cart", getCart);
router.get("/cart/:id", getCartById)


//? Ruta .post
router.post("/cart", postCart);

//? Ruta .delete
router.delete("/cart/:cartId", deleteCart);

//? Ruta .put
router.put("/cart/:cartId", putCart);

export default router;
