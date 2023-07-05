import { Router } from "express";

// Controllers
import getFavoriteByUid from "../controllers/favorite/getFavoriteByUid.js";
import postFavorite from "../controllers/favorite/postFavorite.js";
import deleteFavorite from "../controllers/favorite/deleteFavorite.js"

const router = Router();

// Rutas GET
router.get("/favorite/:userUid", getFavoriteByUid);

// Ruta POST
router.post("/favorite/:userUid", postFavorite);

// Ruta DELETE
router.delete("/favorite/:userUid", deleteFavorite);

export default router;
