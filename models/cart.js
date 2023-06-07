const rootDir=require("../util/path")
const path=require("path")
const p=path.join(rootDir,"data","cart.json")
const fs=require("fs")
module.exports=class Cart{
    static  addproduct(id,price)
    {   fs.readFile(p,(err,filecontent)=>{
        let cart={products:[],totalprice:0};
        if(!err)
        {
            cart=JSON.parse(filecontent)
        }
        const existingproductindex=cart.products.findIndex(p=>p.id===id)
        const existingproduct=cart.products[existingproductindex]
        let updatedproduct;
        if(existingproduct)
        {
            updatedproduct={...existingproduct}
            updatedproduct.qty=updatedproduct.qty+1;
            cart.products=[...cart.products]
            cart.products[existingproductindex]=updatedproduct
        }
        else{
            updatedproduct={id:id,qty:1}
            cart.products=[...cart.products,updatedproduct]
        }
        cart.totalprice=cart.totalprice+ +price
        fs.writeFile(p,JSON.stringify(cart),err=>{
            console.log(err)
        })
    })
        

    }

    static deleteproduct(id,price)
    {
        fs.readFile(p,(err,filecontent)=>{
            if (err)
            {
                return err;
            }
            const updatecart={...JSON.parse(filecontent)}
            const product=updatecart.products.find(p=>p.id===id)
            const productqty=product.qty
            updatecart.products=updatecart.products.filter(p=>p.id!==id)
            updatecart.totalprice=updatecart.totalprice-productqty*price
            fs.writeFile(p,JSON.stringify(updatecart),err=>{
                console.log(err)
            })
        })
    }
}