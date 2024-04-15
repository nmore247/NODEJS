const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");

// get all products
router.get("/", getProducts);

// get single product
router.get("/:id", getProduct);

// create single product
router.post("/", createProduct);

// update single product
router.put("/:id", updateProduct);

//delete single product
router.delete("/:id", deleteProduct);

module.exports = router;
