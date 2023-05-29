const productcontroller=require("../controllers/products")

const express = require("express");

const routes = express.Router();

routes.get("/",productcontroller.listproducts)

module.exports=routes;