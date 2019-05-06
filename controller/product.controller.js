var db = require('../db');
var shortid = require('shortid');

module.exports.indexProduct = function(req,res){
    res.render('product/product.pug',{
        product: db.get('products').value()
    });
}