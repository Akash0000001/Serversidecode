const products =[];
module.exports=class product {
    constructor (n,s) {
        this.name=n
        this.size=s;
    }
    save()
    {
        products.push(this)
    }
    static fetchall()
    {
        return products;
    }
}