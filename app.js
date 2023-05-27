const express= require ("express")
const bodyparser= require("body-parser")

const app= express()
app.use(bodyparser.urlencoded({extended:false}))
app.use("/add-product",(req,res,next)=>{
    res.send("<form action='/product' method='post'><label>Enter product name:</label><input type='text' name='product'></input><label>Number of products:</label><input type='number' name='size'></input><button type='submit'>Send</button></form>")
})

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})
app.use("/",(req,res,next)=>{
    res.send("<h1>Weclome to node js</h1>");
})

app.listen(3000)



