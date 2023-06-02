const express = require("express");
const routes = express.Router();

const successcontroller=require("../controllers/success")

routes.get("/",successcontroller)
module.exports=routes