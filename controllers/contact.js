const path=require("path")
const rootDir=require("../util/path")
const contact=require("../models/contact")

exports.precontact=(req,res,next)=>{
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        activeCon: true,
        productCSS: true
      });
}
exports.postcontact=(req,res,next)=>{
  const contacts=new contact(req.body.name,req.body.email)
  contacts.save()
  res.redirect("/success")
}