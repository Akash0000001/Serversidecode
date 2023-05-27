const express = require("express");

const routes = express.Router();

routes.get("/add-product",(req,res,next)=>{
    res.send("<form action='/product' method='post'><label>Enter product name:</label><input type='text' name='product'></input><label>Number of products:</label><input type='number' name='size'></input><button type='submit'>Send</button></form>")
})

routes.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports=routes