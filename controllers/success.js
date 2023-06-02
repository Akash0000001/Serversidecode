const path=require("path")
const rootDir=require("../util/path")
const contact=require("../models/contact")
module.exports=(req,res,next)=>{
    const contacts=new contact(req.body.name,req.body.email)
    contacts.save()
    const data=contact.fetchall()
    data.forEach(d=>console.log(d.name+"=>"+d.email))
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
      });
}
