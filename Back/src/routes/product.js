const { Router } = require('express');

const postProduct = require("../controllers/product/postProduct");

const routerProduct = Router();



routerProduct.post("/", postProduct);





module.exports = routerProduct;
