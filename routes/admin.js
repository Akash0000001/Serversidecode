const admincontroller=require("../controllers/admin")

const express = require("express");
const router = express.Router();
router.get("/add-product",admincontroller.getAddProduct)

router.get("/products",admincontroller.getProducts)

router.post("/add-product",admincontroller.postAddProduct)

router.get("/edit-product/:productId",admincontroller.getEditProduct)
router.post("/edit-product",admincontroller.posteditproduct)
router.get("/delete/:productId",admincontroller.postdeleteproduct)

module.exports=router