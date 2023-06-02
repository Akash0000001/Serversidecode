const path=require("path")
const rootDir=require("../util/path")
const contact=require("../models/contact")
module.exports=(req,res,next)=>{
    
    contact.fetchall(data=>{
    data.forEach(d=>console.log(d.name+"=>"+d.email))
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
      })}
    )}
