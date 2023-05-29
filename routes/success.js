const path=require("path")
const express = require("express");

const routes = express.Router();

const rootDir=require("../util/path")

routes.post("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","success.html"))
})
module.exports=routes