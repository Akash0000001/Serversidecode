const express=require("express");
const file=require("fs")
const route=express.Router();

route.get("/",(req,res,next)=>{
    
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`user`).value)" action="/login" method="POST"><input id="user" type="text"><br><button type="submit">Login</button></form>')
})
route.post("/",(req,res,next)=>res.redirect("/"))
    
module.exports=route