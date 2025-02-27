import express from "express";
import { searchProduct } from "../controller.js/productController.js";

const router = express.Router();

router.get("/search", searchProduct);

export default router;
