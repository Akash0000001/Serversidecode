const Product = require('../models/product');
const Cart=require("../models/cart")

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then((result) => {
    res.render('shop/product-list', {
      prods: result[0],
      pageTitle: 'All Products',
      path: '/products'
    })
  })
  .catch(err=>console.log(err))
};

exports.getProduct=(req,res,next)=>{
  const prodId=req.params.ProductId
  Product.findbyid(prodId)
  .then(([product])=>{res.render("shop/product-detail",{product:product[0],pageTitle:product.title,path:"/products"})
})
  .catch(err=>console.log(err))
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fielddata]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    })
  })
  .catch(err=>console.log(err))
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postcart=(req,res,next)=>{
  const prodId=req.body.productId
  Product.findbyid(prodId,product=>{
    Cart.addproduct(prodId,product.price)
  })
  res.redirect("/")
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};