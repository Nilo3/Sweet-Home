// //? Dentro de las rutas de reviews insertar este código y hacer un post en /api/review/bulk

// import fs from "fs";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";
// import { Router } from "express";
// import Review from "../models/schemas/reviews.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const router = Router();


// router.post("/review/bulk", async (req, res) => {
//     try {
//         const filePath = path.join(__dirname, "../data/reviews.json");
//         console.log(fs.readFileSync(filePath, "utf8"));
//         const reviews = JSON.parse(fs.readFileSync(filePath, "utf8"));

//         if (!Array.isArray(reviews)) {
//             return res.status(400).json({ message: "Invalid data format. Expecting an array of reviews." });
//         }

//         const createdReviews = await Review.create(reviews);
//         return res.json(createdReviews);
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).json({ message: error.message });
//     }
// });

// export default router;
