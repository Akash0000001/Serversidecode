const express = require("express");

const router = express.Router();

const contactcontroller =require("../controllers/contact.js")

router.get("/",contactcontroller.precontact)
router.post("/",contactcontroller.postcontact)

module.exports=router