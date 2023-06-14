const routerProduct = require("../routes/product")
const { Router } = require('express');

const router = Router();


router.use('/product', routerProduct);





module.exports = router
