const rootDir=require("../util/path")
const path=require("path")
const p=path.join(rootDir,"data","product.json")
const fs=require("fs")
function getproductsfromfile(cb){
    fs.readFile(p,(err,filecontent)=>{
        if(err)
        {
            cb([])
        }
        else{
        cb(JSON.parse(filecontent))
        }
    })
}
module.exports=class product {
    constructor (n,s) {
        this.name=n
        this.size=s;
    }
    save()
    {   
        getproductsfromfile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })    
        })
    }
    static fetchall(cb)
    {
        getproductsfromfile(cb)   
    }
}