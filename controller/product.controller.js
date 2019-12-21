var db = require('../db');
var shortid = require('shortid');
var Product = require('../model/product.model');
module.exports.indexProduct = function(req,res){
  // res.render('product/product.pug',{
   //    product: db.get('products').value()

    //});

   Product.find().then(function(products){
    res.render('product/product.pug',{
           product: products // ảnh hưởng đến trang root ở product.route.js( dòng 6)
        });
   });
};