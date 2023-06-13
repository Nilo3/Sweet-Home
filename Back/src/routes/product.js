const express = require("express");
const router = express.Router();

const postProduct = require("../controllers/product/postProduct");

router.post("/product", postProduct);

module.exports = router;
