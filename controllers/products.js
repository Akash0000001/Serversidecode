
const path=require("path")
const rootDir=require("../util/path")
const product=require("../models/product")

exports.addproduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
exports.postaddproduct=(req,res,next)=>{
    const products=new product(req.body.name,req.body.size)
    products.save()
    res.redirect("/shop");
}

exports.listproducts=(req,res,next)=>{
    product.fetchall(products=>{
        res.render('shop', {
          prods: products,
          pageTitle: 'Shop',
          path: '/shop',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        });
      })
}
