
const path=require("path")
const rootDir=require("../util/path")

exports.addproduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add-product.html"))
}
exports.postaddproduct=(req,res,next)=>{

    console.log(req.body);
    res.redirect("/shop");
}

exports.listproducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","shop.html"));
}
