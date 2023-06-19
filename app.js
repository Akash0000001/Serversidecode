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
const Product=require("./models/product")
const User=require("./models/user")

const errorcontroller=require("./controllers/error")


const app= express()
//const cors=require("cors")
//app.use(cors())
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(rootDir,"public")))

app.use((req,res,next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user=user;
        next();
    })
    .catch(err=>console.log(err))
})
app.use("/admin",admin)
app.use(shop)
app.use("/contactus",contact)
app.use("/success",success)

app.use("/users",user)

app.use(errorcontroller)

Product.belongsTo(User,{constraints:true,onDelete:"CASCADE"}) 
User.hasMany(Product);

sequelize.sync()
.then(result=>{
    return User.findByPk(1)
    app.listen(3000)
})
.then((user)=>{
    if(!user)
    {
        return User.create({Name:"Akash Ranjan",Email:"akashranjan947@gmail.com",Phone:"9636249407"})
    }
    return user
})
.then(user=>{
    //console.log(user)
    app.listen(3000)
})
.catch(err=>console.log(err))



