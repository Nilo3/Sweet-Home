const { Router } = require("express");
const router = Router();


//? Controllers

const postProduct = require("../controllers/product/postProduct");
const getProduct = require("../controllers/product/getProducts")
const getProductById = require("../controllers/product/getProductById")


//? Rutas .get

router.get("/product", getProduct);
router.get("/product/:productId", getProductById);

//? Ruta .post

router.post("/product", postProduct);


module.exports = router;