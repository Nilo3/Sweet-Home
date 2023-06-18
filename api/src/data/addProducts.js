// //? Dentro de las rutas de products insertar este código y hacer un post en /api/product/bulk

// import fs from "fs";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";
// import { Router } from "express";
// import Product from "../models/schemas/product.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const router = Router();


// router.post("/product/bulk", async (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "../data/products.json");
//     console.log(fs.readFileSync(filePath, "utf8"));
//     const products = JSON.parse(fs.readFileSync(filePath, "utf8"));

//     if (!Array.isArray(products)) {
//       return res.status(400).json({ message: "Invalid data format. Expecting an array of products." });
//     }

//     const createdProducts = await Product.create(products);
//     return res.json(createdProducts);
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({ message: error.message });
//   }
// });

// export default router;
