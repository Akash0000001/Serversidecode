const express=require("express");
const file =require ("fs")
const route=express.Router();

route.get("/",(req,res,next)=>{
    file.readFile("message.txt",(err,data)=>{
        if(err)
        {
            console.log(err)
            data="No chat existed"
        }
        res.send(`${data}<form action='/' method='post' onsubmit='document.getElementById("user").value=localStorage.getItem("username")'><input type='hidden' id='user' name='username'> <input type='text' id='msg' name='message'><br><button type='submit'>Send</button></form>`)
})
})
route.post("/",(req,res,next)=>{
    file.appendFile("message.txt",`${req.body.username}:${req.body.message} `,err=>err?console.log(err):res.redirect("/"))
    })
module.exports=route;