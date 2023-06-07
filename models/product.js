const rootDir=require("../util/path")
const Cart=require("./cart")
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
    constructor (id,t,i,p,d) {
        this.id=id
        this.title=t
        this.imageUrl=i;
        this.price=p;
        this.description=d;
    }
    save()
    {   getproductsfromfile(products=>{
        if(this.id)
        {
            const prodIndex=products.findIndex(p=>p.id===this.id)
            products[prodIndex]=this
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
        }
    )
    }
    else
        {
            this.id=Math.random().toString();
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })    
    }
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
    static deletebyid(id)
    {
        getproductsfromfile(products=>{
            const product=products.find(p=>p.id===id)
            const updatedproducts=products.filter(p=>p.id!==id)
            fs.writeFile(p,JSON.stringify(updatedproducts),err=>{
                if(!err)
                {
                    Cart.deleteproduct(id,product.price)
                }
            }) 
        })
    }
}