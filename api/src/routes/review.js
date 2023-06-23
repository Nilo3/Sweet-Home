import { Router } from "express";

//? Controllers

import postReview from "../controllers/review/postReview.js";
import getReview from "../controllers/review/getAllReviews.js"
import getReviewById from "../controllers/review/getReviewById.js"
import putReview from "../controllers/review/putReview.js"
import deleteReview from "../controllers/review/deleteReview.js";

const router = Router();


//? Rutas .get
router.get("/review", getReview)
router.get("/review/:reviewId", getReviewById)

//? Ruta .put
router.put("/review/:reviewId", putReview)

//? Ruta .post
router.post("/review", postReview)

//? Ruta .delete
router.delete("/review/:reviewId", deleteReview)

export default router