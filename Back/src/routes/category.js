import { Router } from "express";

// ? Controllers 

import postCategory from "../controllers/category/postCategory.js";
import getAllCategories from "../controllers/category/getAllCategories.js";
import getCategoryById from "../controllers/category/getCategoryById.js";

const router = Router();

//? Rutas .get
router.get("/category", getAllCategories);
router.get("/category/:categoryId", getCategoryById);

//? Ruta .post

router.post("/category", postCategory);

export default router;
