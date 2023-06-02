const path=require("path")
const rootDir=require("../util/path")

module.exports=(req,res,next)=>{
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        activeCon: true,
        productCSS: true
      });
}