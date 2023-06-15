import { Router } from "express";

// ? Controllers 
import postOrder from "../controllers/order/postOrder.js";
import deleteOrder from "../controllers/order/deleteOrder.js";
import getOrder from "../controllers/order/getOrder.js";
import putOrder from "../controllers/order/putOrder.js";

const router = Router();

//? Rutas .get
router.get("/order", getOrder)

//? Rutas .post
router.post("/order", postOrder);

//? Rutas .delete
router.delete("/order/:orderId", deleteOrder);

//? Rutas .put
router.put("/order/:orderId", putOrder);


export default router;
