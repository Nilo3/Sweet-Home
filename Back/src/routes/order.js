import { Router } from "express";

// ? Controllers 
import postOrder from "../controllers/order/postOrder.js";

const router = Router();

//? Rutas .post
router.post("/order", postOrder);


export default router;
