// //? Dentro de las rutas de user insertar este código y hacer un post en /api/user/bulk

// import fs from "fs";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";
// import { Router } from "express";
// import User from "../models/schemas/user.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const router = Router();


// router.post("/user/bulk", async (req, res) => {
//     try {
//         const filePath = path.join(__dirname, "../data/users.json");
//         console.log(fs.readFileSync(filePath, "utf8"));
//         const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

//         if (!Array.isArray(users)) {
//             return res.status(400).json({ message: "Invalid data format. Expecting an array of users." });
//         }

//         const createdUser = await User.create(users);
//         return res.json(createdUser);
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).json({ message: error.message });
//     }
// });

// export default router;
