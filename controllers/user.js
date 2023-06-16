
const User=require("../models/user")

exports.adduser=(req,res,next)=>{
    User.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Date:req.body.Date,
        Time:req.body.Time
    }).then((result)=>res.json(result.dataValues))
    .catch(err=>console.log(err))
}

exports.getusers=(req,res,next)=>{

    User.findAll().then((result)=>res.json(result))
    .catch(err=>console.log(err))
}

exports.deleteuser=(req,res,next)=>{
    User.findByPk(req.params.Userid)
    .then(user=>user.destroy())
    .then(()=>res.json("Done"))
    .catch(err=>console.log(err))
}
