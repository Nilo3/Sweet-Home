import { Router } from 'express';
import productRoutes from './product.js';
import categoryRoutes from './category.js'
import userRoutes from "./user.js"

const router = Router();

router.use('/api', productRoutes, categoryRoutes, userRoutes);


export default router;
