import { Router } from 'express';
import productRoutes from './product.js';
import categoryRoutes from './category.js'
import userRoutes from "./user.js"
import reviewRoutes from "./review.js"

const router = Router();

router.use('/api', productRoutes, categoryRoutes, userRoutes, reviewRoutes);


export default router;
