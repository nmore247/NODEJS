import { Router } from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = Router();
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

export default router;
