const express = require("express");
const routes = express.Router();

const successcontroller=require("../controllers/success")

routes.post("/",successcontroller)
module.exports=routes