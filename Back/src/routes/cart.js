import { Router } from "express";

// ? Controllers 
import getCart from "../controllers/cart/getCart.js"
import postCart from "../controllers/cart/postCart.js";


const router = Router();

//? Rutas .get
router.get("/cart", getCart);


//? Ruta .post

router.post("/cart", postCart);

export default router;
