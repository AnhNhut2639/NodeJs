//var db = require('../db');
//var shortid = require('shortid');
var Product = require('../../model/product.model');
module.exports.indexProduct = async function(req,res){
  var products = await Product.find();
  res.json(products);
   
};