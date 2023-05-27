const express= require ("express")
const bodyparser= require("body-parser")

const admin= require("./routes/admin")
const shop = require ("./routes/shop")

const app= express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(admin)
app.use(shop)
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found </h1>")
})

app.listen(3000)



