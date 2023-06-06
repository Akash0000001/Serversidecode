const express = require("express");
const router = express.Router();

const successcontroller=require("../controllers/success")

router.get("/",successcontroller)
module.exports=router