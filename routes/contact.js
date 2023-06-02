const express = require("express");

const routes = express.Router();

const contactcontroller =require("../controllers/contact.js")

routes.get("/",contactcontroller.precontact)
routes.post("/",contactcontroller.postcontact)

module.exports=routes