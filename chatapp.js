const express= require ("express")
const bodyparser= require("body-parser")


const login=require("./router/login")
const message =require("./router/message")
const app= express()
app.use(bodyparser.urlencoded({extended:false}))


app.use("/login",login)
app.use(message)

app.listen(3000)