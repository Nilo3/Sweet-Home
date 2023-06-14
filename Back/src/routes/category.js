import { Router } from "express";

// ? Controllers 

import postCategory from "../controllers/category/postCategory.js";

const router = Router();

//? Rutas .get

router.get("/category");
router.get("/category/:categoryId");

//? Ruta .post

router.post("/category", postCategory);

export default router;
