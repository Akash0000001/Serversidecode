const path=require("path")
const express = require("express");

const routes = express.Router();

routes.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","add-product.html"))
})

routes.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/shop");
})

module.exports=routes