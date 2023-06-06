const path=require("path")
const express= require ("express")
const bodyparser= require("body-parser")



const admin= require("./routes/admin")
const shop = require ("./routes/shop")
const  contact =require("./routes/contact")
const success=require("./routes/success")
const rootDir=require("./util/path")
const errorcontroller=require("./controllers/error")

const app= express()
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(rootDir,"public")))
app.use("/admin",admin)
app.use(shop)
app.use("/contactus",contact)
app.use("/success",success)
app.use(errorcontroller)


app.listen(3000)



