import { Router } from "express";

// ? Controllers 
import postOrder from "../controllers/order/postOrder.js";
import deleteOrder from "../controllers/order/deleteOrder.js";

const router = Router();

//? Rutas .post
router.post("/order", postOrder);

//? Rutas .post
router.delete("/order/:orderId", deleteOrder);


export default router;
