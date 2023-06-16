const path=require("path")
const express= require ("express")
const bodyparser= require("body-parser")



const admin= require("./routes/admin")
const shop = require ("./routes/shop")
const  contact =require("./routes/contact")
const success=require("./routes/success")
const user=require("./routes/user")

const rootDir=require("./util/path")
const sequelize=require("./util/database")

const errorcontroller=require("./controllers/error")

const app= express()
const cors=require("cors")
app.use(cors())
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyparser.json({extended:false}))
app.use(express.static(path.join(rootDir,"public")))
app.use("/admin",admin)
app.use(shop)
app.use("/contactus",contact)
app.use("/success",success)

app.use("/users",user)

app.use(errorcontroller)

sequelize.sync()
.then(result=>{
    //console.log(result)
    app.listen(3000)
})
.catch(err=>console.log(err))



