const productcontroller=require("../controllers/products")

const express = require("express");
const routes = express.Router();
routes.get("/add-product",productcontroller.addproduct)

routes.post("/add-product",productcontroller.postaddproduct)

module.exports=routes