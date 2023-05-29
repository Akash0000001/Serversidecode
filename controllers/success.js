const path=require("path")
const rootDir=require("../util/path")
module.exports=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","success.html"))}
