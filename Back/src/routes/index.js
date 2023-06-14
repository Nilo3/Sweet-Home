const { Router } = require('express');

const productRoutes = require('./product');

const router = Router();

router.use('/api', productRoutes);

module.exports = router;
