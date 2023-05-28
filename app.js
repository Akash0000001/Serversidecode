const path=require("path")
const express= require ("express")
const bodyparser= require("body-parser")

const admin= require("./routes/admin")
const shop = require ("./routes/shop")
const rootDir=require("./util/path")

const app= express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(rootDir,"public")))
app.use("/admin",admin)
app.use("/shop",shop)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html")) 
})


app.listen(3000)



