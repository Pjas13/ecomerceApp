const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

//Route to get stores
router.route("/")
    .get(products.getProducts)
    .post(products.createProduct);

module.exports = router;