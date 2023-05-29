const express = require("express");

const routes = express.Router();

const contactcontroller =require("../controllers/contact.js")

routes.get("/",contactcontroller)
module.exports=routes