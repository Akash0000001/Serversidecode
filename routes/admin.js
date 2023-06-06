const admincontroller=require("../controllers/admin")

const express = require("express");
const router = express.Router();
router.get("/add-product",admincontroller.getAddProduct)

router.get("/products",admincontroller.getProducts)

router.post("/add-product",admincontroller.postAddProduct)

module.exports=router