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
    constructor (t,i,d,p) {
        this.title=t
        this.price=p;
        this.imageUrl=i;
        this.description=d;
    }
    save()
    {   this.id=Math.random().toString();
        getproductsfromfile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })    
        })
    }
    static fetchAll(cb)
    {
        getproductsfromfile(cb)   
    }

    static findbyid(id,cb)
    {
        getproductsfromfile(products=>{
            const prod=products.find(p => p.id===id)
            cb(prod)
        })
    }
}