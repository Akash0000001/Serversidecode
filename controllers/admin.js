const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    imageUrl:imageUrl,
    price:price,
    description:description
  })
  .then((result)=>{
    res.redirect("/admin/products")})
  .catch(err=>console.log(err))
};

exports.getEditProduct = (req, res, next) => {
  const editmode=req.query.edit
  if(!editmode)
  {
    return res.redirect("/")
  }
  const prodId=req.params.productId;
  Product.findByPk(prodId)
  .then((product)=>{
    if(!product)
    {
      return res.redirect("/")
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editmode,
      product:product
  })
  })
  .catch(err=>console.log(err))
};

exports.posteditproduct=(req,res,next)=>{
  const id=req.body.productId;
  const updatedtitle=req.body.title
  const updatedurl=req.body.imageUrl
  const updatedprice=req.body.price
  const updateddescription=req.body.description
  Product.findByPk(id)
  .then(product=>{
    product.title=updatedtitle;
    product.imageUrl=updatedurl;
    product.price=updatedprice;
    product.description=updateddescription;
    return product.save()
  })
  .then(()=>res.redirect("/admin/products"))
  .catch(err=>console.log(err))
}

exports.postdeleteproduct=(req,res,next)=>{
      const prodId=req.params.productId
      Product.findByPk(prodId)
      .then((product)=> product.destroy())
      .then(()=>res.redirect("/admin/products"))
      .catch(err=>console.log(err))
}


exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
})
.catch(err=>console.log(err))
};
