import { Router } from "express";

//? Controllers

import postReview from "../controllers/review/postReview.js";
import getReview from "../controllers/review/getAllReviews.js"
import getReviewById from "../controllers/review/getReviewById.js"
import putReviewById from "../controllers/review/putReviewById.js"

const router = Router();


//? Rutas .get
router.get("/review", getReview)
router.get("/review/:reviewId", getReviewById)

//? Ruta .put
router.put("/review/:reviewId", putReviewById)

//? Ruta .post
router.post("/review", postReview)


export default router