const path=require("path")
const express= require ("express")
const bodyparser= require("body-parser")

const admin= require("./routes/admin")
const shop = require ("./routes/shop")

const app= express()
app.use(bodyparser.urlencoded({extended:false}))
app.use("/admin",admin)
app.use("/shop",shop)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html")) 
})


app.listen(3000)



