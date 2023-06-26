// //? Dentro de las rutas de categories insertar este código y hacer un post en /api/category/bulk

// import fs from "fs";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";
// import { Router } from "express";
// import Category from "../models/schemas/categories.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const router = Router();


// router.post("/category/bulk", async (req, res) => {
//     try {
//         const filePath = path.join(__dirname, "../data/categories.json");
//         console.log(fs.readFileSync(filePath, "utf8"));
//         const categories = JSON.parse(fs.readFileSync(filePath, "utf8"));

//         if (!Array.isArray(categories)) {
//             return res.status(400).json({ message: "Invalid data format. Expecting an array of categories." });
//         }

//         const createdCategory = await Category.create(categories);
//         return res.json(createdCategory);
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).json({ message: error.message });
//     }
// });

// export default router;
