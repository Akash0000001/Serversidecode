const Cart=require("./cart")
const db=require("../util/database")
module.exports=class product {
    constructor (id,t,i,p,d) {
        this.id=id
        this.title=t
        this.imageUrl=i;
        this.price=p;
        this.description=d;
    }
    save()
    {  if(!this.id)
        return  db.execute("INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)",[this.title,this.price,this.description,this.imageUrl])
       else
        return db.execute(`UPDATE products  SET title=?,price=?,description=?,imageUrl=? where id=${this.id} `,[this.title,this.price,this.description,this.imageUrl])
    }

    static fetchAll()
    {
        return db.execute('SELECT * FROM products')
    }

    static findbyid(id)
    {
        return db.execute("SELECT * FROM products WHERE id=?",[id])
    }   
    static deletebyid(id)
    {
        return db.execute('Delete FROM products WHERE id=? ',[id])
    }
}