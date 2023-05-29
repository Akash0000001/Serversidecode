const path=require("path")
const rootDir=require("../util/path")
module.exports=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html")) 
}