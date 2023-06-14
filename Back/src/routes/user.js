import { Router } from "express";

import getAllUsers from "../controllers/user/getAllUsers.js";
import postUser from "../controllers/user/postUser.js";

const router = Router();

router.get("/users", getAllUsers);

//? Ruta .post
router.post("/users", postUser);

export default router;
