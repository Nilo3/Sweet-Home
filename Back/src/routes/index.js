import { Router } from 'express';
import productRoutes from './product.js';
import categoryRoutes from './category.js'

const router = Router();

router.use('/api', productRoutes, categoryRoutes);

export default router;
